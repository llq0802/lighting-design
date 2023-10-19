import {
  useMemoizedFn,
  useMount,
  usePrevious,
  useUnmount,
  useUpdateEffect,
} from 'ahooks';
import classnames from 'classnames';
import type { ECharts, EChartsType } from 'echarts';
import * as echarts from 'echarts';
import isEqual from 'fast-deep-equal';
import { isFunction, isString, pick } from 'lighting-design/_utils';
import { memo, useImperativeHandle, useRef, type FC } from 'react';
import { bind, clear } from 'size-sensor';
import './index.less';
import type { LEChartsProps } from './tyeps';

const prefixCls = 'lightd-echarts';

const LECharts: FC<LEChartsProps> = (props) => {
  const {
    className,
    style,
    echartsRef,
    onEvents,
    onChartReady,
    autoResize = true,
    option,
    notMerge = false,
    lazyUpdate = false,
    showLoading,
    loadingOption = null,
    shouldSetOption,
    resizeDuration = 800,
    theme,
    opts,
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const echartsInstanceRef = useRef<ECharts>();
  const isInitialResize = useRef(true);
  const unBind = useRef<() => void>();
  const prevProps = usePrevious(props);
  // const prevPropsRef = useRef();
  // const prevProps = prevPropsRef.current;

  /** 初始化实例 */
  const initEchartsInstance = useMemoizedFn(async () => {
    return new Promise((resolve) => {
      const echartsInstance = (echartsInstanceRef.current = echarts.init(
        ref.current,
        theme,
        opts,
      ));
      echartsInstance?.on?.('finished', () => {
        const width = ref.current!.clientWidth;
        const height = ref.current!.clientHeight;
        echarts.dispose(ref.current!);
        const opts = {
          width,
          height,
          ...props.opts,
        };
        const newIns = (echartsInstanceRef.current = echarts.init(
          ref.current,
          theme,
          opts,
        ));
        resolve(newIns);
      });
    });
  });

  /** 更新图表 */
  const updateEChartsOption = useMemoizedFn(() => {
    const echartInstance = echartsInstanceRef.current;
    echartInstance?.setOption(option, notMerge, lazyUpdate);
    if (showLoading) echartInstance?.showLoading(loadingOption);
    else echartInstance?.hideLoading();
    return echartInstance;
  });

  /** 绑定图表实例事件 */
  const bindEvents = (
    instance: ECharts,
    events: Record<string, (params: any, ins: ECharts) => void>,
  ) => {
    function _bindEvent(
      eventName: string,
      func: (params: any, ins: ECharts) => void,
    ) {
      if (isString(eventName) && isFunction(func)) {
        instance.on(eventName, (param: any) => {
          func(param, instance);
        });
      }
    }

    Object.keys(events)?.forEach((eventName) => {
      _bindEvent(eventName, events[eventName]);
    });
  };
  /** 创建图表 */
  const renderNewEcharts = useMemoizedFn(async () => {
    await initEchartsInstance();

    updateEChartsOption();

    const echartInstance = echartsInstanceRef.current as EChartsType;

    bindEvents(echartInstance, onEvents || {});

    if (isFunction(onChartReady)) onChartReady?.(echartInstance);

    if (ref.current && autoResize) {
      unBind.current = bind(ref.current, (dom) => {
        if (dom!.clientWidth > 0 && dom!.clientHeight > 0) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          resize();
        }
      });
    }
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
      echarts.dispose(ref.current);
    }
  });

  /** 调用图标实例 resize函数 并加动画 */
  const resize = useMemoizedFn(() => {
    const echartsInstance = echartsInstanceRef.current;
    console.log('resize');
    if (!isInitialResize.current) {
      try {
        echartsInstance?.resize({
          width: 'auto',
          height: 'auto',
          animation: {
            duration: resizeDuration,
          },
        });
      } catch (e) {
        console.warn(e);
      }
    }
    isInitialResize.current = false;
  });

  useMount(() => {
    renderNewEcharts();
  });

  useUpdateEffect(() => {
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
      // prevPropsRef.current = props;
      dispose();
      renderNewEcharts();
      return;
    }
    const pickKeys = [
      'option',
      'notMerge',
      'lazyUpdate',
      'showLoading',
      'loadingOption',
    ];

    if (!isEqual(pick(prevProps, pickKeys), pick(props, pickKeys))) {
      // prevPropsRef.current = props;
      updateEChartsOption();
    }

    // 如果 style 或者  className 变化 重新resize
    if (
      !isEqual(prevProps?.style, style) ||
      !isEqual(prevProps?.className, className)
    ) {
      // prevPropsRef.current = props;
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

  return (
    <div ref={ref} className={classnames(prefixCls, className)} style={style} />
  );
};

export default memo(LECharts);
