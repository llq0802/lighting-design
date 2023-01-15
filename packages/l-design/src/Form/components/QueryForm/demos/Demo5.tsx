import { Form } from 'antd';
import { LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <>
      <LQueryForm
        name="query-form-5"
        itemColProps={{
          xs: 24,
          sm: 24,
          md: 12,
          lg: 6,
          xl: 8,
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
