import type { ColProps, FormItemProps, RowProps, SpinProps } from 'antd';
import { Col, Form, Row, Spin } from 'antd';
import type { FormProps } from 'antd/lib';
import classnames from 'classnames';
import LFormItem from 'lighting-design/FormItem';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';
import './index.less';

const prefixCls = 'lightd-descriptions';

export type LDescriptionItem = {
  /** 当前项的标题 */
  title?: ReactNode;
  /** 当前项的key */
  dataIndex: string;
  span?: number;
  style?: React.CSSProperties;
  titleWidth?: number | string;
  col?: ColProps;
  colStyle?: React.CSSProperties;
  tooltip?: FormItemProps['tooltip'];
  required?: boolean;
  /** 空节点展示的内容 */
  emptyNode?: ReactNode;
  /** 是否禁用当前项 */
  disabled?: boolean;
  /** 重新渲染当前项 */
  render?: (curVal: ReactNode, record: Record<string, ReactNode>, index: number) => ReactNode;
};

export type LDescriptionsProps = {
  /**
   *左上角标题
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  title?: ReactNode;
  /**
   *右上角额外元素
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  extra?: ReactNode;
  /**
   *类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  className?: string;
  /**
   *样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  style?: React.CSSProperties;
  /**
   *头部样式 控制 `title`与`extra`的容器
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  headerStyle?: React.CSSProperties;
  /**
   *列字段配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  columns?: LDescriptionItem[];
  /**
   *一行展示几列 也可以设置 `ColProps`的配置来设置响应式展示几列
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  column?: number | ColProps;
  /**
   *每一项的间距
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  gutter?: RowProps['gutter'];
  /**
   *布局模式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  layout?: FormProps['layout'];
  /**
   *每一项标题对齐方式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  titleAlign?: 'left' | 'right';
  /**
   *每一项标题宽度 只在 layout 为 horizontal 生效
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  titleWidth?: number | string;
  /**
   *每一项标题过长时是否换行
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  titleWrap?: boolean;
  /**
   *每一项标题后面是否加上`：`符号
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  colon?: boolean;
  /**
   *最后一项是否占满包含块
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  isLastBlock?: boolean;
  /**
   *每一项的`marginBottom`值
   *@default 24
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  marginBottom?: number | string;
  /**
   *loading配置
   *@default 24
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  loading?: boolean | SpinProps;
  /**
   *字段数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  record?: Record<string, ReactNode>;
  /**
   *重新渲染每一项的标题
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  renderTitle?: FormProps['requiredMark'];
};

const LDescriptions: FC<LDescriptionsProps> = ({
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
                  style={colStyle}
                  flex={isLastItem && isLastBlock ? 1 : void 0}
                >
                  <LFormItem
                    required={required}
                    tooltip={tooltip}
                    labelWidth={isHorizontal ? itemTitleWidth || titleWidth : void 0}
                    labelAlign={titleAlign}
                    label={title}
                    colon={!!colon}
                    style={{ marginBottom, ...itemStyle }}
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
