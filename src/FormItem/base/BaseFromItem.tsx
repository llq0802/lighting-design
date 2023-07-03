import type { FormItemProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement, useContext, useMemo } from 'react';
import { LFormContext } from '../../Form/base/BaseForm';
import { isTrueArray, usePlaceholder } from '../../_utils';
import FormItemWrapper from './FormItemWrapper';

export interface LFormItemProps extends FormItemProps {
  /**
   *lable宽度。  同 labelCol={{ flex: '90px' }}
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  labelWidth?: number | 'auto';
  /**
   * 重新渲染LFormItem的children组件
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  renderField?: (dom: ReactElement, props: LFormItemProps) => ReactElement;
  /**
   * 重新渲染整个LFormItem组件
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  renderFormItem?: (dom: ReactElement) => ReactElement;
  /**
   *  当配置了contentBefore或者contentAfter时组件垂直的对齐方式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  alignItems?: 'center' | 'start' | 'end';
  /**
   *  组件前面的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  contentBefore?: ReactNode;
  /*
   * 组件后面的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  contentAfter?: ReactNode;
  /**
   * 传给children的额外属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  contentProps?: Record<string, any>;
  /**
   *  children是否为inline
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  contentInline?: boolean;
  /*
   * 被包裹组件的最外层容器类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  contentClassName?: string;
  /**
   *  是否禁用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  disabled?: boolean;
  /**
   *  组件的placeholder
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemProps
   */
  placeholder?: string | string[];

  /** 是否是选择类型的组件(内部使用) */
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
    alignItems,

    name,
    required,
    shouldUpdate,
    dependencies,
    rules = [],
    className,
    labelCol,
    children,

    _isSelectType,

    ...restFromItemProps
  } = props;

  const { layout, labelColProps: formLabelColProps } = useContext(LFormContext);

  const messageLabel = usePlaceholder({
    restProps: restFromItemProps,
    isSelectType: _isSelectType,
    placeholder,
  });

  const itemClassnames = useMemo(() => classnames(prefixCls, className), []);

  const itemRules = useMemo(
    () =>
      rules?.length > 0
        ? rules
        : [
            {
              validator(_: any, value: any) {
                let errMsg = '';
                if ((!value && value !== 0) || !isTrueArray(value)) {
                  errMsg = required ? `${messageLabel}!` : '';
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
    const labelFlex =
      layout !== 'vertical' && labelWidth && labelWidth !== 'auto'
        ? { flex: `0 0 ${labelWidth}px` }
        : {};
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
        name={name}
        required={required}
        shouldUpdate={shouldUpdate}
        rules={itemRules}
        className={itemClassnames}
        {...restFromItemProps}
      >
        {(form) => {
          const contentChildren =
            typeof children === 'function' ? children(form) : children;
          return (
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
          const innerChildren =
            typeof children === 'function' ? children(form) : children;
          const contentChildren = isValidElement(innerChildren)
            ? cloneElement(innerChildren as ReactElement, { ...depFields })
            : innerChildren;

          return (
            <Form.Item
              name={name}
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
      name={name}
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
