import type { ECharts, EChartsOption } from 'echarts';
import type { CSSProperties, MutableRefObject } from 'react';

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

export type LEChartsOption = EChartsOption | Record<string, any>;

export type LEChartsInstance =
  | {
      /** echarts的实例 */
      echartsInstanceRef: MutableRefObject<ECharts | undefined>;
      /** echarts容器的根元素 */
      rootRef: MutableRefObject<HTMLDivElement | null>;
      /** 内置执行 resize图表并附带动画 还会resize autoResizeField配置的字段名  */
      resize: () => void;
      /** 内置销毁当前图表实例与取消dom大小监听的方法 */
      dispose: () => void;
    }
  | undefined;

export type LEChartsProps = {
  /**
   *LECharts组件的实例 包含 echarts的实例 内置resize dispose 根元素
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  readonly echartsRef?: MutableRefObject<LEChartsInstance>;
  /**
   *根元素的类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  className?: string;
  /**
   *根元素的样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  style?: CSSProperties;
  /**
   *echarts 的 option
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   *@see echarts 配置文档 https://www.isqqw.com/echarts-doc/zh/api.html#echarts EChartsOption
   */
  option: LEChartsOption;
  /**
   *echarts 初始化时的主题
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   *@see echarts配置文档 https://www.isqqw.com/echarts-doc/zh/api.html#echarts.init EChartsOption
   */
  theme?: string | Record<string, any>;
  /**
   *是否不跟之前设置的 option 进行合并。默认为 false。即表示合并。合并的规则
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   *@see echarts配置文档 https://www.isqqw.com/echarts-doc/zh/api.html#echartsInstance.setOption EChartsOption
   */
  readonly notMerge?: boolean;
  /**
   *在设置完 option 后是否不立即更新图表，默认为 false，即同步立即更新。如果为 true，则会在下一个 animation frame 中，才更新图表。
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   *@see echarts配置文档 https://www.isqqw.com/echarts-doc/zh/api.html#echartsInstance.setOption EChartsOption
   */
  readonly lazyUpdate?: boolean;
  /**
   *在更新图表时是否显示echarts的loading
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  showLoading?: boolean;
  /**
   *echarts实例的showLoading的配置项
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   *@see echarts配置文档 https://www.isqqw.com/echarts-doc/zh/api.html#echartsInstance.showLoading EChartsOption
   */
  readonly loadingOption?: Record<string, any>;
  /**
   *echarts.init方法的opts配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   *@see echarts配置文档 https://www.isqqw.com/echarts-doc/zh/api.html#echarts.init EChartsOption
   */
  readonly opts?: Opts;
  /**
   *图表渲染完成时的回调 回调的参数为当前图表实例
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  readonly onChartReady?: (instance: ECharts) => void;
  /**
   *图表大小发生改变时的回调 回调的参数为当前图表实例与根元素dom
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  readonly onChartResize?: (instance: ECharts, dom: HTMLDivElement) => void;
  /**
   *echarts的事件
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   *@see echarts配置文档 https://www.isqqw.com/echarts-doc/zh/api.html#echartsInstance.on EChartsOption
   */
  readonly onEvents?: Record<string, (params: any, ins: ECharts) => void>;
  /**
   *是否能更新图表 返回false将不会更新图表
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  readonly shouldSetOption?: (
    prevProps: LEChartsProps | undefined,
    props: LEChartsProps,
  ) => boolean;
  /**
   *当echarts的容器dom大小发生变化时,是否自动resize 默认为true
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  readonly autoResize?: boolean;
  /**
   *autoResize为true时生效, 当echarts的容器dom大小发生变化时,内部resize时的动画过渡时长
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  readonly autoResizeDuration?: number;
  /**
   *autoResize为true时生效, 设计稿的宽度 默认1920 配合 autoResizeFields 属性做响应式大小计算
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  readonly designWidth?: number;
  /**
   * - autoResize为true时生效, 当echarts的容器dom大小发生变化时,option中需要响应式大小的字段
   * - 响应式大小的计算根据 designWidth
   * - 默认会对`fontSize`进行设置 如果为`autoResizeFields`为`false`则所有字段都不会做响应式
   * - 包含在autoResizeFields中的字段的值必须number类型
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEChartsProps
   */
  readonly autoResizeFields?: string[] | false;
};
