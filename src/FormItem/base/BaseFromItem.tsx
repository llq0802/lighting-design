import { Form } from 'antd';
import classnames from 'classnames';
import type { FC, ReactElement } from 'react';
import { cloneElement, isValidElement, useContext, useMemo } from 'react';
import { LFormContext } from '../../Form/base/BaseForm';
import { isLegalValue, usePlaceholder } from '../../_utils';
import type { LFormItemProps } from '../interface';
import FormItemWrapper from './FormItemWrapper';
import './styles.less';

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
    contentAlignItems: alignItems = 'center',
    wrapperAlignItems = 'start',
    formItemBottom: itemBottom,
    name,
    required = false,
    shouldUpdate,
    dependencies,
    rules,
    className,
    style: outStyle,
    labelCol,
    children,

    _isSelectType,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ownColSpans,
    ...restFromItemProps
  } = props;

  let curName = name;
  if (typeof name === 'number') curName?.toString();

  const { layout, formItemBottom, labelColProps: formLabelColProps } = useContext(LFormContext);

  const messageLabel = usePlaceholder({
    placeholder,
    isSelectType: _isSelectType,
    restProps: restFromItemProps,
  });

  const innerClassNames = useMemo(
    () =>
      classnames(
        prefixCls,
        {
          [`${prefixCls}-wrapper-label-${wrapperAlignItems}`]: restFromItemProps?.label
            ? true
            : false,
        },
        className,
      ),
    [className, wrapperAlignItems, restFromItemProps?.label],
  );

  const innerRules = useMemo(
    () =>
      Array.isArray(rules) && rules.length > 0
        ? rules
        : [
            {
              async validator(_: any, value: any) {
                let errMsg = '';
                if (!isLegalValue(value)) {
                  errMsg = required
                    ? `${restFromItemProps?.messageVariables?.label || messageLabel}!`
                    : '';
                }

                if (errMsg) {
                  return Promise.reject(errMsg);
                }
                return Promise.resolve();
              },
            },
          ],
    [messageLabel, required, rules, restFromItemProps?.messageVariables?.label],
  );

  const labelColProps = useMemo(() => {
    let labelFlex = {};
    if (layout === 'vertical' || labelWidth === 'auto') {
      labelFlex = {};
    } else if (labelWidth && typeof labelWidth === 'number') {
      labelFlex = { flex: `0 0 ${labelWidth}px` };
    } else if (labelWidth && typeof labelWidth === 'string') {
      labelFlex = { flex: `0 0 ${labelWidth}` };
    } else {
      labelFlex = {};
    }
    return {
      ...formLabelColProps,
      ...labelFlex,
      ...labelCol,
    };
  }, [layout, labelWidth, formLabelColProps, labelCol]);

  const publicProps = {
    name: curName,
    labelCol: labelColProps,
    required,
    rules: innerRules,
    className: innerClassNames,
    style: { marginBottom: formItemBottom ?? itemBottom, ...outStyle },
  };

  const wrapperProps = {
    className: contentClassName,
    before: contentBefore,
    after: contentAfter,
    alignItems,
    contentInline,
  };

  if (shouldUpdate) {
    const dom1 = (
      <Form.Item {...publicProps} shouldUpdate={shouldUpdate} {...restFromItemProps}>
        {(form) => {
          const contentChildren = typeof children === 'function' ? children(form) : children;
          return (
            <FormItemWrapper {...wrapperProps} {...contentProps}>
              {renderField ? renderField(contentChildren as ReactElement, props) : contentChildren}
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

          const innerChildren = typeof children === 'function' ? children(form) : children;

          const contentChildren = isValidElement(innerChildren)
            ? cloneElement(innerChildren as ReactElement, {
                ...depFields,
                ...innerChildren?.props,
              })
            : innerChildren;

          return (
            <Form.Item {...publicProps} {...restFromItemProps}>
              <FormItemWrapper {...wrapperProps} {...contentProps}>
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
    <Form.Item {...publicProps} {...restFromItemProps}>
      <FormItemWrapper {...wrapperProps} {...contentProps}>
        {renderField ? renderField(children as ReactElement, props) : children}
      </FormItemWrapper>
    </Form.Item>
  );
  return renderFormItem ? renderFormItem(dom3) : dom3;
};

LFormItem.useStatus = Form.Item.useStatus;

export default LFormItem;
