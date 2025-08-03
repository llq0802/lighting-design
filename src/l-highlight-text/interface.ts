import type { DebounceOptions } from 'ahooks/lib/useDebounce/debounceOptions';

export interface LHighlightTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  style?: React.CSSProperties;
  /**
   *是否自动转义
   */
  autoEscape?: boolean; //
  /**
   *是否区分大小写
   */
  caseSensitive?: boolean;
  /**
   *自定义高亮类名
   */
  highlightClassName?: string;
  /**
   *自定义高亮样式
   */
  highlightStyle?: React.CSSProperties;
  /**
   *自定义高亮标签, 例如: `span` `li` 等
   @default mark
   */
  highlightTag?: string;
  /**
   *展示的文本内容
   */
  text: string;
  /**
   *要高亮的文本数组, 例如: ['lighting', 'design'] 支持动态更新
   */
  highlightWords: string[];
  /**
   *重新渲染高亮的文本内容
   */
  renderHighlight?: (text: string) => React.ReactNode;
  /**
   *防抖等待时间
   */
  wait?: number;
  /**
   *lodash 的防抖配置
   */
  debounceOptions?: DebounceOptions;
}
