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
        formItemBottom={10}
      >
        <LFormItemInput name="inpu1" required label="输入框1" />
        <LFormItemInput name="input2" required label="输入框2" />
        <LFormItemInput name="input3" required label="输入框3" />
        <LFormItemInput name="input4" required label="输入框4" />
        <LFormItemInput name="input5" required label="输入框5" />
        <LFormItemInput name="input6" required label="输入框6" />
        <LFormItemInput name="input7" required label="输入框7" />
        <LFormItemInput name="input8" required label="输入框8" />
        <LFormItemInput name="input9" required label="输入框9" />
        <LFormItemInput name="input10" required label="输入框10" />
      </LQueryForm>
    </>
  );
};

export default Demo1;
