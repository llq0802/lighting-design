import { LForm, LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LQueryForm
        name="query-form-3"
        form={form}
        showColsNumber={3}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
      >
        <LFormItemInput name="input1" required label="输入框1" />
        <LFormItemInput name="input2" required label="输入框2" />
        <LFormItemInput name="input3" required label="输入框3" />
        <LFormItemInput name="input4" required label="输入框4" />
        <LFormItemInput name="input5" required label="输入框5" />
        <LFormItemInput name="input6" required label="输入框6" />
      </LQueryForm>
    </>
  );
};

export default Demo1;
