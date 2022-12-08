import { useUpdateEffect } from 'ahooks';
import type { FormInstance, FormProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import type { MouseEvent, ReactElement, ReactNode } from 'react';
import { Children, useMemo, useRef, useState } from 'react';
import type { LFormSubmitterProps } from './Submitter';
import Submitter from './Submitter';

const prefixCls = 'lightd-form';

export interface BaseFormProps<T = any> extends Omit<FormProps, 'onReset' | 'title'> {
  /** 渲染Form组件的children */
  contentRender?: (
    formItemsDom: ReactNode[],
    submitterDom: ReactNode,
    form: FormInstance<T>,
  ) => ReactNode;
  /** 重新渲染Form*/
  formRender?: (formDom: ReactElement, submitterDom: ReactNode) => ReactNode;
  /** 表单是否渲染完成  false时，禁止触发 submit。true 时，会对表单初始值重新赋值。 */
  isReady?: boolean;
  /** 表单提交按钮的loading */
  loading?: boolean;
  /** 默认按钮配置 */
  submitter?: false | Omit<LFormSubmitterProps, 'form'>;
  /** 重置按钮事件回调 */
  onReset?: (event: MouseEvent<HTMLElement>) => void;
  /** 是否按Enter键能提交表单 */
  isEnterSubmit?: boolean;

  children?: ReactNode;
}

function BaseForm<T = any>(props: BaseFormProps<T>): JSX.Element {
  const {
    contentRender,
    formRender,
    submitter = {},
    loading: outLoading = false,
    isEnterSubmit = true,
    isReady = true,

    form: outForm,
    onFinish,
    onFinishFailed,
    onReset,
    children,
    initialValues,
    className,
    onValuesChange,

    ...restProps
  } = props;

  const [form] = Form.useForm();
  const formRef = useRef<FormInstance>(outForm || form);

  const [loading, setLoading] = useState(outLoading);

  useUpdateEffect(() => {
    // 准备完成后，重新设置初始值
    if (isReady) {
      formRef.current?.resetFields?.();
    }
  }, [isReady]);

  useUpdateEffect(() => {
    setLoading(outLoading);
  }, [outLoading]);

  const submitterProps = useMemo(() => {
    return typeof submitter === 'boolean' || !submitter ? {} : submitter;
  }, [submitter]);

  const submitterDom = useMemo(() => {
    return submitter ? (
      <Submitter
        onReset={onReset}
        {...submitterProps}
        form={formRef?.current}
        resetButtonProps={{
          disabled: loading || !isReady,
          ...submitterProps?.resetButtonProps,
        }}
        submitButtonProps={{
          loading,
          disabled: !isReady,
          ...submitterProps?.submitButtonProps,
        }}
      />
    ) : null;
  }, [isReady, loading, onReset, submitter, submitterProps]);

  const formItems = Children.toArray(children);

  const formContent = contentRender
    ? contentRender(formItems, submitterDom, formRef?.current)
    : formItems;

  const formDom = (
    <Form
      form={formRef.current}
      initialValues={initialValues}
      className={classnames(prefixCls, className)}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onKeyPress={(event) => {
        const buttonHtmlType = submitterProps?.submitButtonProps?.htmlType;
        if (isEnterSubmit && buttonHtmlType !== 'submit' && event.key === 'Enter' && isReady) {
          formRef.current?.submit();
        }
      }}
      {...restProps}
    >
      <Form.Item noStyle shouldUpdate>
        {(formInstance) => {
          // 支持 fromRef，这里 ref 里面可以随时拿到最新的值
          formRef.current = formInstance as FormInstance;
          return null;
        }}
      </Form.Item>
      {formContent}
    </Form>
  );

  return (formRender ? formRender(formDom, submitterDom) : formDom) as JSX.Element;
}

export default BaseForm;
