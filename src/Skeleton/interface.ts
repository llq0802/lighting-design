import type { SkeletonButtonProps } from 'antd/es/skeleton/Button';
import type { SkeletonInputProps } from 'antd/es/skeleton/Input';
import type { CSSProperties, ReactNode } from 'react';

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
  title?: boolean | SkeletonInputProps;
  children?: ReactNode;
  skeletonButtonProps?: SkeletonButtonProps;
};
