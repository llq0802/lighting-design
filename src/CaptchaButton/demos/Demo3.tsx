import { Button, message, Space } from 'antd';
import { LCaptchaButton } from 'lighting-design';
import { useRef } from 'react';

const Demo3 = () => {
  const cancelRef = useRef<() => void>();

  return (
    <div>
      <Space>
        <LCaptchaButton
          cancelRef={cancelRef}
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
        <Button
          onClick={() => {
            console.log('cancelRef.current.', cancelRef.current?.());
          }}
        >
          取消倒计时
        </Button>
      </Space>
    </div>
  );
};

export default Demo3;
