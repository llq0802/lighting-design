import { LForm, LFormItemInput } from 'lighting-design';
import { useEffect, useState } from 'react';

const Demo5 = () => {
  const [form] = LForm.useForm();
  const [initialValues, setInitialValues] = useState({ name: '原本的初始值' });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
      setInitialValues({ name: '这是通过异步动态设置的 initialValues' });
    }, 3000);
  }, []);

  return (
    <LForm
      isReady={isReady}
      labelWrap
      labelCol={{ flex: '90px' }}
      submitter={{ buttonAlign: 90 }}
      initialValues={initialValues}
      form={form}
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
      }}
    >
      <LFormItemInput name="name" required label="姓名姓名姓名姓名" />
    </LForm>
  );
};

export default Demo5;
