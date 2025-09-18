import { LTianaiCaptcha, type LTianaiCaptchaActionRef } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React, { useRef } from 'react';
import bg1 from '../imgs/bg1.webp';
import bg2 from '../imgs/bg2.webp';

type PropsType = {};

const Demo: React.FC<PropsType> = ({}) => {
  const actionRef = useRef<LTianaiCaptchaActionRef>();
  return (
    <LTianaiCaptcha
      actionRef={actionRef}
      requestImg={async () => {
        await sleep(1000);
        return {
          id: '1',
          backgroundImage: bg1,
          backgroundImageHeight: 350,
          backgroundImageWidth: 600,
          templateImage: bg2,
          templateImageHeight: 350,
          templateImageWidth: 110,
        };
      }}
      requestCheck={async (params) => {
        await sleep(1000);
        return { data: null, msg: '', success: true, code: Math.random() > 0.5 ? 4001 : 200 };
      }}
      onSuccess={(data) => {
        setTimeout(() => {
          actionRef.current?.reset();
        }, 1200);
      }}
      onFail={() => {
        setTimeout(() => {
          actionRef.current?.refresh();
        }, 1200);
      }}
    />
  );
};
export default Demo;
