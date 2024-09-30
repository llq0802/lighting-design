import type { SkeletonButtonProps } from 'antd/es/skeleton/Button';
import type { CSSProperties, ReactNode } from 'react';

type TopSkeleton =
  | boolean
  | (SkeletonButtonProps & {
      justify?: 'center' | 'start' | 'end';
      width?: CSSProperties['width'];
      height?: CSSProperties['height'];
      margin?: CSSProperties['margin'];
    });

export type LSkeletonProps = {
  gap?: string;
  className?: string;
  style?: CSSProperties;
  count?: number;
  loading?: boolean;
  vertical?: boolean;
  size?: 'small' | 'default' | 'large';
  itemHeight?: string | number;
  itemStyle?: React.CSSProperties;
  shape?: 'default' | 'circle' | 'round' | 'square';
  children?: ReactNode;
  skeletonButtonProps?: SkeletonButtonProps;

  topSkeleton?: TopSkeleton;

  bottomSkeleton?: TopSkeleton;
};
