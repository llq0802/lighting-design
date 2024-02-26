import { useMemoizedFn, useMount, usePrevious, useUnmount, useUpdateEffect } from 'ahooks';
import classnames from 'classnames';
import type { ECharts, EChartsType } from 'echarts';
import * as echarts from 'echarts';
import isEqual from 'fast-deep-equal';
import { fastDeepClone, isFunction, transformEchartsOption } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { isString, pick } from 'lodash-es';
import { memo, useImperativeHandle, useRef, type FC } from 'react';
import { bind, clear } from 'size-sensor';
import './index.less';
import type { LEChartsProps } from './interface';
const prefixCls = 'lightd-echarts';

const pickKeys = ['option', 'notMerge', 'lazyUpdate', 'showLoading', 'loadingOption'];

const LECharts: FC<LEChartsProps> = memo((props) => {
  const {
    className,
    style,
    option = emptyObject,
    echartsRef,
    onEvents,
    onChartReady,
    onChartResize,
    notMerge = false,
    lazyUpdate = true,
    showLoading,
    loadingOption,
    shouldSetOption,
    theme,
    opts,
    autoResize = true,
    autoResizeDuration = 800,
    designWidth = 1920,
    autoResizeFields,
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const echartsInstanceRef = useRef<ECharts>();
  const isInitialResize = useRef(true);
  const unBind = useRef<() => void>();
  const prevProps = usePrevious(props);

  /** echarts.init 初始化实例 */
  const initEchartsInstance = useMemoizedFn(async () => {
    return new Promise((resolve) => {
      const echartsInstance = (echartsInstanceRef.current = echarts.init(ref.current, theme, opts));
      resolve(echartsInstance);
    });
  });

  /** 更新图表 */
  const updateEChartsOption = useMemoizedFn(() => {
    let echartOption;
    if (
      autoResize &&
      autoResizeFields !== false &&
      (autoResizeFields?.length || autoResizeFields === void 0)
    ) {
      echartOption = transformEchartsOption(
        fastDeepClone(option), // 必须先深克隆
        [...new Set(['fontSize', ...(autoResizeFields || emptyArray)])],
        designWidth,
      );
    } else {
      echartOption = option;
    }

    const echartInstance = echartsInstanceRef.current;
    echartInstance?.setOption(echartOption, notMerge, lazyUpdate);
    if (showLoading) echartInstance?.showLoading(loadingOption);
    else echartInstance?.hideLoading();
  });

  /** 绑定图表实例事件 */
  const bindEvents = useMemoizedFn(
    (instance: ECharts, events: Record<string, (params: any, ins: ECharts) => void>) => {
      function _bindEvent(eventName: string, func: (params: any, ins: ECharts) => void) {
        if (isString(eventName) && isFunction(func)) {
          instance.on(eventName, (param: any) => {
            func(param, instance);
          });
        }
      }

      Object.keys(events)?.forEach((eventName) => {
        _bindEvent(eventName, events[eventName]);
      });
    },
  );
  /** 创建图表 */
  const renderNewEcharts = useMemoizedFn(async () => {
    await initEchartsInstance();

    updateEChartsOption();

    const echartInstance = echartsInstanceRef.current as EChartsType;

    bindEvents(echartInstance, onEvents || {});

    if (isFunction(onChartReady)) onChartReady?.(echartInstance);

    if (!ref.current) return;

    unBind.current = bind(ref.current, (dom) => {
      // 解决闪动问题
      if (dom!.clientWidth <= 0 || dom!.clientHeight <= 0) return;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (autoResize) resize();

      onChartResize?.(echartInstance, dom);
    });
  });

  /** 销毁当前图表实例并取消dom宽高监听 */
  const dispose = useMemoizedFn(() => {
    unBind.current?.();
    echartsInstanceRef.current?.clear?.();
    echartsInstanceRef.current?.dispose?.();
    if (ref.current) {
      try {
        clear(ref.current);
      } catch (e) {
        console.warn(e);
      }
      echarts?.dispose(ref.current);
    }
  });

  /** 调用图标实例 resize函数 并加动画 */
  const resize = useMemoizedFn(() => {
    const echartsInstance = echartsInstanceRef.current;
    if (!isInitialResize.current) {
      try {
        if (
          autoResizeFields !== false &&
          (autoResizeFields?.length || autoResizeFields === void 0)
        ) {
          updateEChartsOption();
        }

        echartsInstance?.resize({
          width: 'auto',
          height: 'auto',
          animation: { duration: autoResizeDuration },
        });
      } catch (e) {
        console.warn(e);
      }
    }
    isInitialResize.current = false;
  });

  useUpdateEffect(() => {
    // 第二步优化性能

    // 如果返回 false 直接不更新
    if (isFunction(shouldSetOption) && !shouldSetOption?.(prevProps, props)) {
      return;
    }

    // 以下属性修改的时候，需要 dispose 之后再新建
    // 1. 切换 theme 的时候
    // 2. 修改 opts 的时候
    // 3. 修改 onEvents 的时候，这样可以取消所有之前绑定的事件
    if (
      !isEqual(prevProps?.theme, theme) ||
      !isEqual(prevProps?.opts, opts) ||
      !isEqual(prevProps?.onEvents, onEvents)
    ) {
      dispose();
      renderNewEcharts();
      return;
    }

    if (!isEqual(pick(prevProps, pickKeys), pick(props, pickKeys))) {
      updateEChartsOption();
    }

    // 如果 style 或者  className 变化 重新resize
    if (!isEqual(prevProps?.style, style) || !isEqual(prevProps?.className, className)) {
      resize();
    }
  }, [
    shouldSetOption,

    theme,
    opts,
    onEvents,

    option,
    notMerge,
    lazyUpdate,
    showLoading,
    loadingOption,

    style,
    className,
  ]);

  useMount(() => {
    renderNewEcharts();
  });
  useUnmount(() => {
    dispose();
  });

  useImperativeHandle(echartsRef, () => {
    return {
      echartsInstanceRef,
      rootRef: ref,
      resize,
      dispose,
    };
  });

  return <div ref={ref} className={classnames(prefixCls, className)} style={style} />;
});

// 第一步优化性能
export default LECharts;
export * from './interface';
