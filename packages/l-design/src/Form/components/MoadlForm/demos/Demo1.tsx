import { Button, Form } from 'antd';
import { LFormItemColor, LFormItemInput } from 'lighting-design';
import LModalForm from '..';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <>
      <LModalForm
        form={form}
        title="弹窗"
        onFinish={(values) => {
          console.log('onFinish-values ', values);
        }}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemColor colorType="chrome" label="颜色选择" name="color" required />
        <LFormItemInput name="input" required label="输入框" />
      </LModalForm>
    </>
  );
};

export default Demo1;
