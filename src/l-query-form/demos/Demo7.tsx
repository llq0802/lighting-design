import { LForm, LFormItemDatePicker, LFormItemInput, LQueryForm } from 'lighting-design';

const Demo7 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LQueryForm
        form={form}
        isEnterSubmit={false}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
      >
        <LFormItemInput name="input1" label="输入框" />
        <LFormItemInput name="input2" label="输入框" />
        <LFormItemInput name="input3" label="输入框" />
        <LFormItemDatePicker name="input4" label="期框" />
        <LFormItemDatePicker
          name="input6"
          label="日期框"
          rangePicker
          ownColSpans={{
            xl: 12,
            xxl: 12,
          }}
        />
      </LQueryForm>
    </>
  );
};

export default Demo7;
