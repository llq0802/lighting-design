import type { FormItemProps } from 'antd';
import { Form } from 'antd';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement, useMemo } from 'react';
import { usePlaceholder } from '../../utils';
import FormItemWrapper from './FormItemWrapper';

type ContentProps = Record<string, any>;

export interface LFormItemProps extends FormItemProps {
  renderField?: (dom: ReactElement) => ReactElement;
  alignItems?: 'center' | 'start' | 'end';
  contentBefore?: ReactNode;
  contentAfter?: ReactNode;
  contentProps?: ContentProps;
  className?: string;
  isSelectType?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const LFormItem: FC<LFormItemProps> = ({
  isSelectType,
  placeholder,

  renderField,
  className,

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
          const contentChildren = isValidElement(innerChildren)
            ? cloneElement(innerChildren as ReactElement, { ...depFields })
            : innerChildren;

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
