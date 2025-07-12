import { useControllableValue } from 'ahooks';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import classnames from 'classnames';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useMemo, type FC } from 'react';
import type { LCollapseCardProps } from './interface';

const prefixCls = 'lightd-collapse-card';

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
      label: title,
      children,
      extra,
      forceRender,
      ...itemProps,
      key: prefixCls,
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
      activeKey={collapsed ? [prefixCls] : emptyArray}
      ghost={ghost}
      destroyInactivePanel={destroyContent}
      bordered={bordered}
      expandIcon={expandIcon}
      expandIconPosition={collapsePosition}
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
  );
};

export default LCollapseCard;
export * from './interface';
