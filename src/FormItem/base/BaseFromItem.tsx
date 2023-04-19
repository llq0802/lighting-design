import type { FormItemProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement, useContext, useMemo } from 'react';
import { LFormContext } from '../../Form/base/BaseForm';
import { usePlaceholder } from '../../_utils';
import FormItemWrapper from './FormItemWrapper';

export interface LFormItemProps extends FormItemProps {
  /** lable宽度 */
  labelWidth?: number | 'auto';
  /** 重新渲染FormItem组件 */
  renderField?: (dom: ReactElement, props: LFormItemProps) => ReactElement;
  /** 当配置了contentBefore或者contentAfter时组件垂直的对齐方式 */
  alignItems?: 'center' | 'start' | 'end';
  /** 组件前面的内容 */
  contentBefore?: ReactNode;
  /** 组件后面的内容 */
  contentAfter?: ReactNode;
  /** 传给children的额外属性 */
  contentProps?: Record<string, any>;
  /** children是否为inline */
  contentInline?: boolean;
  /** 被包裹组件的最外层容器类名 */
  contentClassName?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 组件的placeholder */
  placeholder?: string | string[];

  /** 是否是选择类型的组件(内部使用) */
  _isSelectType?: boolean;
}

const prefixCls = 'ligthd-from-item';

const LFormItem: FC<LFormItemProps> & {
  useStatus: typeof Form.Item.useStatus;
} = (props) => {
  const {
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
    dependencies,
    rules = [],
    className,
    labelCol,
    children,

    _isSelectType,

    ...restFromItemProps
  } = props;

  const { layout, labelColProps: formLabelColProps } = useContext(LFormContext);

  const messageLabel = usePlaceholder({
    restProps: restFromItemProps,
    isSelectType: _isSelectType,
    placeholder,
  });

  const itemClassnames = useMemo(() => classnames(prefixCls, className), []);

  const itemRules = useMemo(
    () =>
      rules?.length > 0
        ? rules
        : [
            {
              validator(_: any, value: any) {
                let errMsg = '';
                if (
                  !value ||
                  (Array.isArray(value) && !value?.filter(Boolean)?.length)
                ) {
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
        rules={itemRules}
        className={itemClassnames}
        {...restFromItemProps}
      >
        {(form) => {
          const contentChildren =
            typeof children === 'function' ? children(form) : children;
          return (
            <FormItemWrapper
              className={contentClassName}
              before={contentBefore}
              after={contentAfter}
              alignItems={alignItems}
              contentInline={contentInline}
              {...contentProps}
            >
              {renderField
                ? renderField(contentChildren as ReactElement, props)
                : contentChildren}
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
          const innerChildren =
            typeof children === 'function' ? children(form) : children;
          const contentChildren = isValidElement(innerChildren)
            ? cloneElement(innerChildren as ReactElement, { ...depFields })
            : innerChildren;

          return (
            <Form.Item
              name={name}
              labelCol={labelColProps}
              required={required}
              rules={itemRules}
              className={itemClassnames}
              {...restFromItemProps}
            >
              <FormItemWrapper
                className={contentClassName}
                before={contentBefore}
                after={contentAfter}
                alignItems={alignItems}
                contentInline={contentInline}
                {...contentProps}
              >
                {renderField
                  ? renderField(contentChildren as ReactElement, props)
                  : contentChildren}
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
      labelCol={labelColProps}
      required={required}
      rules={itemRules}
      className={itemClassnames}
      {...restFromItemProps}
    >
      <FormItemWrapper
        className={contentClassName}
        before={contentBefore}
        after={contentAfter}
        alignItems={alignItems}
        contentInline={contentInline}
        {...contentProps}
      >
        {renderField ? renderField(children as ReactElement, props) : children}
      </FormItemWrapper>
    </Form.Item>
  );
};
LFormItem.useStatus = Form.Item.useStatus;

export default LFormItem;
