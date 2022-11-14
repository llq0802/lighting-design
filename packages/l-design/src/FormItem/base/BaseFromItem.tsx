import type { FormItemProps } from 'antd';
import { Form } from 'antd';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, useMemo } from 'react';
import { getFormItemLabel } from '../../utils';
import FormItemWrapper from './FormItemWrapper';

type TransformFn<T = any> = (value: T) => T;

type ContentProps = Record<string, any>;

export interface LFormItemProps extends FormItemProps {
  transformFn?: TransformFn;
  renderField?: (dom: ReactElement) => ReactElement;
  alignItems?: 'center' | 'start' | 'end';
  contentBefore?: ReactNode;
  contentAfter?: ReactNode;
  contentProps?: ContentProps;
  className?: string;
  isSelectType?: boolean;
}

const LFormItem: FC<LFormItemProps> = ({
  transformFn,
  renderField,
  className,
  isSelectType,
  contentBefore,
  contentAfter,
  alignItems,
  contentProps,

  name,
  required,
  shouldUpdate,
  dependencies = [],
  rules = [],
  trigger = 'onChange',
  children,
  ...restFromItemProps
}) => {
  // console.log('LFormItem ', restFromItemProps);
  const messageLabel = useMemo(() => getFormItemLabel(restFromItemProps), [restFromItemProps]);
  const itemRules = useMemo(
    () =>
      rules.length > 0
        ? rules
        : [
            {
              validator(_: any, value: any) {
                let errMsg = '';
                if (!value) {
                  errMsg = required ? `请${isSelectType ? '选择' : '输入'}${messageLabel}!` : '';
                }
                if (errMsg) {
                  return Promise.reject(errMsg);
                }
                return Promise.resolve();
              },
            },
          ],
    [messageLabel, required, rules, isSelectType],
  );

  if (shouldUpdate) {
    return (
      <Form.Item
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
              className={className}
              before={contentBefore}
              after={contentAfter}
              trigger={trigger}
              alignItems={alignItems}
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
          const contentChildren = cloneElement(innerChildren as ReactElement, {
            ...depFields,
          });
          return (
            <Form.Item
              name={name}
              required={required}
              trigger={trigger}
              rules={itemRules}
              {...restFromItemProps}
            >
              <FormItemWrapper
                className={className}
                before={contentBefore}
                after={contentAfter}
                trigger={trigger}
                alignItems={alignItems}
                {...contentProps}
              >
                {renderField ? renderField(contentChildren) : contentChildren}
              </FormItemWrapper>
            </Form.Item>
          );
        }}
      </Form.Item>
    );
  }

  return (
    <Form.Item
      name={name}
      required={required}
      trigger={trigger}
      rules={itemRules}
      {...restFromItemProps}
    >
      <FormItemWrapper
        className={className}
        before={contentBefore}
        after={contentAfter}
        trigger={trigger}
        alignItems={alignItems}
        {...contentProps}
      >
        {renderField ? renderField(children as ReactElement) : children}
      </FormItemWrapper>
    </Form.Item>
  );
};

export default LFormItem;
