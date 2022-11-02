/**
 * title: 基础用法
 * desc: 页面刷新也会计时
 */

import { message, Space } from 'antd';
import { CaptchaButton } from 'lighting-design';

const demo1 = () => {
  return (
    <div>
      <Space>
        <CaptchaButton
          onClick={() => {
            message.info('倒计时开始');
          }}
          onEnd={() => {
            message.info('倒计时完成');
          }}
        />

        <CaptchaButton type="primary" disabledText="重新获取" cacheKey="__CaptchaButton__Phone__">
          获取手机验证码
        </CaptchaButton>
      </Space>
    </div>
  );
};

export default demo1;
