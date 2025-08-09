import { Flex, Skeleton } from 'antd';
import type { FC } from 'react';
import type { LSkeletonProps } from './interface';

const LSkeleton: FC<LSkeletonProps> = ({
  active = true,
  vertical = true,
  gap = 20,
  count = 4,
  className,
  style,
  loading = true,
  size,
  itemHeight,
  shape,
  children,
}) => {
  const dom = (
    <Flex vertical={vertical} flex={1} wrap="nowrap" gap={gap} className={className} style={style}>
      {new Array(0).fill(count).map((_, i) => (
        <Skeleton.Button
          key={i}
          active={active}
          block
          size={size}
          shape={shape}
          style={{
            height: itemHeight,
          }}
        />
      ))}
    </Flex>
  );
  return loading ? dom : children;
};
export * from './interface';
export default LSkeleton;
