import { Col, Flex, Form, Row, Spin } from 'antd';
import LFormItem from 'lighting-design/l-form-item';
import { useMemo } from 'react';
import type { LDescriptionsProps } from './interface';
import { useStyles } from './styles';

const LDescriptions: <T = Record<string, any>>(props: LDescriptionsProps<T>) => JSX.Element = ({
  renderTitle,
  itemBottom = 16,
  className,
  headerClassName,
  style,
  headerStyle,
  title,
  extra,
  columns,
  record = {},
  column = 3,
  layout = 'horizontal',
  titleAlign = 'right',
  titleWidth,
  titleWrap,
  loading = false,
  isLastBlock = true,
  //
  gap = 16,
  justify,
  rowProps,
  colProps,
  colon,
}) => {
  const { cx, styles } = useStyles();

  const spinProps = useMemo(() => {
    if (typeof loading === 'boolean') return { spinning: loading };
    return loading;
  }, [loading]);

  const isHorizontal = layout === 'horizontal';
  const dom = (
    <Form
      className={className}
      style={style}
      requiredMark={renderTitle}
      layout={layout}
      component="div"
      labelWrap={titleWrap}
    >
      {(!!title || !!extra) && (
        <Flex align="center" justify="space-between" className={cx(styles.header, headerClassName)} style={headerStyle}>
          <div data-role="title">{title}</div>
          <div data-role="extra">{extra}</div>
        </Flex>
      )}
      <Row gutter={gap} justify={justify} {...rowProps}>
        {columns?.map(
          (
            {
              title,
              dataIndex,
              tooltip,
              required,
              emptyNode,
              alignItems,
              titleWidth: itemTitleWidth,
              colProps: itemColProps,
              formItemProps,
              render,
            },
            i,
          ) => {
            const curVal = record[dataIndex] as any;
            const isLastItem = i === columns.length - 1;
            const getSpanNum = () => {
              if (typeof column !== 'number') return column;
              return { span: Math.floor(24 / column) };
            };

            return (
              <Col
                key={dataIndex || i}
                flex={isLastItem && isLastBlock ? 1 : void 0}
                {...colProps}
                {...getSpanNum()}
                {...itemColProps}
                style={{
                  maxWidth: isLastBlock ? 'none' : void 0,
                  ...colProps?.style,
                  ...itemColProps?.style,
                }}
              >
                <LFormItem
                  required={required}
                  tooltip={tooltip}
                  labelWidth={isHorizontal ? itemTitleWidth || titleWidth : void 0}
                  labelAlign={titleAlign}
                  alignItems={alignItems}
                  label={title}
                  colon={colon}
                  formItemBottom={itemBottom}
                  {...formItemProps}
                >
                  {render ? render?.(curVal, record, i) : curVal ?? emptyNode}
                </LFormItem>
              </Col>
            );
          },
        )}
      </Row>
    </Form>
  );
  return spinProps?.spinning ? <Spin {...spinProps}>{dom}</Spin> : dom;
};
export default LDescriptions;
export * from './interface';
