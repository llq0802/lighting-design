import { Form, type FormItemProps } from 'antd';
import { useMergeFormProps } from 'lighting-design/l-form/context';
import { getFormItemLabel, isLegalValue } from 'lighting-design/utils';
import { cloneElement, isValidElement, type FC, type ReactElement, type ReactNode } from 'react';
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
    depend,
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

  const innerForm = Form.useFormInstance();

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
          const innerChildren = typeof children === 'function' ? children(form) : children;
          // const depFieldValues = form.getFieldsValue(dependencies);
          // const contentChildren = isValidElement(innerChildren)
          //   ? cloneElement(innerChildren as ReactElement, {
          //       ...depFieldValues,
          //       ...innerChildren?.props,
          //     })
          //   : innerChildren;

          return <Form.Item {...formItemProps}>{renderChildren(innerChildren)}</Form.Item>;
        }}
      </Form.Item>
    );
    return renderFormItem ? renderFormItem(dom2) : dom2;
  }

  let childrenDom = typeof children === 'function' ? children(innerForm) : children;

  if (depend) {
    const depFieldValues = innerForm.getFieldsValue(depend);
    childrenDom = isValidElement(childrenDom)
      ? cloneElement(childrenDom as ReactElement, {
          ...depFieldValues,
          ...childrenDom?.props,
        })
      : childrenDom;
  }

  const dom3 = <Form.Item {...formItemProps}>{renderChildren(childrenDom)}</Form.Item>;
  return renderFormItem ? renderFormItem(dom3) : dom3;

  // <Form.Item shouldUpdate noStyle>
  //   {() => {
  //     return (
  //       <Form.Item name="other">
  //         <Input />
  //       </Form.Item>
  //     );
  //   }}
  // </Form.Item>
};

LFormItem.useStatus = Form.Item.useStatus;

export * from './interface';
export default LFormItem;
