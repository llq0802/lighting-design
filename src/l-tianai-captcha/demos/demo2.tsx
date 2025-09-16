import React from 'react';
import bg1 from '../imgs/bg1.webp';
import bg2 from '../imgs/bg2.webp';
import TiannaiCaptcha from '../tiannai-captcha';

type PropsType = {};

const Demo: React.FC<PropsType> = ({}) => {
  return (
    <TiannaiCaptcha
      requestImg={async () => {
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
        return { data: null, msg: '', success: true, code: 200 };
      }}
    />
  );
};
export default Demo;
