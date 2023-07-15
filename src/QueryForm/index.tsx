import { DownOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import type { ColProps } from 'antd';
import { Col, Row, Space } from 'antd';
import classnames from 'classnames';
import type { BaseFormProps } from 'lighting-design/Form/base/BaseForm';
import BaseForm from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem';
import type { FC } from 'react';
import { cloneElement, memo, useState } from 'react';

const prefixCls = 'lightd-form-query';

interface CollapseProps {
  collapsed: boolean;
  onToggle?: (collapsed: boolean) => void;
}

const Collapse: FC<CollapseProps> = memo(({ collapsed, onToggle }) => {
  const handleCollapse = useMemoizedFn(() => {
    onToggle?.(!collapsed);
  });

  return (
    <a
      onClick={handleCollapse}
      className={`${prefixCls}-collapse`}
      style={{ whiteSpace: 'nowrap' }}
    >
      {collapsed ? '展开' : '收起'}
      <DownOutlined
        style={{
          marginLeft: 5,
          transition: '0.3s all',
          transform: `rotate(${collapsed ? 0 : 180}deg)`,
        }}
      />
    </a>
  );
});

export interface LQueryFormProps extends BaseFormProps {
  /**
   *是否折叠
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LQueryFormProps
   */
  isCollapsed?: boolean;
  /**
   * 显示多少项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LQueryFormProps
   * */
  showColsNumber?: number;
  /**
   *  配置响应式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LQueryFormProps
   *@see https://ant.design/components/grid-cn#col
   */
  itemColProps?: ColProps;
  /**
   * 是否水平紧凑显示
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LQueryFormProps
   */
  isSpace?: boolean;
}

const defualtColSpan = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8,
  xl: 6,
  xxl: 6,
};

function LQueryForm(props: LQueryFormProps) {
  const {
    layout = 'horizontal',
    submitter,
    isCollapsed = true,
    showColsNumber,
    className,
    itemColProps = {},
    isSpace = false,
    ...restProps
  } = props;

  const [collapsed, setCollapsed] = useState(isCollapsed);

  return (
    <BaseForm
      layout={layout}
      submitter={
        submitter === undefined || submitter
          ? { submitText: '查询', ...submitter }
          : submitter
      }
      className={classnames(prefixCls, className)}
      contentRender={(formItemsDom, submitterDom) => {
        const enabledCollapse =
          typeof showColsNumber === 'number' &&
          showColsNumber < formItemsDom?.length;
        const colSpans = !isSpace
          ? {
              ...defualtColSpan,
              ...itemColProps,
            }
          : {};

        return (
          <Row gutter={16}>
            {formItemsDom.map((itemDom: any, index: number) => {
              const { ...restItemProps } = itemDom.props;
              const hidden =
                collapsed && enabledCollapse && index >= showColsNumber;
              return (
                <Col
                  key={itemDom?.key || itemDom.name + index.toString()}
                  {...colSpans}
                  style={hidden ? { display: 'none' } : {}}
                >
                  {cloneElement(itemDom, {
                    hidden,
                    ...restItemProps,
                  })}
                </Col>
              );
            })}

            <Col
              style={{
                display: 'flex',
                flex: '1',
                flexWrap: 'nowrap',
                alignItems: layout === 'vertical' ? 'flex-end' : 'flex-start',
                justifyContent: 'flex-end',
              }}
            >
              <LFormItem colon={false}>
                <Space>
                  {submitterDom}
                  {enabledCollapse && (
                    <Collapse collapsed={collapsed} onToggle={setCollapsed} />
                  )}
                </Space>
              </LFormItem>
            </Col>
          </Row>
        );
      }}
      {...restProps}
    />
  );
}

export default LQueryForm;
