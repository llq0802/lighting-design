import type { ReactNode } from 'react';

export interface LH5PreviewProps {
  /**
   *手机型号
   *@see 官网 https://llq0802.github.io/lighting-design/latest LH5PreviewProps
   */
  type?: 'iPhone6' | 'iPhone14Pro';
  /**
   *手机壳颜色
   *@see 官网 https://llq0802.github.io/lighting-design/latest LH5PreviewProps
   */
  deviceColor?: 'gold' | 'gray' | 'white';
  /**
   *手机缩放大小
   *@see 官网 https://llq0802.github.io/lighting-design/latest LH5PreviewProps
   */
  scale?: number | string;
  /**
   *组件根标签类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LH5PreviewProps
   */
  className?: string;
  /**
   *组件根标签样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LH5PreviewProps
   */
  style?: React.CSSProperties;
  outRef?: any;
  children: ReactNode;
}
