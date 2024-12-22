import { LForm, LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LQueryForm
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        initialValues={{
          input1: '默认值',
        }}
      >
        <LFormItemInput name="input1" required label="输入框1" />
        <LFormItemInput name="input2" required label="输入框2" />
        <LFormItemInput name="input3" required label="输入框3" />
      </LQueryForm>
    </>
  );
};

export default Demo1;
