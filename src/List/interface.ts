import type { ListProps } from 'antd';

export type LListProps = {
  /**
   * 虚拟滚动容器的高度 设置后将自动开启虚拟滚动
   *@see 官网 https://llq0802.github.io/lighting-design/latest LListProps
   */
  height?: number;
  /**
   * 每一项最小的高度
   *@see 官网 https://llq0802.github.io/lighting-design/latest LListProps
   */
  itemMinHeight?: number;
  /**
   * 虚拟滚动开启时，容器滚动触底事件的处理函数
   *@see 官网 https://llq0802.github.io/lighting-design/latest LListProps
   */
  onScrollBottom?: () => void;
} & ListProps<any>;
