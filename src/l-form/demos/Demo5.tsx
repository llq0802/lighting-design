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
    }, 2000);
  }, []);

  return (
    <LForm
      form={form}
      isReady={isReady}
      labelWrap
      labelCol={{ flex: '90px' }}
      submitter={{ buttonAlign: 90 }}
      initialValues={initialValues}
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
      }}
    >
      <LFormItemInput name="name" required label="姓名姓名姓名姓名" />
      <LFormItemInput name="name1" required label="字段名" initialValue="llq" />
    </LForm>
  );
};

export default Demo5;
