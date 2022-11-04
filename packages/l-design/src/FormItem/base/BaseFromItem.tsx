import type { FormItemProps } from 'antd';
import { Form } from 'antd';
import * as React from 'react';
import FormItemWrapper from './FormItemWrapper';

type TransformFn<T = any> = (value: T, currentPathValues?: any) => T | any;

type ContentProps = {
  style?: React.CSSProperties;
};
export interface LFormItemProps extends FormItemProps {
  transform?: TransformFn;
  renderField?: (dom: React.ReactElement) => React.ReactElement;
  alignItems?: 'center' | 'start' | 'end';
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  contentProps?: ContentProps;
  className?: string;
}

const LFormItem: React.FC<LFormItemProps> = ({
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
  trigger = 'onChange',
  ...restFromProps
}) => {
  // console.log('LFormItem-restFromProps ', restFromProps);
  // console.log('LFormItem-contentProps ', contentProps);

  return (
    <Form.Item
      name={name}
      label={label}
      shouldUpdate={shouldUpdate}
      trigger={trigger}
      {...restFromProps}
    >
      {shouldUpdate ? (
        (...args) => {
          const innerChildren = typeof children === 'function' ? children(...args) : children;
          return (
            <FormItemWrapper
              className={className}
              before={contentBefore}
              after={contentAfter}
              trigger={trigger}
              alignItems={alignItems}
              {...contentProps}
            >
              {renderField ? renderField(innerChildren as React.ReactElement) : innerChildren}
            </FormItemWrapper>
          );
        }
      ) : (
        <FormItemWrapper
          className={className}
          before={contentBefore}
          after={contentAfter}
          trigger={trigger}
          alignItems={alignItems}
          {...contentProps}
        >
          {renderField ? renderField(children as React.ReactElement) : children}
        </FormItemWrapper>
      )}
    </Form.Item>
  );
};

export default LFormItem;
