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
   * 原始数据列表
   */
  list: Record<string, any>[];
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
   * 开启数据更新监听
   */
  isWatch?: boolean;
  /**
   *  动画延迟时间
   */
  delay?: number;
  /**
   * 动画方式
   */
  ease?: EaseType;

  /**
   *  拷贝几份滚动列表
   */
  copyNum?: number;
  /**
   * 开启鼠标悬停时支持滚轮滚动
   */
  wheel?: boolean;
  /**
   * 滚动盒子的类名
   */
  wrapperClassName?: string;
  /**
   *  高度
   */
  height: number | string;
  /**
   * 列表节点
   */
  children: React.ReactNode;
  /**
   * 滚动实例
   */
  actionRef?: React.MutableRefObject<LSeamlessScrollInstance | undefined>;
}
