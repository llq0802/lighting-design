import type { CollapseProps } from 'antd';
import type { CSSProperties, ReactNode } from 'react';

export type LCollapseCardProps = {
  /**
   * 初始化是否展开
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  defaultCollapsed?: boolean;
  /**
   *  受控是否展开
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  collapsed?: boolean;
  /**
   * 受控展开时的回调
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  onCollapsed?: (bool: boolean) => void;
  /**
   * 是否能展开
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  collapsible?: boolean;
  /**
   *  强制被隐藏时是否渲染 DOM 结构
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  forceRender?: boolean;
  /**
   *  使面板透明且无边框
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  ghost?: boolean;
  /**
   * 带边框风格的面板
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  bordered?: boolean;
  /**
   *  是否禁用
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  disabled?: boolean;
  /**
   *  销毁折叠隐藏的面板
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  destroyContent?: boolean;
  /**
   * 设置图标位置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  collapsePosition?: CollapseProps['expandIconPosition'];
  /**
   *  标题
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  title?: ReactNode;
  /*
   * 右上角额外内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  extra?: ReactNode;
  /**
   *  自定义切换图标
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  expandIcon?: (props: Record<string, any>) => ReactNode;
  /**
   *  展开时的内容类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  contentClassName?: string;
  /**
   * 组件根类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  className?: string;
  /**
   *  组件根样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  style?: CSSProperties;
  /**
   * 组件大小
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  size?: CollapseProps['size'];
  /**
   *  触发折叠的位置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  triggerPosition?: 'header' | 'icon';
  /**
   * antd折叠卡片的items每一项的属性
   * @see https://github.com/react-component/collapse/blob/27250ca5415faab16db412b9bff2c131bb4f32fc/src/interface.ts#L6
   */
  itemProps?: CollapseProps['items'];
  children: ReactNode;
};
