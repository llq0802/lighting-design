import type { FormInstance } from 'antd';
import { Form } from 'antd';
import { type ReactNode } from 'react';
import { useLFormInstance } from './hooks';
import type { LFormProps } from './interface';

function LForm<T extends any>(props: LFormProps<T>): ReactNode {
  const { form: outForm, ...restProps } = props;

  const formRef = useLFormInstance(outForm);

  return (
    <Form<T> form={formRef.current} {...restProps}>
      <Form.Item noStyle shouldUpdate>
        {(formInstance) => {
          // 支持 fromRef，这里 ref 里面可以随时拿到最新的值
          formRef.current = formInstance as FormInstance;
          return null;
        }}
      </Form.Item>
    </Form>
  );
}

export default LForm;
