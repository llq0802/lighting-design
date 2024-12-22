import type { TooltipProps } from 'antd';
import type { CSSProperties, DOMAttributes } from 'react';

export interface LEllipsisTextProps extends DOMAttributes<HTMLSpanElement> {
  /**
   *类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEllipsisTextProps
   */
  className?: string;
  /**
   *样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEllipsisTextProps
   */
  style?: CSSProperties;
  /**
   * 最大字符串长度
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEllipsisTextProps
   */
  maxLength?: number;
  /**
   * 最大元素宽度
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEllipsisTextProps
   */
  maxWidth?: number | string;
  /**
   * 自定义空字符的节点
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEllipsisTextProps
   */
  emptyText?: React.ReactNode;
  /**
   * antd 的 tooltip
   *@see 官网 https://llq0802.github.io/lighting-design/latest LEllipsisTextProps
   */
  tooltip?: boolean | TooltipProps;
  children: string;
  outRef: any;
}
