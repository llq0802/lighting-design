import type { FormItemProps } from 'antd';
import { Form } from 'antd';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';
import FormItemWrapper from './FormItemWrapper';

type TransformFn<T = any> = (value: T, currentPathValues?: any) => T | any;

type ContentProps = Record<string, any>;

export interface LFormItemProps extends FormItemProps {
  transform?: TransformFn;
  renderField?: (dom: ReactElement) => ReactElement;
  alignItems?: 'center' | 'start' | 'end';
  contentBefore?: ReactNode;
  contentAfter?: ReactNode;
  contentProps?: ContentProps;
  className?: string;
}

const LFormItem: FC<LFormItemProps> = ({
  transform,
  renderField,
  className,
  contentBefore,
  contentAfter,
  alignItems,
  contentProps,

  name,
  label,
  children,
  shouldUpdate,
  dependencies,
  trigger = 'onChange',
  ...restFromItemProps
}) => {
  console.log('LFormItem ', restFromItemProps);

  if (shouldUpdate) {
    return (
      <Form.Item
        name={name}
        label={label}
        shouldUpdate={shouldUpdate}
        trigger={trigger}
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
        {(formInstance) => {
          const depFields = formInstance.getFieldsValue(dependencies);
          const innerChildren = typeof children === 'function' ? children(formInstance) : children;
          const contentChildren = cloneElement(innerChildren as ReactElement, {
            ...depFields,
          });
          return (
            <Form.Item name={name} label={label} trigger={trigger} {...restFromItemProps}>
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
    <Form.Item name={name} label={label} trigger={trigger} {...restFromItemProps}>
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
