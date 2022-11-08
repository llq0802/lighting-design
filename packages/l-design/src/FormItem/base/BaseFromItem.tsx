import type { FormItemProps } from 'antd';
import { Form } from 'antd';
import type { FC, ReactElement, ReactNode } from 'react';
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

  return (
    <Form.Item
      name={name}
      label={label}
      shouldUpdate={shouldUpdate}
      dependencies={dependencies}
      trigger={trigger}
      {...restFromItemProps}
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
              {renderField ? renderField(innerChildren as ReactElement) : innerChildren}
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
          {renderField ? renderField(children as ReactElement) : children}
        </FormItemWrapper>
      )}
    </Form.Item>
  );
};

export default LFormItem;
