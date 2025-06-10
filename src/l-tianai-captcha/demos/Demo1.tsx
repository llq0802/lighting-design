import { Button } from 'antd';
import { LTianaiCaptcha, type LTianaiCaptchaActionRef } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import { useRef } from 'react';
import bg1 from '../imgs/bg1.webp';
import bg2 from '../imgs/bg2.webp';

// http://169.254.4.160:8800/shiyi/gen/

const requestCaptcha = async () => {
  await sleep(500);
  return {
    code: '0',
    success: true,
    msg: 'success',
    data: {
      id: `${Date.now()}`,
      captcha: {
        backgroundImage: bg1,
        backgroundImageHeight: 350,
        backgroundImageWidth: 600,
        templateImage: bg2,
        templateImageHeight: 350,
        templateImageWidth: 110,
      },
    },
  };
};
const validCaptcha = async () => {
  await sleep();
  return {
    code: 200,
    success: true,
    msg: 'success',
    data: null,
  };
};

export default function Demo1() {
  const actionRef = useRef<LTianaiCaptchaActionRef>();

  return (
    <div>
      <Button
        onClick={() => {
          actionRef.current?.open();
        }}
      >
        open
      </Button>

      <LTianaiCaptcha
        actionRef={actionRef}
        requestCaptcha={requestCaptcha}
        validCaptcha={validCaptcha}
        modalProps={{
          afterOpenChange(open) {
            console.log('afterOpenChange', open);
          },
        }}
      />
    </div>
  );
}
