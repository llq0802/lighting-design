import { LForm, LFormItemInput } from 'lighting-design';
import { useEffect } from 'react';

const Demo8 = () => {
  const [form] = LForm.useForm();

  useEffect(() => {
    setTimeout(() => {
      form.setFieldsValue({ name: '这是通过 form.setFieldsValue 设置的 初始值' });
    }, 2000);
  }, []);

  return (
    <LForm
      labelWrap
      labelCol={{ flex: '90px' }}
      submitter={{ buttonAlign: 90 }}
      form={form}
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
      }}
    >
      <LFormItemInput name="name" required label="姓名姓名姓名姓名" />
      <LFormItemInput name="age" required label="字段名" />
    </LForm>
  );
};

export default Demo8;
