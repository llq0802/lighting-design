import { useControllableValue } from 'ahooks';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import { useMemo, type CSSProperties, type FC, type ReactNode } from 'react';
import './index.less';

// const { Panel } = Collapse;

const prefixCls = 'lightd-collapse-card';

export type LCollapseCardProps = {
  /**
   * 初始化是否展开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  defaultCollapsed?: boolean;
  /**
   *  受控是否展开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  collapsed?: boolean;
  /**
   * 受控展开时的回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  onCollapsed?: (bool: boolean) => void;
  /**
   * 是否能展开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  collapsible?: boolean;
  /**
   *  强制被隐藏时是否渲染 DOM 结构
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  forceRender?: boolean;
  /**
   *  使面板透明且无边框
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  ghost?: boolean;
  /**
   * 带边框风格的面板
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  bordered?: boolean;
  /**
   *  是否禁用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  disabled?: boolean;
  /**
   *  销毁折叠隐藏的面板
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  destroyContent?: boolean;
  /**
   * 设置图标位置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  collapsePosition?: 'left' | 'right';
  /**
   *  标题
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  title?: ReactNode;
  /*
   * 右上角额外内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  extra?: ReactNode;
  /**
   *  自定义切换图标
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  expandIcon?: (props: Record<string, any>) => ReactNode;
  /**
   *  展开时的内容类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  contentClassName?: string;
  /**
   * 组件根类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  className?: string;
  /**
   *  组件根样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  style?: CSSProperties;
  /**
   * 组件大小
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  size?: CollapseProps['size'];
  /**
   *  触发折叠的位置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCollapseCardProps
   */
  triggerPosition?: 'header' | 'icon';
  /**
   * antd折叠卡片的items每一项的属性
   * @see https://github.com/react-component/collapse/blob/27250ca5415faab16db412b9bff2c131bb4f32fc/src/interface.ts#L6
   */
  itemProps: CollapseProps['items'];
  children: ReactNode;
};

const LCollapseCard: FC<LCollapseCardProps> = (props) => {
  const {
    title,
    extra,
    style,
    className,
    size,
    forceRender = false,
    ghost = false,
    destroyContent = false,
    disabled = false,
    bordered = true,
    collapsible = true,
    collapsePosition = 'right',
    expandIcon,
    defaultCollapsed,
    children,
    triggerPosition = 'icon',

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    collapsed: outCollapsed,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCollapsed: outOnCollapsed,

    itemProps = emptyObject,
  } = props;

  const [collapsed, setCollapsed] = useControllableValue(props, {
    defaultValue: defaultCollapsed ?? false,
    defaultValuePropName: 'defaultCollapsed',
    valuePropName: 'collapsed',
    trigger: 'onCollapsed',
  });

  const items: CollapseProps['items'] = [
    {
      key: prefixCls,
      label: title,
      children,
      extra,
      forceRender,
      ...itemProps,
    },
  ];

  const innerCollapsible = useMemo(() => {
    if (disabled) {
      return 'disabled';
    }
    if (triggerPosition === 'icon') {
      return 'icon';
    }
    return void 0;
  }, [disabled, triggerPosition]);

  return (
    <Collapse
      items={items}
      collapsible={innerCollapsible}
      activeKey={collapsed ? [prefixCls] : []}
      ghost={ghost}
      destroyInactivePanel={destroyContent}
      bordered={bordered}
      expandIcon={expandIcon}
      expandIconPosition={collapsePosition === 'left' ? 'start' : 'end'}
      size={size}
      onChange={(keys) => {
        if (!collapsible) return;
        if (!keys?.length) {
          setCollapsed(false);
          return;
        }
        setCollapsed(true);
      }}
      className={classnames(prefixCls, className)}
      style={style}
    />

    // return (
    //   <Collapse
    //     collapsible={triggerPosition === 'icon' ? 'icon' : void 0}
    //     activeKey={collapsed ? ['1'] : []}
    //     ghost={ghost}
    //     destroyInactivePanel={destroyContent}
    //     bordered={bordered}
    //     expandIcon={expandIcon}
    //     expandIconPosition={collapsePosition === 'left' ? 'start' : 'end'}
    //     size={restProps.size || 'middle'}
    //     onChange={(keys) => {
    //       if (!collapsible) return;
    //       if (!keys?.length) {
    //         setCollapsed(false);
    //         return;
    //       }
    //       setCollapsed(true);
    //     }}
    //     {...restProps}
    //     className={classnames(prefixCls, restProps.className)}
    //     style={restProps.style}
    //   >
    //     <Panel
    //       className={classnames(restProps.contentClassName)}
    //       key="1"
    //       header={title}
    //       extra={extra}
    //       showArrow={collapsible}
    //       forceRender={forceRender}
    //       {...(restProps as any)?.panel}
    //     >
    //       {children}
    //     </Panel>
    //   </Collapse>
  );
};

export default LCollapseCard;
