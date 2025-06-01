import { LForm, LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LQueryForm
        itemColProps={{
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12,
          xxl: 8,
        }}
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
      >
        <LFormItemInput name="inpu1" required label="输入框1" />
        <LFormItemInput name="input2" required label="输入框2" />
        <LFormItemInput name="input3" required label="输入框3" />
        <LFormItemInput name="input4" required label="输入框4" />
        <LFormItemInput name="input5" required label="输入框5" />
      </LQueryForm>
    </>
  );
};

export default Demo1;
