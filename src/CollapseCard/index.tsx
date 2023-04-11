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

  const refDom = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useControllableValue(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultCollapsed',
    valuePropName: 'collapsed',
    trigger: 'onCollapsed',
  });

  const toggleCollapsed = useMemoizedFn(() => {
    const cardBody = refDom.current?.querySelector(
      '.ant-card-body',
    ) as HTMLDivElement;
    if (!collapsed) {
      cardBody.style.transition = 'none';
      cardBody.style.paddingTop = '24px';
      cardBody.style.paddingBottom = '24px';
      cardBody.style.height = 'auto';
      const _height = cardBody.offsetHeight;

      cardBody.style.height = '0px';
      cardBody.style.paddingTop = '0px';
      cardBody.style.paddingBottom = '0px';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      cardBody.offsetHeight;

      cardBody.style.transition = '0.3s';
      cardBody.style.height = `${_height}px`;
      cardBody.style.paddingTop = '24px';
      cardBody.style.paddingBottom = '24px';
    } else {
      cardBody.style.height = '0px';
      cardBody.style.paddingTop = '0px';
      cardBody.style.paddingBottom = '0px';
    }

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
      ref={refDom}
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
