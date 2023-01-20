import { message } from 'antd';
import { LForm, LFormItemCaptcha } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemCaptcha" form={form}>
      <LFormItemCaptcha
        type="inline"
        tooltip="这是提示"
        name="code1"
        cacheKey="__FormItemCaptcha__code1"
        label="内联验证码"
        required
        onGetCaptcha={async () => {
          await awaitTime();
        }}
        placeholder="请输入"
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
      />
      <LFormItemCaptcha
        tooltip="这是提示"
        type="primary"
        name="code3"
        cacheKey="__FormItemCaptcha__code3"
        label="验证码2"
        required
      />
      <LFormItemCaptcha
        tooltip="这是提示"
        name="code4"
        cacheKey="__FormItemCaptcha__code4"
        label="自定义文本"
        initText="自定义文本"
        required
      />
    </LForm>
  );
};

export default Demo1;
