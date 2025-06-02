import { Form, type FormItemProps } from 'antd';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement } from 'react';
import Wrapper from './components/wrapper';
import type { LFormItemProps } from './interface';
import { useStyles } from './styles';

const LFormItem: FC<LFormItemProps> & {
  useStatus: typeof Form.Item.useStatus;
} = (props) => {
  const {
    labelWidth: itemLabelWidth,
    wrapperWidth: itemWrapperWidth,
    alignItems: itemAlignItems,
    renderField,
    renderFormItem,
    contentBefore,
    contentAfter,
    contentProps,
    formItemBottom: itemBottom,
    children,
    ...restFromItemProps
  } = props;

  const { styles, cx } = useStyles({ alignItems: itemAlignItems });
  const { dependencies, shouldUpdate } = restFromItemProps;

  const wrapperProps = {
    contentBefore,
    contentAfter,
    ...contentProps,
  };

  const formItemProps: FormItemProps = {
    labelCol: {
      flex: itemLabelWidth,
    },
    wrapperCol: {
      flex: itemWrapperWidth ? `0 0 ${itemWrapperWidth}` : void 0,
    },
    ...restFromItemProps,
    className: cx(styles.item, restFromItemProps?.className),
    style: {
      marginBottom: itemBottom,
      ...restFromItemProps?.style,
    },
  };

  const renderChildren = (node: ReactNode) => {
    return <Wrapper {...wrapperProps}>{renderField ? renderField(node as ReactElement, props) : node}</Wrapper>;
  };

  if (shouldUpdate) {
    const dom1 = (
      <Form.Item {...formItemProps}>
        {(...args) => {
          const contentChildren = typeof children === 'function' ? children(...args) : children;
          return renderChildren(contentChildren);
        }}
      </Form.Item>
    );
    return renderFormItem ? renderFormItem(dom1) : dom1;
  }

  if (dependencies) {
    const dom2 = (
      <Form.Item noStyle dependencies={dependencies}>
        {(form) => {
          const depFieldValues = form.getFieldsValue(dependencies);
          const innerChildren = typeof children === 'function' ? children(form) : children;
          const contentChildren = isValidElement(innerChildren)
            ? cloneElement(innerChildren as ReactElement, {
                ...depFieldValues,
                ...innerChildren?.props,
              })
            : innerChildren;

          return <Form.Item {...formItemProps}>{renderChildren(contentChildren)}</Form.Item>;
        }}
      </Form.Item>
    );
    return renderFormItem ? renderFormItem(dom2) : dom2;
  }

  const dom3 = <Form.Item {...formItemProps}>{renderChildren(children as ReactNode)}</Form.Item>;
  return renderFormItem ? renderFormItem(dom3) : dom3;
};

LFormItem.useStatus = Form.Item.useStatus;

export * from './interface';
export default LFormItem;
