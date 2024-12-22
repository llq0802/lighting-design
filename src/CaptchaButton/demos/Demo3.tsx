import { Button, message, Space } from 'antd';
import type { LCaptchaButtonActionRef } from 'lighting-design';
import { LCaptchaButton } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import { useRef, useState } from 'react';

const Demo3 = () => {
  const [loading, setLoading] = useState(false);
  const actionRef = useRef<LCaptchaButtonActionRef>();

  return (
    <div>
      <Space>
        <LCaptchaButton
          actionRef={actionRef}
          second={10}
          disabledText="重新获取"
          type="primary"
          cacheKey="__CaptchaButton__Phone__3"
          onEnd={() => {
            message.success('倒计时结束');
          }}
          onClick={async () => {
            setLoading(true);
            await awaitTime();
            setLoading(false);
            actionRef.current?.start();
          }}
          loading={loading}
        >
          获取验证码
        </LCaptchaButton>
        <Button
          onClick={() => {
            actionRef.current?.cancel();
          }}
        >
          取消倒计时
        </Button>
      </Space>
    </div>
  );
};

export default Demo3;
