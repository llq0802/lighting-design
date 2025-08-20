import type { CollapseProps } from 'antd';
import type { CSSProperties, ReactNode } from 'react';

/**
 * 折叠卡片组件属性接口
 * 扩展自 antd 的 CollapseProps，但排除了 items、activeKey、defaultActiveKey、onChange 和 accordion 属性
 */
export type LCollapseCardProps = {
  /**
   * 初始化是否展开
   * @default false
   */
  defaultCollapsed?: boolean;

  /**
   * 受控是否展开
   * - 如果设置该属性，组件将变为受控组件
   */
  collapsed?: boolean;

  /**
   * 受控展开时的回调
   * @param bool 当前折叠状态，true 表示折叠，false 表示展开
   */
  onCollapsed?: (bool: boolean) => void;

  /**
   * 初始是否渲染折叠的 DOM 结构
   * - 设置为 true 时，即使内容被折叠也会渲染 DOM
   * @default false
   */
  forceRender?: boolean;

  /**
   * 标题
   * - 折叠面板的标题内容
   */
  title?: ReactNode;

  /**
   * 右上角额外内容
   * - 显示在标题栏右上角的额外内容
   */
  extra?: ReactNode;

  /**
   * 内容类名
   * - 应用于折叠内容区域的 CSS 类名
   */
  contentClassName?: string;

  /**
   * 内容样式
   * - 应用于折叠内容区域的内联样式
   */
  contentStyle?: CSSProperties;

  /**
   * antd折叠卡片的items每一项的属性
   * - 用于配置折叠面板项的额外属性
   * - 不包括 children 和 key 属性，因为它们由组件内部处理
   */
  contentProps?: Omit<NonNullable<CollapseProps['items']>[number], 'children' | 'key'>;

  /** 子元素 */
  children: ReactNode;
} & Omit<CollapseProps, 'items' | 'activeKey' | 'defaultActiveKey' | 'onChange' | 'accordion'>;
