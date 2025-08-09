import { Flex, Skeleton } from 'antd';
import type { FC } from 'react';
import type { LSkeletonProps } from './interface';

const LSkeleton: FC<LSkeletonProps> = ({
  firstItemStyle,
  lastItemStyle,
  itemStyle,
  active = true,
  vertical = true,
  loading = true,
  gap = 20,
  count = 4,
  className,
  style,
  size,
  itemHeight,
  shape,
  children,
}) => {
  const dom = (
    <Flex vertical={vertical} flex={1} wrap="nowrap" gap={gap} className={className} style={style}>
      {new Array(count).fill(0).map((_, i) => (
        <Skeleton.Button
          key={i}
          active={active}
          block
          size={size}
          shape={shape}
          style={{
            height: itemHeight,
            ...itemStyle,
            ...(i + 1 === 1 ? firstItemStyle : {}),
            ...(i + 1 === count ? lastItemStyle : {}),
          }}
        />
      ))}
    </Flex>
  );
  return loading ? dom : children;
};
export * from './interface';
export default LSkeleton;
