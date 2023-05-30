import { message, Space } from 'antd';
import { LCaptchaButton } from 'lighting-design';

const demo3 = () => {
  return (
    <div>
      <Space>
        <LCaptchaButton
          second={10}
          disabledText="重新获取"
          type="primary"
          cacheKey="__CaptchaButton__Phone__3"
          onEnd={() => {
            message.success('倒计时结束');
          }}
        >
          获取验证码
        </LCaptchaButton>
      </Space>
    </div>
  );
};

export default demo3;
