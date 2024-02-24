declare type EaseType =
  | {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }
  | string;

export declare interface LSeamlessScrollInstance {
  onReset(): void;
  onStopMove(): void;
  onStartMove(): void;
}
export declare interface LSeamlessScrollProps {
  /**
   * 是否开启自动滚动
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  isAutoScroll?: boolean;
  /**
   * 原始数据列表
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  list: Record<string, any>[];
  /**
   * 步进速度，step也是单步大小的约数
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  step?: number;
  /**
   * 开启滚动的数据大小 默认 list.length > 3
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  limitScrollNum?: number;
  /**
   *  是否开启鼠标悬停
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  hover?: boolean;
  /**
   *  控制滚动方向
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  direction?: 'up' | 'down' | 'left' | 'right';
  /**
   *  单步运动停止的高度(每一项的高度)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  singleHeight?: number;
  /**
   *  单步运动停止的宽度 每一项的宽度)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  singleWidth?: number;
  /**
   *  单步停止等待时间 (默认值 1000ms)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  singleWaitTime?: number;
  /**
   * 是否开启 rem 单位
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  isRemUnit?: boolean;
  /**
   * 开启数据更新监听
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  isWatch?: boolean;
  /**
   *  动画延迟时间
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  delay?: number;
  /**
   * 动画方式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  ease?: EaseType;
  /**
   * 动画循环次数，默认-1表示一直动画 0表示不循环
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   *
   */
  count?: number;
  /**
   *  拷贝几份滚动列表
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   *
   */
  copyNum?: number;
  /**
   * 开启鼠标悬停时支持滚轮滚动
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  wheel?: boolean;
  /**
   * 滚动盒子的类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  wrapperClassName?: string;
  /**
   *  滚动盒子的高度
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  wrapperHeight?: number;
  /**
   * 列表节点
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  children: React.ReactNode;
  /**
   * 滚动实例
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSeamlessScrollProps
   */
  scrollRef: React.MutableRefObject<LSeamlessScrollInstance | undefined>;
}
