import type { SkeletonButtonProps } from 'antd/es/skeleton/Button';
import type { CSSProperties, ReactNode } from 'react';

/**
 * 骨架屏组件属性接口
 * 用于在内容加载时显示占位符
 */
export type LSkeletonProps = {
  /**
   * 项目之间的间距
   * - 可以是数字（像素值）或有效的 CSS 间距字符串
   */
  gap?: string | number;

  /**
   * 组件根元素的类名
   * - 应用于骨架屏容器的 CSS 类名
   */
  className?: string;

  /**
   * 组件根元素的样式
   * - 应用于骨架屏容器的内联样式
   */
  style?: CSSProperties;

  /**
   * 骨架屏项目数量
   * - 控制显示多少个骨架屏项目
   * @default 1
   */
  count?: number;

  /**
   * 是否显示动画效果
   * - true: 显示加载动画
   * - false: 不显示动画
   * @default false
   */
  active?: boolean;

  /**
   * 是否处于加载状态
   * - true: 显示骨架屏
   * - false: 显示子元素内容
   * @default true
   */
  loading?: boolean;

  /**
   * 项目排列方向
   * - true: 垂直排列
   * - false: 水平排列
   * @default false
   */
  vertical?: boolean;

  /**
   * 骨架屏项目的尺寸
   * - 'large': 大尺寸
   * - 'small': 小尺寸
   * - 'default': 默认尺寸
   * @default 'default'
   */
  size?: SkeletonButtonProps['size'];

  /**
   * 项目高度
   * - 可以是数字（像素值）或有效的 CSS 高度字符串
   * - 控制每个骨架屏项目的高度
   */
  itemHeight?: string | number;

  /**
   * 第一个项目的样式
   * - 应用于第一个骨架屏项目的内联样式
   */
  firstItemStyle?: React.CSSProperties;

  /**
   * 最后一个项目的样式
   * - 应用于最后一个骨架屏项目的内联样式
   */
  lastItemStyle?: React.CSSProperties;

  /**
   * 所有项目的通用样式
   * - 应用于所有骨架屏项目的内联样式
   */
  itemStyle?: React.CSSProperties;

  /**
   * 骨架屏项目的形状
   * - 'circle': 圆形
   * - 'round': 圆角矩形
   * - 'square': 正方形
   * - 'default': 默认矩形
   * @default 'round'
   */
  shape?: SkeletonButtonProps['shape'];

  /** 子元素 */
  children?: ReactNode;
};
