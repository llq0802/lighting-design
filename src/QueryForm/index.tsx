import { DownOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Col, Row, Space, Typography, theme } from 'antd';
import classnames from 'classnames';
import BaseForm from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem';
import { emptyObject } from 'lighting-design/constants';
import type { CSSProperties, FC } from 'react';
import { cloneElement, memo, useState } from 'react';
import type { LQueryFormProps } from './interface';

const { useToken } = theme;
const { Link } = Typography;
const prefixCls = 'lightd-form-query';

const defualtColSpan = {
  xs: 24, // 屏幕 < 576px 响应式栅格
  sm: 24, // 屏幕 ≥ 576px 响应式栅格，
  md: 12, // 屏幕 ≥ 768px 响应式栅格
  lg: 8, // 屏幕 ≥ 992px 响应式栅格
  xl: 8, // 屏幕 ≥ 1200px 响应式栅格
  xxl: 6, // 屏幕 ≥ 1600px 响应式栅格
};

const submitterColStyle: CSSProperties = {
  display: 'flex',
  flex: '1',
  flexWrap: 'wrap',
};

interface CollapseProps {
  collapsed: boolean;
  onToggle?: (collapsed: boolean) => void;
}

const Collapse: FC<CollapseProps> = memo(({ collapsed, onToggle }) => {
  const handleCollapse = useMemoizedFn(() => {
    onToggle?.(!collapsed);
  });

  const { token } = useToken();

  return (
    <Link
      onClick={handleCollapse}
      className={`${prefixCls}-collapse`}
      style={{
        whiteSpace: 'nowrap',
        color: token?.colorPrimary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {collapsed ? '展开' : '收起'}
      <DownOutlined
        style={{
          marginLeft: 5,
          transition: '0.3s all',
          transform: `rotate(${collapsed ? 0 : 180}deg)`,
        }}
      />
    </Link>
  );
});

function LQueryForm(props: LQueryFormProps) {
  const {
    layout = 'horizontal',
    submitter,
    isCollapsed = true,
    isEnterSubmit = true,
    isApproachLastItem = false,
    isSpace: outIsSpace = false,
    showColsNumber,
    className,
    formItemBottom,
    itemColProps = emptyObject,
    gutter = 16,
    onCollapsedChange,
    ...restProps
  } = props;
  const isSpace = outIsSpace || layout === 'inline';
  const [collapsed, setCollapsed] = useState(isCollapsed);

  return (
    <BaseForm
      isEnterSubmit={isEnterSubmit}
      layout={layout}
      submitter={
        submitter === void 0 || submitter
          ? {
              submitText: '查询',
              ...submitter,
              submitButtonProps: {
                ...submitter?.submitButtonProps,
                htmlType: isEnterSubmit ? 'submit' : 'button',
              },
            }
          : false
      }
      className={classnames(prefixCls, className)}
      contentRender={(formItemsDom, submitterDom) => {
        const enabledCollapse =
          typeof showColsNumber === 'number' && showColsNumber < formItemsDom?.length;
        const colSpans = !isSpace
          ? {
              ...defualtColSpan,
              ...itemColProps,
            }
          : {};

        return (
          <Row gutter={gutter}>
            <>
              {formItemsDom?.map((itemDom: any, index: number) => {
                const { ownColSpans = {}, ...restItemProps } = itemDom.props;
                const hidden = collapsed && enabledCollapse && index >= showColsNumber;
                return (
                  <Col
                    key={itemDom?.key || itemDom.name + index.toString()}
                    {...colSpans}
                    {...ownColSpans}
                    style={hidden ? { display: 'none' } : {}}
                  >
                    {cloneElement(itemDom, {
                      hidden,
                      ...restItemProps,
                    })}
                  </Col>
                );
              })}
            </>
            <>
              {submitter !== false && (
                <Col
                  style={{
                    ...submitterColStyle,
                    alignItems: layout === 'vertical' ? 'flex-end' : 'flex-start',
                    justifyContent: `flex-${isApproachLastItem ? 'start' : 'end'}`,
                  }}
                >
                  <LFormItem
                    colon={false}
                    className={classnames(`${prefixCls}-submitter`)}
                    style={{
                      marginBottom: formItemBottom,
                      ...(submitter ? submitter?.style : {}),
                    }}
                  >
                    <Space>
                      {submitterDom}
                      {enabledCollapse && (
                        <Collapse
                          collapsed={collapsed}
                          onToggle={(v) => {
                            setCollapsed(v);
                            onCollapsedChange?.(v);
                          }}
                        />
                      )}
                    </Space>
                  </LFormItem>
                </Col>
              )}
            </>
          </Row>
        );
      }}
      {...restProps}
    />
  );
}

export default LQueryForm;
export * from './interface';
