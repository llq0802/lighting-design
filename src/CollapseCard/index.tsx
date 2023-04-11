import { DownOutlined } from '@ant-design/icons';
import { useControllableValue, useMemoizedFn } from 'ahooks';
import type { CardProps } from 'antd';
import { Card } from 'antd';
import classnames from 'classnames';
import { useMemo, useRef } from 'react';
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

  const domRef = useRef<HTMLDivElement>(null);

  const toggleCollapsed = useMemoizedFn(() => {
    const cardBodyDom = domRef.current!.querySelector('.ant-card-body');

    // console.log('   cardBodyDom.offsetHeight', cardBodyDom.offsetHeight);
    cardBodyDom.style.transtion = 'none';
    cardBodyDom.style.height = 'auto';

    const height = cardBodyDom.offsetHeight;
    cardBodyDom.style.height = 0;

    cardBodyDom.offsetHeight;
    cardBodyDom.style.transtion = '1s';
    cardBodyDom.style.height = `${height}px`;

    setCollapsed(!collapsed);
  });

  const iconDom = useMemo(() => {
    return collapsible ? (
      <DownOutlined
        className={classnames(`${prefixCls}-collapsePosition-icon`)}
        style={{ transform: `rotate(${collapsed ? 0 : 180}deg)` }}
        onClick={toggleCollapsed}
      />
    ) : null;
  }, [collapsible, collapsed]);

  return (
    <Card
      ref={domRef}
      {...restProps}
      className={classnames(
        prefixCls,
        !collapsed && `${prefixCls}-collapsed`,
        restProps.className,
      )}
      title={
        <>
          {collapsePosition === 'title' ? iconDom : null}
          {title}
        </>
      }
      extra={
        <>
          {extra}
          {collapsePosition === 'extra' ? iconDom : null}
        </>
      }
    >
      {children}
    </Card>
  );
}
