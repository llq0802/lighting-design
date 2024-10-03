import type { DebounceOptions } from 'ahooks/lib/useDebounce/debounceOptions';

export interface LHighlightTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  style?: React.CSSProperties;
  /**
   *是否自动转义
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  autoEscape?: boolean; //
  /**
   *是否区分大小写
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  caseSensitive?: boolean;
  /**
   *自定义高亮类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  highlightClassName?: string;
  /**
   *自定义高亮样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  highlightStyle?: React.CSSProperties;
  /**
   *自定义高亮标签, 例如: `span` `li` 等
   @default mark
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  highlightTag?: string;
  /**
   *展示的文本内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  text: string;
  /**
   *要高亮的文本数组, 例如: ['lighting', 'design'] 支持动态更新
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  highlightWords: string[];
  /**
   *重新渲染高亮的文本内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  renderHighlight?: (text: string) => React.ReactNode;
  /**
   *防抖等待时间
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  wait?: number;
  /**
   *lodash 的防抖配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LHighlightTextProps
   */
  debounceOptions?: DebounceOptions;
}
