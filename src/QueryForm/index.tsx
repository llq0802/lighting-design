import { DownOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import type { ColProps } from 'antd';
import { Col, Row, Space, theme, Typography } from 'antd';
import type { Gutter } from 'antd/es/grid/row';
import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import type { BaseFormProps } from 'lighting-design/Form/base/BaseForm';
import BaseForm from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem';
import type { CSSProperties, FC } from 'react';
import { cloneElement, memo, useState } from 'react';

const { useToken } = theme;
const { Link } = Typography;
const prefixCls = 'lightd-form-query';

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
      style={{ whiteSpace: 'nowrap', color: token?.colorPrimary }}
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

export interface LQueryFormProps extends BaseFormProps {
  /**
   *是否折叠
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  isCollapsed?: boolean;
  /**
   * 显示多少项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   * */
  showColsNumber?: number;
  /**
   *  配置响应式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   *@see https://ant.design/components/grid-cn#col
   */
  itemColProps?: ColProps;
  /**
   * 是否水平紧凑显示
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  isSpace?: boolean;
  /**
   * 重置 查询按钮组 是否紧挨着最后的表单项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  isApproachLastItem?: boolean;
  /**
   * 配置每一项的间隔
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  gutter?: Gutter | [Gutter, Gutter];
}

const defualtColSpan = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8,
  xl: 6,
  xxl: 6,
};

const submitterColStyle: CSSProperties = {
  display: 'flex',
  flex: '1',
  flexWrap: 'nowrap',
};

function LQueryForm(props: LQueryFormProps) {
  const {
    layout = 'horizontal',
    submitter,
    isCollapsed = true,
    showColsNumber,
    className,
    itemColProps = emptyObject,
    isSpace = false,
    gutter = 16,
    isApproachLastItem = false,

    ...restProps
  } = props;

  const [collapsed, setCollapsed] = useState(isCollapsed);

  return (
    <BaseForm
      layout={layout}
      submitter={
        submitter === undefined || submitter
          ? {
              submitText: '查询',
              ...submitter,
            }
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
          <Row gutter={gutter}>
            {formItemsDom?.map((itemDom: any, index: number) => {
              const { ownColSpans = {}, ...restItemProps } = itemDom.props;
              const hidden =
                collapsed && enabledCollapse && index >= showColsNumber;
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
              >
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
