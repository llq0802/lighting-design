import type { ListProps } from 'antd';

export type LListProps = {
  /**
   * 虚拟滚动容器的高度 设置后将自动开启虚拟滚动
   */
  height?: number;
  /**
   * 每一项的高度
   */
  itemHeight?: number;
  /**
   * 虚拟滚动开启时，容器滚动触底事件的处理函数
   */

  onScrollBottom?: () => void;
  /**
   * @see https://github.com/react-component/virtual-list
   */
  virtualListProps?: Record<string, any>;
} & ListProps<any>;
