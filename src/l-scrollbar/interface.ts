import type { HTMLAttributes } from 'react';

export type LScrollBarProps = {
  /**
   * 将组件根标签渲染为对应的 html 标签
   *@see 官网 https://llq0802.github.io/lighting-design/latest LScrollBarProps
   */
  tag?:
    | 'div'
    | 'ul'
    | 'li'
    | 'ol'
    | 'a'
    | 'span'
    | 'dl'
    | 'dt'
    | 'p'
    | 'main'
    | 'article'
    | 'aside'
    | 'footer'
    | 'header'
    | 'nav';
  /**
   * 滚动条的模式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LScrollBarProps
   */
  mode?: 'show' | 'hide' | 'hover';
  /**
   *  容器高度 默认100%
   *@see 官网 https://llq0802.github.io/lighting-design/latest LScrollBarProps
   */
  height?: string | number;
  /**
   * 容器最大高度
   *@see 官网 https://llq0802.github.io/lighting-design/latest LScrollBarProps
   */
  maxHeight?: string | number;
  /**
   *  容器样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LScrollBarProps
   */
  style?: React.CSSProperties;
  /**
   * 容器类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LScrollBarProps
   */
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>;
