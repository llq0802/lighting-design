import { message } from 'antd';
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
    <>
      <LForm
        isReady={isReady}
        labelWidth={90}
        submitter={{ buttonAlign: 90 }}
        name="LForm-InitialValues"
        initialValues={initialValues}
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          message.success('提交成功');
          return true;
        }}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LForm>
    </>
  );
};

export default Demo5;
