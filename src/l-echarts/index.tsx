import { useMount, usePrevious, useUnmount, useUpdateEffect } from 'ahooks';
import type { ECharts } from 'echarts';
import * as echarts from 'echarts';
import isEqual from 'fast-deep-equal';
import { emptyObject } from 'lighting-design/constants';
import { isString, pick } from 'lodash-es';
import { memo, useImperativeHandle, useRef, type FC } from 'react';
import { bind as bindDom, clear as clearDom } from 'size-sensor';
import type { LEChartsProps } from './interface';
import { useStyles } from './styles';

const pickKeys = ['option', 'notMerge', 'lazyUpdate', 'showLoading', 'loadingOption', 'replaceMerge'];

const LECharts: FC<LEChartsProps> = memo((props) => {
  const {
    className,
    style,
    option = emptyObject,
    actionRef,
    onEvents = emptyObject,
    onChartReady,
    onChartResize,
    notMerge,
    lazyUpdate,
    showLoading,
    loadingOption,
    shouldSetOption,
    theme,
    opts,
    autoResize = true,
    autoResizeDuration = 800,
    replaceMerge,
    transformOption,
  } = props;

  const { cx, styles } = useStyles();
  const ref = useRef<HTMLDivElement>(null!);
  const echartsInstanceRef = useRef<ECharts>();
  const isInitialResize = useRef(true);
  const unBind = useRef<() => void>();
  const prevProps = usePrevious(props);

  /** 更新图表 */
  const updateEChartsOption = () => {
    echartsInstanceRef.current?.setOption(transformOption ? transformOption(option) : option, {
      notMerge,
      lazyUpdate,
      replaceMerge,
    });

    if (showLoading) echartsInstanceRef.current?.showLoading(loadingOption);
    else echartsInstanceRef.current?.hideLoading();
  };

  /** 绑定图表实例事件 */
  const bindEvents = (instance: ECharts, events: any) => {
    function _bindEvent(eventName: string, func: any) {
      if (isString(eventName) && typeof func === 'function') {
        instance.on(eventName, (param: any) => {
          func(param, instance);
        });
      }
    }
    Object.keys(events)?.forEach((eventName) => {
      _bindEvent(eventName, events[eventName]);
    });
  };

  /** 移除图表实例事件 */
  const offEvents = (instance: ECharts, events: any) => {
    if (!events) return;
    Object.keys(events)?.forEach((eventName) => {
      if (isString(eventName)) {
        instance.off(eventName);
      }
    });
  };

  /** 创建图表 */
  const renderNewEcharts = () => {
    if (!ref.current) return;

    echartsInstanceRef.current = echarts.init(ref.current, theme, opts);

    updateEChartsOption();

    bindEvents(echartsInstanceRef.current, onEvents);

    if (typeof onChartReady === 'function') onChartReady?.(echartsInstanceRef.current);

    unBind.current = bindDom(ref.current, (dom) => {
      // 解决闪动问题
      if (dom!.clientWidth <= 0 || dom!.clientHeight <= 0) return;
      if (autoResize) resize();
      onChartResize?.(echartsInstanceRef.current!, dom as HTMLDivElement);
    });
  };

  /** 销毁当前图表实例并取消dom宽高监听 */
  const dispose = () => {
    unBind.current?.();
    echartsInstanceRef.current?.off?.();
    echartsInstanceRef.current?.dispose?.();
    echartsInstanceRef.current?.clear?.();
    if (!ref.current) return;
    try {
      clearDom(ref.current);
    } catch (error) {
      console.error(error);
    }
    echarts?.dispose(ref.current);
  };

  /** 调用图标实例 resize函数 并加动画 */
  const resize = () => {
    if (!isInitialResize.current) {
      try {
        echartsInstanceRef.current?.resize({
          width: 'auto',
          height: 'auto',
          animation: { duration: autoResizeDuration },
        });
      } catch (e) {
        console.warn(e);
      }
    }
    isInitialResize.current = false;
  };

  useUpdateEffect(() => {
    // 第二步优化性能

    // 如果返回 false 直接不更新
    if (typeof shouldSetOption === 'function' && !shouldSetOption?.(prevProps, props)) {
      return;
    }

    // 以下属性修改的时候，需要 dispose 之后再新建
    // 1. 切换 theme 的时候
    // 2. 修改 opts 的时候
    if (!isEqual(prevProps?.theme, theme) || !isEqual(prevProps?.opts, opts)) {
      dispose();
      renderNewEcharts();
      return;
    }

    // 修改 onEvent 的时候先移除历史事件再添加
    if (!isEqual(prevProps?.onEvents, onEvents)) {
      offEvents(echartsInstanceRef.current!, onEvents);
      bindEvents(echartsInstanceRef.current!, onEvents);
    }

    // 以下属性修改的时候，需要直接更新
    if (!isEqual(pick(prevProps, pickKeys), pick(props, pickKeys))) {
      updateEChartsOption();
    }

    // 如果 style 或者  className 变化 重新 resize
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
    replaceMerge,

    style,
    className,
  ]);

  useMount(() => {
    renderNewEcharts();
  });
  useUnmount(() => {
    dispose();
  });

  useImperativeHandle(actionRef, () => {
    return {
      getEchartsInstance: () => echartsInstanceRef.current!,
      rootRef: ref,
      resize,
      dispose,
    };
  });

  return <div ref={ref} className={cx(styles.container, className)} style={style} />;
});

LECharts.displayName = 'LECharts';

export default LECharts;
export * from './interface';
