import type { DebounceOptions } from 'ahooks/lib/useDebounce/debounceOptions';

/**
 * 高亮文本组件属性接口
 * 扩展自 React.HTMLAttributes<HTMLSpanElement>，可用于高亮显示文本中的特定内容
 */
export interface LHighlightTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * 组件根元素的类名
   * - 应用于组件容器的 CSS 类名
   */
  className?: string;

  /**
   * 组件根元素的样式
   * - 应用于组件容器的内联样式
   */
  style?: React.CSSProperties;

  /**
   * 是否自动转义
   * - true: 自动转义特殊字符
   * - false: 不自动转义
   * @default true
   */
  autoEscape?: boolean;

  /**
   * 是否区分大小写
   * - true: 区分大小写进行匹配
   * - false: 不区分大小写进行匹配
   * @default false
   */
  caseSensitive?: boolean;

  /**
   * 自定义高亮类名
   * - 应用于高亮元素的 CSS 类名
   */
  highlightClassName?: string;

  /**
   * 自定义高亮样式
   * - 应用于高亮元素的内联样式
   */
  highlightStyle?: React.CSSProperties;

  /**
   * 自定义高亮标签, 例如: `span` `li` 等
   * @default 'mark'
   */
  highlightTag?: string;

  /**
   * 展示的文本内容
   * - 需要进行高亮处理的完整文本
   */
  text: string;

  /**
   * 展示的文本内容
   * - 同 text 属性，作为 children 传入
   */
  children: string;

  /**
   * 要高亮的文本数组, 例如: ['lighting', 'design'] 支持动态更新
   * - 包含需要高亮显示的关键词数组
   */
  highlightWords: string[];

  /**
   * 重新渲染高亮的文本内容
   * @param text 需要高亮的文本
   * @returns 自定义渲染的 React 节点
   */
  renderHighlight?: (text: string) => React.ReactNode;

  /**
   * 防抖等待时间
   * - 用于防抖处理的等待时间（毫秒）
   * @default 0
   */
  wait?: number;

  /**
   * lodash-es 的防抖配置
   * - 传递给防抖函数的配置选项
   */
  debounceOptions?: DebounceOptions;
}
