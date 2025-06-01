import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import React from 'react';
import type { LListProps } from './interface';

const LList: React.FC<LListProps> & {
  Item: typeof List.Item;
} = ({
  rowKey,
  height = 0,
  itemMinHeight,
  onScrollBottom,

  renderItem,
  virtualListProps = {},
  ...restProps
}) => {
  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    const scrollHeight = Math.ceil(e.currentTarget.scrollHeight);
    const scrollTop = Math.ceil(e.currentTarget.scrollTop);

    console.log('==scrollTop====>', scrollTop);

    // if (height + scrollTop >= scrollHeight) {
    //   onScrollBottom?.();
    // }

    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - height) <= 1) {
      onScrollBottom?.();
    }
  };

  if (!height) {
    return <List renderItem={renderItem} {...restProps} />;
  }

  return (
    <List>
      <VirtualList
        data={restProps.dataSource || []}
        height={height}
        itemHeight={itemMinHeight}
        itemKey={rowKey as React.Key}
        onScroll={onScroll}
        {...virtualListProps}
      >
        {(item, index, props) => renderItem?.(item, index, props)}
      </VirtualList>
    </List>
  );
};

LList.Item = List.Item;

export default LList;
export * from './interface';
