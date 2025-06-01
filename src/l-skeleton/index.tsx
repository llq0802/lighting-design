import { Flex, Skeleton } from 'antd';
import clxs from 'classnames';
import type { FC } from 'react';
import './index.less';
import type { LSkeletonProps } from './interface';

const prefixCls = 'lightd-skeleton';

const LSkeleton: FC<LSkeletonProps> = ({
  topSkeleton,
  bottomSkeleton,
  active = true,
  vertical = true,
  gap = 20,
  count = 4,
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
  const topSkeletonProp = topSkeleton && typeof topSkeleton !== 'boolean' ? topSkeleton : {};
  const bottomSkeletonProp = bottomSkeleton && typeof bottomSkeleton !== 'boolean' ? bottomSkeleton : {};

  const dom = (
    <>
      {topSkeleton && !vertical && (
        <Flex justify={topSkeletonProp?.justify}>
          <Skeleton.Input
            active={active}
            size={size}
            shape={shape}
            {...bottomSkeletonProp}
            style={{
              margin: bottomSkeletonProp?.margin,
              marginBottom: gap,
              width: bottomSkeletonProp?.width || 180,
              height: bottomSkeletonProp?.height || itemHeight,
              ...bottomSkeletonProp?.style,
            }}
          />
        </Flex>
      )}

      <Flex vertical={vertical} gap={gap} className={clxs(prefixCls, className)} style={style}>
        {topSkeleton && vertical && (
          <Flex justify={topSkeletonProp?.justify}>
            <Skeleton.Button
              active={active}
              size={size}
              shape={shape}
              {...topSkeletonProp}
              style={{
                margin: topSkeletonProp?.margin,
                width: topSkeletonProp?.width || 180,
                height: topSkeletonProp?.height || itemHeight,
                ...topSkeletonProp?.style,
              }}
            />
          </Flex>
        )}
        {new Array(count).fill(count).map((_, i) => (
          <Skeleton.Button
            key={i}
            active={active}
            block
            size={size}
            shape={shape}
            {...skeletonButtonProps}
            style={{
              height: itemHeight,
              ...itemStyle,
              ...skeletonButtonProps?.style,
            }}
          />
        ))}

        {bottomSkeleton && vertical && (
          <Flex justify={bottomSkeletonProp?.justify}>
            <Skeleton.Button
              active={active}
              size={size}
              shape={shape}
              {...bottomSkeletonProp}
              style={{
                margin: bottomSkeletonProp?.margin,
                width: bottomSkeletonProp?.width || 180,
                height: bottomSkeletonProp?.height || itemHeight,
                ...bottomSkeletonProp?.style,
              }}
            />
          </Flex>
        )}
      </Flex>
      {bottomSkeleton && !vertical && (
        <Flex justify={bottomSkeletonProp?.justify}>
          <Skeleton.Button
            active={active}
            size={size}
            shape={shape}
            {...bottomSkeletonProp}
            style={{
              margin: bottomSkeletonProp?.margin,
              marginTop: gap,
              width: bottomSkeletonProp?.width || 180,
              height: bottomSkeletonProp?.height || itemHeight,
              ...bottomSkeletonProp?.style,
            }}
          />
        </Flex>
      )}
    </>
  );
  return loading ? dom : children;
};
export * from './interface';

export default LSkeleton;
