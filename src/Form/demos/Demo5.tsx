import { LForm, LFormItemInput } from 'lighting-design';
import { useEffect, useState } from 'react';

const Demo5 = () => {
  const [form] = LForm.useForm();
  const [initialValues, setInitialValues] = useState({ name: '张三' });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
    setInitialValues({ name: '李四' });
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
      <LFormItemInput name="name4" required label="姓名姓名姓名姓名" />
    </LForm>
  );
};

export default Demo5;
