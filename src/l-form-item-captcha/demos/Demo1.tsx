import { message } from 'antd';
import { LForm, LFormItemCaptcha } from 'lighting-design';
import { sleep } from 'lighting-design/test';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={{ buttonAlign: 'center' }}>
      <LFormItemCaptcha
        variant="filled"
        type="inline"
        tooltip="这是提示"
        name="code1"
        cacheKey="__FormItemCaptcha__code1"
        label="内联验证码"
        second={10}
        required
        onGetCaptcha={async () => {
          await sleep();
        }}
        onEnd={() => {
          message.info('倒计时完成');
        }}
      />
      <LFormItemCaptcha
        tooltip="这是提示"
        name="code2"
        cacheKey="__FormItemCaptcha__code2"
        label="验证码1"
        required
        autoFocusOnGetCaptcha={false}
        onGetCaptcha={async () => {
          await sleep();
        }}
      />
      <LFormItemCaptcha
        tooltip="这是提示"
        type="primary"
        name="code3"
        cacheKey="__FormItemCaptcha__code3"
        label="验证码2"
        required
        onGetCaptcha={async () => {
          await sleep();
        }}
      />
      <LFormItemCaptcha
        tooltip="这是提示"
        name="code4"
        cacheKey="__FormItemCaptcha__code4"
        label="自定义文本"
        initText="自定义文本"
        required
        onGetCaptcha={async () => {
          await sleep();
        }}
      />
    </LForm>
  );
};

export default Demo1;
