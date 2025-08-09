import type { SkeletonButtonProps } from 'antd/es/skeleton/Button';
import type { CSSProperties, ReactNode } from 'react';

export type LSkeletonProps = {
  gap?: string | number;
  className?: string;
  style?: CSSProperties;
  count?: number;
  active?: boolean;
  loading?: boolean;
  vertical?: boolean;
  size?: SkeletonButtonProps['size'];
  itemHeight?: string | number;
  itemStyle?: React.CSSProperties;
  shape?: SkeletonButtonProps['shape'];
  children?: ReactNode;
};
