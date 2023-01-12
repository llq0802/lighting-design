import type { FormItemProps } from 'antd';
import { Form } from 'antd';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement, useContext, useMemo } from 'react';
import { LFormContext } from '../../Form/base/BaseForm';
import { usePlaceholder } from '../../utils';
import FormItemWrapper from './FormItemWrapper';

type ContentProps = Record<string, any>;

export interface LFormItemProps extends FormItemProps {
  /** lable宽度 */
  labelWidth?: number | 'auto';
  /** 重新渲染FormItem组件 */
  renderField?: (dom: ReactElement) => ReactElement;
  /** 当配置了contentBefore或者contentAfter时组件垂直的对齐方式 */
  alignItems?: 'center' | 'start' | 'end';
  /** 组件前面的内容 */
  contentBefore?: ReactNode;
  /** 组件后面的内容 */
  contentAfter?: ReactNode;
  /** 传给children的额外属性 */
  contentProps?: ContentProps;
  /** children是否为inline */
  contentInline?: boolean;
  /** 被包裹组件的最外层容器类名 */
  contentClassName?: string;
  /** 是否是选择类型的组件(内部使用) */
  isSelectType?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 组件的placeholder */
  placeholder?: string | string[];
}

const LFormItem: FC<LFormItemProps> = ({
  isSelectType,
  placeholder,

  renderField,

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
  dependencies = [],
  rules = [],
  trigger = 'onChange',
  labelCol,
  children,

  ...restFromItemProps
}) => {
  const { layout, labelColProps: formLabelColProps } = useContext(LFormContext);

  const messageLabel = usePlaceholder({
    restProps: restFromItemProps,
    isSelectType,
    placeholder,
  });

  const itemRules = useMemo(
    () =>
      rules.length > 0
        ? rules
        : [
            {
              validator(_: any, value: any) {
                let errMsg = '';
                if (!value) {
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
    return (
      <Form.Item
        labelCol={labelColProps}
        name={name}
        required={required}
        shouldUpdate={shouldUpdate}
        trigger={trigger}
        rules={itemRules}
        {...restFromItemProps}
      >
        {(form) => {
          const contentChildren = typeof children === 'function' ? children(form) : children;
          return (
            <FormItemWrapper
              className={contentClassName}
              before={contentBefore}
              after={contentAfter}
              trigger={trigger}
              alignItems={alignItems}
              contentInline={contentInline}
              {...contentProps}
            >
              {renderField ? renderField(contentChildren as ReactElement) : contentChildren}
            </FormItemWrapper>
          );
        }}
      </Form.Item>
    );
  }

  if (dependencies && dependencies?.length > 0) {
    return (
      <Form.Item noStyle dependencies={dependencies}>
        {(form) => {
          const depFields = form.getFieldsValue(dependencies);
          const innerChildren = typeof children === 'function' ? children(form) : children;
          const contentChildren = isValidElement(innerChildren)
            ? cloneElement(innerChildren as ReactElement, { ...depFields })
            : innerChildren;

          return (
            <Form.Item
              labelCol={labelColProps}
              name={name}
              required={required}
              trigger={trigger}
              rules={itemRules}
              {...restFromItemProps}
            >
              <FormItemWrapper
                className={contentClassName}
                before={contentBefore}
                after={contentAfter}
                trigger={trigger}
                alignItems={alignItems}
                contentInline={contentInline}
                {...contentProps}
              >
                {renderField ? renderField(contentChildren as ReactElement) : contentChildren}
              </FormItemWrapper>
            </Form.Item>
          );
        }}
      </Form.Item>
    );
  }

  return (
    <Form.Item
      labelCol={labelColProps}
      name={name}
      required={required}
      trigger={trigger}
      rules={itemRules}
      {...restFromItemProps}
    >
      <FormItemWrapper
        className={contentClassName}
        before={contentBefore}
        after={contentAfter}
        trigger={trigger}
        alignItems={alignItems}
        contentInline={contentInline}
        {...contentProps}
      >
        {renderField ? renderField(children as ReactElement) : children}
      </FormItemWrapper>
    </Form.Item>
  );
};

export default LFormItem;
