import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { forwardRef } from 'react';
import type { LListProps } from './interface';

type LListType = ReturnType<typeof forwardRef<any, LListProps>> & {
  Item: typeof List.Item;
};

const LList = forwardRef<any, LListProps>(
  ({ height = 0, itemHeight, onScrollBottom, renderItem, virtualListProps, ...restProps }, ref) => {
    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
      virtualListProps?.onScroll?.(e);
      if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - height) <= 1) {
        onScrollBottom?.();
      }
    };

    if (!height) {
      return <List ref={ref} renderItem={renderItem} {...restProps} />;
    }

    return (
      <List>
        <VirtualList
          ref={ref}
          data={restProps?.dataSource || []}
          height={height}
          itemHeight={itemHeight}
          itemKey={restProps?.rowKey as React.Key}
          {...virtualListProps}
          onScroll={onScroll}
        >
          {(item, index, props) => renderItem?.(item, index, props)}
        </VirtualList>
      </List>
    );
  },
) as LListType;

LList.Item = List.Item;

export default LList;
export * from './interface';
