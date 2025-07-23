import { DownOutlined } from '@ant-design/icons';
import { Col, Flex, Row, Typography, theme } from 'antd';
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
  const handleCollapse = () => {
    onToggle?.(!collapsed);
  };

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
        marginLeft: 4,
      }}
    >
      {collapsed ? '展开' : '收起'}
      <DownOutlined
        style={{
          marginLeft: 4,
          transition: '0.3s all',
          transform: `rotate(${collapsed ? 0 : 180}deg)`,
        }}
      />
    </Link>
  );
});

function LQueryForm<T = any>(props: LQueryFormProps<T>) {
  const {
    submitter,
    isCollapsed = true,
    isSpace = false,
    showColsNumber,
    gutter = 16,
    onCollapsedChange,
    items,
    rowProps,
    ...restProps
  } = props;

  const [collapsed, setCollapsed] = useState(isCollapsed);
  const enabledCollapse = typeof showColsNumber === 'number' && showColsNumber < items?.length;

  const chindrenItems = items?.map((item: any, i) => {
    const isSimple = !item?.content;
    const itemDom = isSimple ? item : item?.content;
    const itemColProps = isSimple ? {} : item.colProps;
    const rowKey = itemDom?.key || itemDom?.props?.name + `${i}`;
    const hidden = collapsed && enabledCollapse && i >= showColsNumber;

    const style = {
      display: hidden ? 'none' : void 0,
      ...itemColProps?.style,
    };

    return (
      <Col key={rowKey} {...defualtColSpan} {...itemColProps} style={style}>
        {cloneElement(itemDom, { hidden, ...itemDom?.props })}
      </Col>
    );
  });

  const submitterProps =
    typeof submitter === 'boolean'
      ? false
      : {
          submitText: '查询',
          // position: 'flex-end',
          gap: 8,
          ...submitter,
          renderSubmitter(btnDoms, props) {
            return (
              <Flex align="baseline" justify={submitter?.position || 'flex-end'} gap={props?.gap}>
                {submitter?.renderSubmitter ? (
                  submitter?.renderSubmitter(btnDoms, props)
                ) : (
                  <Flex align="center" gap={props?.gap}>
                    {btnDoms}
                  </Flex>
                )}
                {enabledCollapse && (
                  <Collapse
                    collapsed={collapsed}
                    onToggle={(v) => {
                      setCollapsed(v);
                      onCollapsedChange?.(v);
                    }}
                  />
                )}
              </Flex>
            );
          },
        };

  return (
    <LForm
      submitter={submitterProps}
      renderChildren={(doms) => {
        return (
          <Row gutter={gutter} {...rowProps}>
            {doms.formItemsDom}
            <Col
              key="submitter"
              flex={1}
              style={{
                display: 'flex',
                alignItems: restProps?.layout === 'vertical' ? 'flex-end' : 'flex-start',
              }}
            >
              {doms.submitterDom}
            </Col>
          </Row>
        );
      }}
      {...restProps}
    >
      {chindrenItems}
    </LForm>
  );
}

export default LQueryForm;
export * from './interface';
