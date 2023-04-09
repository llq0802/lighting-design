/**
 * title: 基础用法
 * desc: 页面刷新也会计时
 */
import { message, Space } from 'antd';
import { LCaptchaButton } from 'lighting-design';

const demo1 = () => {
  return (
    <div>
      <Space>
        <LCaptchaButton
          onClick={() => {
            message.info('倒计时开始');
          }}
          onEnd={() => {
            message.info('倒计时完成');
          }}
          cacheKey="__CaptchaButton__Phone__1"
        />

        <LCaptchaButton
          type="primary"
          disabledText="重新获取"
          cacheKey="__CaptchaButton__Phone__2"
        >
          获取手机验证码
        </LCaptchaButton>
      </Space>
    </div>
  );
};

export default demo1;
