import { Form, message } from 'antd';
import { LForm, LFormItemCaptcha } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <>
      <LForm name="formCaptcha" form={form}>
        <LFormItemCaptcha
          type="inline"
          tooltip="这是提示"
          name="code1"
          label="内联验证码"
          required
          onGetCaptcha={async () => true}
          placeholder="请输入"
          onEnd={() => {
            message.info('倒计时完成');
          }}
        />
        <LFormItemCaptcha tooltip="这是提示" name="code2" label="验证码" required />
        <LFormItemCaptcha tooltip="这是提示" type="primary" name="code3" label="验证码" required />
        <LFormItemCaptcha
          tooltip="这是提示"
          name="code4"
          label="自定义文本"
          initText="自定义文本"
          required
        />
      </LForm>
    </>
  );
};

export default Demo1;
