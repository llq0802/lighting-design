import type { ECharts, EChartsOption } from 'echarts';
import type { CSSProperties } from 'react';

declare type RendererType = 'canvas' | 'svg';

declare type Opts = {
  locale?: string;
  renderer?: RendererType;
  devicePixelRatio?: number;
  useDirtyRect?: boolean;
  useCoarsePointer?: boolean;
  pointerSize?: number;
  ssr?: boolean;
  width?: number | string | 'auto';
  height?: number | string | 'auto';
};

export type LEChartsProps = {
  /**
   * echarts library entry, use it for import necessary.
   */
  readonly echartsRef?: any;

  /**
   * `className` for container
   */
  readonly className?: string;
  /**
   * `style` for container
   */
  readonly style?: CSSProperties;
  /**
   * echarts option
   */
  readonly option: EChartsOption;
  /**
   * echarts theme config, can be:
   * 1. theme name string
   * 2. theme object
   */
  readonly theme?: string | Record<string, any>;
  /**
   * notMerge config for echarts, default is `false`
   */
  readonly notMerge?: boolean;
  /**
   * lazyUpdate config for echarts, default is `false`
   */
  readonly lazyUpdate?: boolean;
  /**
   * showLoading config for echarts, default is `false`
   */
  readonly showLoading?: boolean;
  /**
   * loadingOption config for echarts, default is `null`
   */
  readonly loadingOption?: any;
  /**
   * echarts opts config, default is `{}`
   */
  readonly opts?: Opts;
  /**
   * when after chart reander, do the callback with echarts instance
   */
  readonly onChartReady?: (instance: ECharts) => void;
  /**
   * bind events, default is `{}`
   */
  readonly onEvents?: Record<string, (params: any, ins: ECharts) => void>;
  /**
   * should update echarts options
   */
  readonly shouldSetOption?: (
    prevProps: LEChartsProps | undefined,
    props: LEChartsProps,
  ) => boolean;
  /**
   * should trigger resize when window resize
   */
  resizeDuration?: number;
  /**
   * should trigger resize when window resize
   */
  readonly autoResize?: boolean;
};
