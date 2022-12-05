import { useUpdateEffect } from 'ahooks';
import type { FormInstance, FormProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import type { MouseEvent, ReactElement, ReactNode } from 'react';
import { Children, useRef, useState } from 'react';
import type { LFormSubmitterProps } from './Submitter';
import Submitter from './Submitter';

const prefixCls = 'lightd-form';

export interface BaseFormProps<T = any> extends Omit<FormProps, 'onReset'> {
  contentRender?: (
    formItemsDom: ReactNode[],
    submitterDom: ReactNode,
    form: FormInstance<T>,
  ) => ReactNode;

  formRender?: (formDom: ReactElement, submitterDom: ReactNode) => ReactNode;

  ready?: boolean; // false 时，禁止触发 submit 。 true 时，会对表单初始值重新赋值。

  loading?: boolean;

  submitter?: false | Omit<LFormSubmitterProps, 'form'>;

  onReset?: (event: MouseEvent<HTMLElement>) => void;
  pressEnterSubmit?: boolean;

  children?: ReactNode;
}

function BaseForm<T = any>(props: BaseFormProps<T>): ReactNode {
  const {
    contentRender,
    formRender,
    submitter = {},
    loading: outLoading = false,
    pressEnterSubmit = true,
    ready = true,

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
    if (ready) {
      formRef.current?.resetFields?.();
    }
  }, [ready]);

  useUpdateEffect(() => {
    setLoading(outLoading);
  }, [outLoading]);

  const submitterProps = typeof submitter === 'boolean' || !submitter ? {} : submitter;
  const submitterDom = submitter ? (
    <Submitter
      onReset={onReset}
      {...submitterProps}
      form={formRef?.current}
      submitButtonProps={{
        loading,
        disabled: !ready,
        ...submitterProps?.submitButtonProps,
      }}
      resetButtonProps={{
        disabled: loading || !ready,
        ...submitterProps?.resetButtonProps,
      }}
    />
  ) : null;

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
        if (pressEnterSubmit && buttonHtmlType !== 'submit' && event.key === 'Enter' && ready) {
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

  return formRender ? formRender(formDom, submitterDom) : formDom;
}

export default BaseForm;
