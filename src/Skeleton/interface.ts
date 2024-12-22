import type { SkeletonButtonProps } from 'antd/es/skeleton/Button';
import type { CSSProperties, ReactNode } from 'react';

type TopSkeletonProps =
  | boolean
  | (SkeletonButtonProps & {
      justify?: 'center' | 'start' | 'end';
      width?: CSSProperties['width'];
      height?: CSSProperties['height'];
      margin?: CSSProperties['margin'];
    });

export type LSkeletonProps = {
  gap?: string | number;
  className?: string;
  style?: CSSProperties;
  count?: number;
  active?: boolean;
  loading?: boolean;
  vertical?: boolean;
  size?: 'small' | 'default' | 'large';
  itemHeight?: string | number;
  itemStyle?: React.CSSProperties;
  shape?: 'default' | 'circle' | 'round' | 'square';
  children?: ReactNode;
  skeletonButtonProps?: SkeletonButtonProps;
  topSkeleton?: TopSkeletonProps;
  bottomSkeleton?: TopSkeletonProps;
};
