import { Form } from 'antd';
import { LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <LQueryForm
      layout="vertical"
      name="query-form-4"
      showColsNumber={2}
      form={form}
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
      }}
    >
      <LFormItemInput name="inpu1" required label="输入框1" />
      <LFormItemInput name="input2" required label="输入框2" />
      <LFormItemInput name="input3" required label="输入框3" />
    </LQueryForm>
  );
};

export default Demo1;
