import { DownOutlined } from '@ant-design/icons';
import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Card, CardProps } from 'antd';
import classnames from 'classnames';
import { useMemo } from 'react';
import './index.less';

const prefixCls = 'lightd-collapse-card';

export type LCollapseCardProps = {
  collapsed?: boolean;
  onCollapsed?: (bool: boolean) => void;
  collapsible?: boolean;
  collapsePosition?: 'extra' | 'title';
  title?: CardProps['title'];
  extra?: CardProps['extra'];
} & Omit<CardProps, 'title' | 'extra'>;

export default function LCollapseCard(props: LCollapseCardProps) {
  const {
    title,
    extra,
    collapsible = true,
    collapsePosition = 'extra',
    children,
    ...restProps
  } = props;

  const [collapsed, setCollapsed] = useControllableValue(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultCollapsed',
    valuePropName: 'collapsed',
    trigger: 'onCollapsed',
  });

  const toggleCollapsed = useMemoizedFn(() => {
    setCollapsed(!collapsed);
  });

  const iconDom = useMemo(() => {
    return collapsible ? (
      <DownOutlined
        className={classnames(prefixCls + '-collapsePosition-icon')}
        style={{ transform: `rotate(${collapsed ? 0 : 180}deg)` }}
        onClick={toggleCollapsed}
      />
    ) : null;
  }, [collapsible, collapsed]);

  return (
    <Card
      {...restProps}
      className={classnames(
        prefixCls,
        !collapsed && `${prefixCls}-collapsed`,
        restProps.className,
      )}
      title={
        title ? (
          <>
            {collapsePosition === 'title' ? iconDom : null}
            {title}
          </>
        ) : null
      }
      extra={
        title ? (
          <>
            {extra}
            {collapsePosition === 'extra' ? iconDom : null}
          </>
        ) : null
      }
    >
      {children}
    </Card>
  );
}
