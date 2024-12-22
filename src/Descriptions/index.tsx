import { Col, Form, Row, Spin } from 'antd';
import classnames from 'classnames';
import LFormItem from 'lighting-design/FormItem';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useMemo } from 'react';
import './index.less';
import type { LDescriptionsProps } from './interface';

const prefixCls = 'lightd-descriptions';

const LDescriptions: FC<LDescriptionsProps> = ({
  wrapperCol,
  labelCol,
  renderTitle,
  marginBottom = 16,
  className,
  style,
  title,
  extra,
  columns = emptyArray,
  record = emptyObject,
  headerStyle = emptyObject,
  column: outColumn = 3,
  layout = 'horizontal',
  titleAlign = 'right',
  titleWidth,
  titleWrap,
  gutter = 16,
  loading = false,
  isLastBlock = true,
  colon = 'rgba(0, 0, 0, 0.88)',
}) => {
  const spinProps = useMemo(() => {
    if (typeof loading === 'boolean') return { spinning: loading };
    return loading;
  }, [loading]);

  const { column, colSpan } = useMemo(() => {
    if (typeof outColumn === 'number') {
      return {
        column: outColumn,
        colSpan: {},
      };
    }
    return {
      column: void 0,
      colSpan: outColumn,
    };
  }, [outColumn]);
  const isInline = layout === 'inline';
  const isHorizontal = layout === 'horizontal';
  return (
    <Spin {...spinProps}>
      <Form
        requiredMark={renderTitle}
        className={classnames(`${prefixCls}`, className)}
        layout={layout}
        component="div"
        labelWrap={titleWrap}
        style={{
          // @ts-ignore
          [`--${prefixCls}-colon-color`]: colon || 'rgba(0, 0, 0, 0.88)',
          ...style,
        }}
      >
        {(!!title || !!extra) && (
          <div
            className={classnames(`${prefixCls}-header`)}
            style={{
              display: 'flex',
              marginBottom: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
              ...headerStyle,
            }}
          >
            <div role="title">{title}</div>
            <div role="extra">{extra}</div>
          </div>
        )}
        <Row gutter={gutter}>
          {columns.map(
            (
              {
                render,
                dataIndex,
                title,
                style: itemStyle,
                span,
                tooltip,
                colStyle,
                required,
                emptyNode,
                titleWidth: itemTitleWidth,
                col: itemCol = {},
              },
              i,
            ) => {
              const curVal = record[dataIndex];
              const isLastItem = i === columns.length - 1;
              const getSpanNum = () => {
                if (typeof column !== 'number' || isInline) {
                  return {};
                }
                if (isLastItem) {
                  return {
                    span: isLastBlock ? void 0 : span || Math.floor(24 / (column || 3)),
                  };
                }
                return {
                  span: span || Math.floor(24 / (column || 3)),
                };
              };

              return (
                <Col
                  key={dataIndex || i}
                  {...getSpanNum()}
                  {...colSpan}
                  {...itemCol}
                  style={{
                    maxWidth: isLastItem && isLastBlock ? '100%' : void 0,
                    ...colStyle,
                  }}
                  flex={isLastItem && isLastBlock ? 1 : void 0}
                >
                  <LFormItem
                    required={required}
                    tooltip={tooltip}
                    labelWidth={isHorizontal ? itemTitleWidth || titleWidth : void 0}
                    labelAlign={titleAlign}
                    label={title}
                    colon={!!colon}
                    formItemBottom={marginBottom}
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    style={itemStyle}
                  >
                    {render ? render?.(curVal, record, i) : curVal ?? emptyNode}
                  </LFormItem>
                </Col>
              );
            },
          )}
        </Row>
      </Form>
    </Spin>
  );
};
export default LDescriptions;
export * from './interface';
