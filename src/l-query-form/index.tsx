import { DownOutlined } from '@ant-design/icons';
import { Col, Row, Typography, theme } from 'antd';
import LForm from 'lighting-design/l-form';
import type { FC } from 'react';
import { cloneElement, memo, useState } from 'react';
import type { LQueryFormProps } from './interface';
const { useToken } = theme;

const { Link } = Typography;

const defualtColSpan = {
  xs: 24, // 屏幕 < 576px 响应式栅格
  sm: 24, // 屏幕 ≥ 576px 响应式栅格，
  md: 12, // 屏幕 ≥ 768px 响应式栅格
  lg: 12, // 屏幕 ≥ 992px 响应式栅格
  xl: 8, // 屏幕 ≥ 1200px 响应式栅格
  xxl: 6, // 屏幕 ≥ 1600px 响应式栅格
};

interface CollapseProps {
  collapsed: boolean;
  onToggle?: (collapsed: boolean) => void;
}

const Collapse: FC<CollapseProps> = memo(({ collapsed, onToggle }) => {
  const handleCollapse = () => onToggle?.(!collapsed);
  const { token } = useToken();

  return (
    <Link
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
    justify,
    rowProps,
    onCollapsedChange,
    items,
    renderLFrom,
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
        {chindrenItems.map((item) => {
          const style = { display: item.hidden ? 'none' : void 0, ...item.colProps?.style };
          return (
            <Col key={item.rowKey} {...(!isSpace ? defualtColSpan : {})} {...item.colProps} style={style}>
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
