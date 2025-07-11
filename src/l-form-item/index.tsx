import { Form, type FormItemProps } from 'antd';
import { useMergeFormProps } from 'lighting-design/l-form/context';
import { getFormItemLabel, isLegalValue } from 'lighting-design/utils';
import { type FC, type ReactElement, type ReactNode } from 'react';
import Wrapper from './components/wrapper';
import type { LFormItemProps } from './interface';
import { useStyles } from './styles';

const LFormItem: FC<LFormItemProps> & {
  useStatus: typeof Form.Item.useStatus;
} = (props) => {
  const {
    //跟form合并的属性
    labelWidth: itemLabelWidth,
    wrapperWidth: itemWrapperWidth,
    alignItems: itemAlignItems,
    formItemBottom: itemBottom,
    // 自定义属性
    renderField,
    renderFormItem,
    contentBefore,
    contentAfter,
    contentWrapperProps,
    customValidator,
    // antd属性
    children,
    ...restFromItemProps
  } = props;

  const { labelWidth, wrapperWidth, alignItems, formItemBottom } = useMergeFormProps(props);

  const { dependencies, shouldUpdate, required, messageVariables, rules, style, className } = restFromItemProps;

  const { styles, cx } = useStyles({ alignItems });

  const wrapperProps = {
    contentBefore,
    contentAfter,
    ...contentWrapperProps,
  };

  const innerRules =
    rules && rules?.length > 0
      ? rules
      : [
          {
            async validator(_: any, value: any) {
              if (customValidator) {
                return customValidator(value, _)
                  .then((p) => Promise.resolve(p))
                  .catch((err) => Promise.reject(err));
              }
              let errMsg = '';
              if (required && !isLegalValue(value)) {
                errMsg = messageVariables?.label || `${getFormItemLabel(restFromItemProps)}不能为空!`;
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            },
          },
        ];

  const formItemProps: FormItemProps = {
    labelCol: {
      flex: labelWidth ? `0 0 ${typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth}` : void 0,
    },
    wrapperCol: {
      flex: wrapperWidth ? `0 0 ${typeof wrapperWidth === 'number' ? `${wrapperWidth}px` : wrapperWidth}` : void 0,
    },
    ...restFromItemProps,
    className: cx(styles.item, className),
    rules: innerRules,
    style: { marginBottom: formItemBottom, ...style },
  };

  const renderChildren = (node: ReactNode) => {
    return <Wrapper {...wrapperProps}>{renderField ? renderField(node as ReactElement, props) : node}</Wrapper>;
  };

  if (shouldUpdate) {
    const dom1 = (
      <Form.Item noStyle shouldUpdate={shouldUpdate}>
        {(form) => {
          const allValues = form?.getFieldsValue?.();
          const innerChildren = typeof children === 'function' ? children(form, allValues) : children;
          return (
            <Form.Item {...formItemProps} shouldUpdate={void 0}>
              {renderChildren(innerChildren)}
            </Form.Item>
          );
        }}
      </Form.Item>
    );
    return renderFormItem ? renderFormItem(dom1) : dom1;
  }

  if (dependencies) {
    const dom2 = (
      <Form.Item noStyle dependencies={dependencies}>
        {(form) => {
          const dependeValues = form?.getFieldsValue?.(dependencies);
          const innerChildren = typeof children === 'function' ? children(form, dependeValues) : children;
          return (
            <Form.Item {...formItemProps} dependencies={void 0}>
              {renderChildren(innerChildren)}
            </Form.Item>
          );
        }}
      </Form.Item>
    );
    return renderFormItem ? renderFormItem(dom2) : dom2;
  }

  if (typeof children === 'function') {
    const dom3 = (
      <Form.Item shouldUpdate noStyle>
        {(form) => {
          const allValues = form?.getFieldsValue?.();
          const innerChildren = children(form, allValues);
          return <Form.Item {...formItemProps}>{renderChildren(innerChildren)}</Form.Item>;
        }}
      </Form.Item>
    );
    return renderFormItem ? renderFormItem(dom3) : dom3;
  }

  const dom4 = <Form.Item {...formItemProps}>{renderChildren(children)}</Form.Item>;
  return renderFormItem ? renderFormItem(dom4) : dom4;
};

LFormItem.useStatus = Form.Item.useStatus;

export * from './interface';
export default LFormItem;
