import type { ListProps } from 'antd';
import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import React from 'react';

type LListProps = {
  /** 虚拟滚动容器的高度 设置后将自动开启虚拟滚动  */
  height?: number;
  /** 每一项最小的高度 */
  itemMinHeight?: number;
  /** 虚拟滚动开启时，容器滚动触底事件的处理函数 */
  onScrollBottom?: () => void;
} & ListProps<any>;

const LList: React.FC<LListProps> & {
  Item: typeof List.Item;
} = ({
  rowKey,
  height = 0,
  itemMinHeight,
  onScrollBottom,

  renderItem,
  ...restProps
}) => {
  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === height) {
      onScrollBottom?.();
    }
  };

  if (!height) {
    return <List renderItem={renderItem} {...restProps} />;
  }

  return (
    <List itemLayout="vertical" {...restProps}>
      <VirtualList
        data={restProps.dataSource ?? []}
        height={height}
        itemHeight={itemMinHeight}
        itemKey={rowKey as React.Key}
        onScroll={onScroll}
      >
        {(item, index) => renderItem?.(item, index)}
      </VirtualList>
    </List>
  );
};

LList.Item = List.Item;

export default LList;
