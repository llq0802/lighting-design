import type { ReactNode } from 'react';
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
   * @default           -
   */
  type?: string;
}
