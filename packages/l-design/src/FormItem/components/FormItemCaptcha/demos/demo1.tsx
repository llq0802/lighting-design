import { Button, Form, message, Space } from 'antd';
import { LFormItemCaptcha } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <>
      <Form name="formCaptcha" form={form}>
        <LFormItemCaptcha
          type="inline"
          tooltip="这是提示"
          name="code"
          label="验证码"
          required
          onGetCaptcha={async () => true}
          onEnd={() => {
            message.info('倒计时完成');
          }}
        />
      </Form>

      <Space>
        <Button
          onClick={() => {
            console.log(' form', form.getFieldsValue());
          }}
        >
          获取
        </Button>
        <Button
          onClick={() => {
            form.setFieldsValue({ name: '1' });
          }}
        >
          设置
        </Button>
        <Button
          onClick={() => {
            form.validateFields();
          }}
        >
          校验
        </Button>
      </Space>
    </>
  );
};

export default Demo1;
