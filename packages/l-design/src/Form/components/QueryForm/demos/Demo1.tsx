import { Form, message } from 'antd';
import { LFormItemColor, LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <>
      <LQueryForm
        // layout="vertical"
        isSpace
        form={form}
        showColsNumber={3}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          message.success('提交成功');
          return true;
        }}
      >
        <LFormItemColor colorType="chrome" label="颜色选择" name="color" required />
        <LFormItemInput name="inpu1" required label="输入框" />
        <LFormItemInput name="input2" required label="输入框" />
        <LFormItemInput name="input3" required label="输入框" />
        <LFormItemInput name="input4" required label="输入框" />
        <LFormItemInput name="input5" required label="输入框" />
        <LFormItemInput name="input6" required label="输入框" />
        <LFormItemInput name="input7" required label="输入框" />
        <LFormItemInput name="input8" required label="输入框" />
      </LQueryForm>
    </>
  );
};

export default Demo1;
