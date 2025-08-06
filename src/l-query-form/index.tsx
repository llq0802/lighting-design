import { DownOutlined } from '@ant-design/icons';
import { Col, Row, Typography, theme } from 'antd';
import LForm from 'lighting-design/l-form';
import type { FC } from 'react';
import { cloneElement, memo, useState } from 'react';
import type { LQueryFormProps } from './interface';
const { useToken } = theme;
const { Link } = Typography;

interface CollapseProps {
  collapseClassName?: string;
  collapsed: boolean;
  onToggle?: (collapsed: boolean) => void;
}

const Collapse: FC<CollapseProps> = memo(({ collapsed, onToggle, collapseClassName }) => {
  const handleCollapse = () => onToggle?.(!collapsed);
  const { token } = useToken();

  return (
    <Link
      className={collapseClassName}
      data-collapse-wrapper
      onClick={handleCollapse}
      style={{
        whiteSpace: 'nowrap',
        color: token?.colorPrimary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <span data-collapse-text>{collapsed ? '展开' : '收起'}</span>
      <DownOutlined style={{ transition: '0.3s all', transform: `rotate(${collapsed ? 0 : 180}deg)` }} />
    </Link>
  );
});

function LQueryForm<T = any>(props: LQueryFormProps<T>) {
  const {
    submitter,
    isCollapsed = true,
    isSpace = false,
    showColsNumber,
    gap = 16,
    column = 4,
    justify,
    rowProps,
    onCollapsedChange,
    items,
    submitterWrapperStyle,
    collapseClassName,
    ...restProps
  } = props;

  const [collapsed, setCollapsed] = useState(isCollapsed);
  const enabledCollapse = typeof showColsNumber === 'number' && showColsNumber < items?.length;

  const chindrenItems = items?.map((item: any, i) => {
    const isSimple = !item?.content;
    const itemDom = isSimple ? item : item?.content;
    const colProps = isSimple ? {} : item.colProps;
    const hidden = collapsed && enabledCollapse && i >= showColsNumber;
    const rowKey = itemDom?.key || itemDom?.props?.name + `${i}`;
    return {
      rowKey,
      hidden,
      content: cloneElement(itemDom, { hidden, ...itemDom?.props }),
      colProps,
    };
  });

  const submitterProps =
    typeof submitter === 'boolean'
      ? false
      : {
          submitText: '查询',
          position: 'flex-end',
          gap: 8,
          marginBottom: restProps?.formItemBottom || 24,
          ...submitter,
        };

  const collapseDom = enabledCollapse ? (
    <Collapse
      collapseClassName={collapseClassName}
      collapsed={collapsed}
      onToggle={(v) => {
        setCollapsed(v);
        onCollapsedChange?.(v);
      }}
    />
  ) : null;

  return (
    <LForm
      submitter={submitterProps}
      renderChildren={(doms) => {
        return (
          <Row gutter={gap} justify={justify} {...rowProps}>
            {doms.formItemsDom}
            <Col
              data-col-submitter
              key="submitter"
              style={{
                display: 'flex',
                alignItems: 'baseline',
                alignSelf: restProps?.layout === 'vertical' ? 'flex-end' : 'flex-start',
                gap: submitterProps ? submitterProps.gap : 8,
                marginLeft: submitterProps && submitterProps.position === 'flex-end' ? 'auto' : 'initial',
                ...submitterWrapperStyle,
              }}
            >
              <>
                {doms.submitterDom}
                {collapseDom}
              </>
            </Col>
          </Row>
        );
      }}
      {...restProps}
    >
      <>
        {chindrenItems?.map((item) => {
          const style = { display: item.hidden ? 'none' : void 0, ...item.colProps?.style };

          const itemColProps = !isSpace
            ? {
                ...(typeof column !== 'number' ? column : {}),
                ...item.colProps,
              }
            : {};
          const span = !isSpace && typeof column === 'number' ? Math.floor(24 / column) : void 0;

          return (
            <Col key={item.rowKey} span={span} {...itemColProps} style={style}>
              {item.content}
            </Col>
          );
        })}
      </>
    </LForm>
  );
}

export default LQueryForm;
export * from './interface';
