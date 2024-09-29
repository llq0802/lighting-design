import { Flex, Skeleton } from 'antd';
import type { FC } from 'react';
import type { LSkeletonProps } from './interface';

const LSkeleton: FC<LSkeletonProps> = ({
  title,
  vertical = true,
  gap = 16,
  count = 6,
  className,
  style,
  loading = true,
  size,
  itemHeight,
  itemStyle,
  shape,
  children,
  skeletonButtonProps = {},
}) => {
  const titleProps = title && typeof title !== 'boolean' ? title : {};

  const dom = (
    <>
      {title && !vertical && (
        <Skeleton.Input active size={size} {...titleProps} style={{ marginBottom: gap, ...titleProps?.style }} />
      )}
      <Flex rootClassName="a-skeleton-wrapper" vertical={vertical} gap={gap} className={className} style={style}>
        {title && vertical && <Skeleton.Input active size={size} {...titleProps} />}
        {new Array(count).fill(count).map((_, i) => (
          <Skeleton.Button
            key={i}
            active
            block
            size={size}
            shape={shape}
            style={{
              height: itemHeight,
              ...itemStyle,
            }}
            {...skeletonButtonProps}
          />
        ))}
        {title && vertical && <Skeleton.Input active size={size} {...titleProps} />}
      </Flex>
      {title && !vertical && (
        <Skeleton.Input active size={size} {...titleProps} style={{ marginBottom: gap, ...titleProps?.style }} />
      )}
    </>
  );
  return loading ? dom : children;
};
export * from './interface';

export default LSkeleton;
