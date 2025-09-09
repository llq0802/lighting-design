import type { CSSProperties } from 'react';

export interface LNumberRollProps {
  /**
   * 每个数字之前的间隔
   */
  gap?: number | string;
  /**
   * 字体的大小，控制者个数字的高度
   * @default 36
   */
  fontSize?: number | string;
  /**
   * 数字值或者日期字符串
   */
  value: number | string;
  /**
   * 动画速度 `单位ms`
   * */
  speed?: number;
  /**
   * 组件的类型
   */
  type?: 'number' | 'date';
  /**
   * 缩放大小
   */
  scale?: number;
  /**
   * 根类名
   */
  rootClassName?: string;
  /**
   * 根类名
   */
  rootStyle?: CSSProperties;
  /**
   * 内容类名
   */
  className?: string;
  /**
   * 内容样式
   */
  style?: CSSProperties;
  /**
   * 每一项数值类型滚动的样式
   */
  itemNumStyle?: CSSProperties;
  /**
   * 每一项不是数值类型滚动的样式 比如value中包函 '.' ':' '-' '/'
   */
  itemCharStyle?: CSSProperties;

  /**
   * 滚动动画结束的回调
   */
  onFinish?: (value: number | string) => void;
}
