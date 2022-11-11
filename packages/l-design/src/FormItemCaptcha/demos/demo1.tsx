import { Button, Form, message, Space } from 'antd';
import { LFormItemCaptcha } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <>
      <Form name="formCaptcha" form={form}>
        <LFormItemCaptcha
          type="inline"
          className="zxc"
          tooltip="这是提示"
          name="name"
          label="Description"
          required
          // rules={[
          //   {
          //     required: true,
          //     // message: 'Please input your username!',
          //     validator(_, value) {
          //       let errMsg = '';
          //       if (value !== '999') {
          //         errMsg = `请输入999`;
          //       }
          //       if (errMsg) {
          //         return Promise.reject(errMsg);
          //       }
          //       return Promise.resolve();
          //     },
          //   },
          // ]}
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
