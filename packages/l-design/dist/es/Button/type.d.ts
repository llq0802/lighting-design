import type { CSSProperties, ReactNode } from 'react';
export declare interface ButtonProps {
  children: ReactNode;
  /**
   * 可以这样写属性描述
   * @description       类名
   * @default           -
   */
  className?: string;
  /**
   * 可以这样写属性描述
   * @description       类型
   * @default           medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 可以这样写属性描述
   * @description       类型
   * @default           -
   */
  type?: string;
  /**
   * 可以这样写属性描述
   * @description       类型
   * @default           -
   */
  loading?: boolean;
  /**
   * @description       类型
   * @default           -
   */
  icon?: ReactNode;
  /**
   * @description       类型
   * @default           -
   */
  style?: CSSProperties;
}
