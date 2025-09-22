import { useControllableValue } from 'ahooks';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { emptyArray } from 'lighting-design/constants';
import { type FC } from 'react';
import type { LCollapseCardProps } from './interface';

const prefixCls = 'lightd-collapse-card';

const LCollapseCard: FC<LCollapseCardProps> = (props) => {
  const {
    title,
    extra,
    contentClassName,
    contentStyle,
    forceRender,
    children,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultCollapsed,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    collapsed: outCollapsed,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCollapsed: outOnCollapsed,
    contentProps,
    ...restProps
  } = props;

  const [collapsed, setCollapsed] = useControllableValue(props, {
    defaultValuePropName: 'defaultCollapsed',
    valuePropName: 'collapsed',
    trigger: 'onCollapsed',
  });

  const items: CollapseProps['items'] = [
    {
      label: title,
      extra,
      forceRender,
      className: contentClassName,
      style: contentStyle,
      ...contentProps,
      key: prefixCls,
      children,
    },
  ];
  const activeKey = collapsed ? [prefixCls] : emptyArray;
  return (
    <Collapse
      {...restProps}
      activeKey={activeKey}
      items={items}
      onChange={(keys) => {
        if (!keys?.length) {
          setCollapsed(false);
          return;
        }
        setCollapsed(true);
      }}
    />
  );
};

export default LCollapseCard;
export * from './interface';
