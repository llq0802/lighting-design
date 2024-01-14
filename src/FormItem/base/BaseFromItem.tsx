import type { ColProps, FormItemProps } from 'antd';
import { Form } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import classnames from 'classnames';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement, useContext, useMemo } from 'react';
import { LFormContext } from '../../Form/base/BaseForm';
import { isTrueArray, usePlaceholder } from '../../_utils';
import FormItemWrapper from './FormItemWrapper';
import './styles.less';

export interface LFormItemProps extends FormItemProps {
  size?: SizeType;
  name?: string[] | string;
  /**
   *lable宽度。  同 labelCol={{ flex: '90px' }}
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  labelWidth?: number | 'auto' | string;
  /**
   * 重新渲染LFormItem的children组件
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  renderField?: (dom: ReactElement, props: LFormItemProps) => ReactElement;
  /**
   * 重新渲染整个LFormItem组件
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  renderFormItem?: (dom: ReactElement) => ReactElement;
  /**
   *当配置了contentBefore或者contentAfter时组件原本子项内容(label的右边)与contentBefore或者contentAfter与垂直的对齐方式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentAlignItems?: 'center' | 'start' | 'end';
  /**
   *  组件前面的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentBefore?: ReactNode;
  /*
   * 组件后面的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentAfter?: ReactNode;
  /**
   * 传给children的额外属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentProps?: Record<string, any>;
  /**
   *  children 外层的 div 是否为inline
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentInline?: boolean;
  /*
   * 被包裹组件的最外层容器类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentClassName?: string;
  /**
   *  是否禁用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  disabled?: boolean;
  /**
   *  组件的placeholder
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  placeholder?: string | string[];

  /**
   *当配置了 label 时组件左边的 label 与右边整体的内容区域 ( 如果配置了ontentBefore或者contentAfter则包含它们 ) 的垂直对齐方式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  wrapperAlignItems?: 'start' | 'center' | 'end';

  /**
   * 只在`LQueryForm`组件中生效，与`antd.Col`组件的配置一样，配置单独这一项占多数份
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  ownColSpans?: ColProps;

  /** 控制是否是选择类型的表单项组件 (一般内部使用) */
  _isSelectType?: boolean;
}

const prefixCls = 'ligthd-from-item';

const LFormItem: FC<LFormItemProps> & {
  useStatus: typeof Form.Item.useStatus;
} = (props) => {
  const {
    placeholder,

    renderField,
    renderFormItem,

    labelWidth = 'auto',
    contentClassName,
    contentBefore,
    contentAfter,
    contentProps,
    contentInline = false,
    contentAlignItems: alignItems = 'center',
    wrapperAlignItems = 'start',

    name,
    required,
    shouldUpdate,
    dependencies,
    rules,
    className,
    labelCol,
    children,

    _isSelectType,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ownColSpans,
    ...restFromItemProps
  } = props;

  let curName = name;
  if (typeof name === 'number') {
    curName?.toString();
  }

  const { layout, labelColProps: formLabelColProps } = useContext(LFormContext);

  const messageLabel = usePlaceholder({
    restProps: restFromItemProps,
    isSelectType: _isSelectType,
    placeholder,
  });

  const itemClassnames = useMemo(
    () =>
      classnames(
        prefixCls,
        {
          [`${prefixCls}-wrapper-label-${wrapperAlignItems}`]: restFromItemProps?.label
            ? true
            : false,
        },
        className,
      ),
    [className, wrapperAlignItems, restFromItemProps?.label],
  );

  const itemRules = useMemo(
    () =>
      Array.isArray(rules) && rules.length > 0
        ? rules
        : [
            {
              validator(_: any, value: any) {
                const val = typeof value === 'string' ? value.trim() : value;
                let errMsg = '';
                if ((!val && val !== 0) || !isTrueArray(val)) {
                  errMsg = required
                    ? `${restFromItemProps?.messageVariables?.label || messageLabel}!`
                    : '';
                }

                if (errMsg) {
                  return Promise.reject(errMsg);
                }
                return Promise.resolve();
              },
            },
          ],
    [messageLabel, required, rules],
  );

  const labelColProps = useMemo(() => {
    let labelFlex = {};
    if (layout === 'vertical' || labelWidth === 'auto') {
      labelFlex = {};
    } else if (labelWidth && typeof labelWidth === 'number') {
      labelFlex = { flex: `0 0 ${labelWidth}px` };
    } else if (labelWidth && typeof labelWidth === 'string') {
      labelFlex = { flex: `0 0 ${labelWidth}` };
    } else {
      labelFlex = {};
    }

    return {
      ...formLabelColProps,
      ...labelFlex,
      ...labelCol,
    };
  }, [layout, labelWidth, formLabelColProps, labelCol]);

  if (shouldUpdate) {
    const dom1 = (
      <Form.Item
        labelCol={labelColProps}
        name={curName}
        required={required}
        shouldUpdate={shouldUpdate}
        rules={itemRules}
        className={itemClassnames}
        {...restFromItemProps}
      >
        {(form) => {
          const contentChildren = typeof children === 'function' ? children(form) : children;
          return (
            <FormItemWrapper
              className={contentClassName}
              before={contentBefore}
              after={contentAfter}
              alignItems={alignItems}
              contentInline={contentInline}
              {...contentProps}
            >
              {renderField ? renderField(contentChildren as ReactElement, props) : contentChildren}
            </FormItemWrapper>
          );
        }}
      </Form.Item>
    );

    return renderFormItem ? renderFormItem(dom1) : dom1;
  }

  if (dependencies && dependencies?.length > 0) {
    const dom2 = (
      <Form.Item noStyle dependencies={dependencies}>
        {(form) => {
          const depFields = form.getFieldsValue(dependencies);

          const innerChildren = typeof children === 'function' ? children(form) : children;

          const contentChildren = isValidElement(innerChildren)
            ? cloneElement(innerChildren as ReactElement, { ...depFields })
            : innerChildren;

          return (
            <Form.Item
              name={curName}
              labelCol={labelColProps}
              required={required}
              rules={itemRules}
              className={itemClassnames}
              {...restFromItemProps}
            >
              <FormItemWrapper
                className={contentClassName}
                before={contentBefore}
                after={contentAfter}
                alignItems={alignItems}
                contentInline={contentInline}
                {...contentProps}
              >
                {renderField
                  ? renderField(contentChildren as ReactElement, props)
                  : contentChildren}
              </FormItemWrapper>
            </Form.Item>
          );
        }}
      </Form.Item>
    );
    return renderFormItem ? renderFormItem(dom2) : dom2;
  }

  const dom3 = (
    <Form.Item
      name={curName}
      labelCol={labelColProps}
      required={required}
      rules={itemRules}
      className={itemClassnames}
      {...restFromItemProps}
    >
      <FormItemWrapper
        className={contentClassName}
        before={contentBefore}
        after={contentAfter}
        alignItems={alignItems}
        contentInline={contentInline}
        {...contentProps}
      >
        {renderField ? renderField(children as ReactElement, props) : children}
      </FormItemWrapper>
    </Form.Item>
  );
  return renderFormItem ? renderFormItem(dom3) : dom3;
};

LFormItem.useStatus = Form.Item.useStatus;

export default LFormItem;
