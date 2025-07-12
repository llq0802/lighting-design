import type { CollapseProps } from 'antd';
import type { CSSProperties, ReactNode } from 'react';

export type LCollapseCardProps = {
  /**
   * 初始化是否展开
   */
  defaultCollapsed?: boolean;
  /**
   *  受控是否展开
   */
  collapsed?: boolean;
  /**
   * 受控展开时的回调
   */
  onCollapsed?: (bool: boolean) => void;
  /**
   *  初始否渲染折叠的 DOM 结构
   */
  forceRender?: boolean;
  /**
   *  标题
   */
  title?: ReactNode;
  /*
   * 右上角额外内容
   */
  extra?: ReactNode;
  /**
   * 内容类名
   */
  contentClassName?: string;
  /**
   * 内容样式
   */
  contentStyle?: CSSProperties;
  /**
   * antd折叠卡片的items每一项的属性
   */
  contentProps?: NonNullable<CollapseProps['items']>[number];
  children: ReactNode;
} & Omit<CollapseProps, 'items' | 'activeKey' | 'defaultActiveKey' | 'onChange' | 'accordion'>;
