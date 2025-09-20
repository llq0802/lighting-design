export declare interface LSeamlessScrollActionRef {
  reset(): void;
  start(): void;
  stop(): void;
}
export declare interface LSeamlessScrollProps<T = any> {
  autoScroll?: boolean;
  /**
   * 原始数据列表
   */
  list: T[];
  /**
   * 步进速度，step也是单步大小的约数
   */
  step?: number;
  /**
   *  是否开启鼠标悬停
   */
  hover?: boolean;
  /**
   *  控制滚动方向
   */
  direction?: 'up' | 'down';
  /**
   *  单步运动停止的高度(每一项的高度)
   */
  singleHeight?: number;
  /**
   *  单步停止等待时间 (默认值 1000ms)
   */
  singleWaitTime?: number;

  /**
   * css 过渡效果
   */
  ease?: string;

  /**
   *  拷贝几份滚动列表
   *  默认值 2
   */
  copyNum?: number;
  /**
   * 开启鼠标悬停时支持滚轮滚动
   * 必须配合hover使用
   */
  wheel?: boolean;
  /**
   * 滚动盒子的类名
   */
  className?: string;
  style?: React.CSSProperties;
  /**
   *  高度
   */
  height: number | string;
  /**
   * 鼠标滚轮滚动距离
   */
  wheelDistance?: number;
  actionRef?: React.MutableRefObject<LSeamlessScrollActionRef | undefined>;
  rowKey?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
}
