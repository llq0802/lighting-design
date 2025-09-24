import { useMount } from 'ahooks';
import React, { useRef } from 'react';
import LIframe from '..';

type PropsType = {};

const Index: React.FC<PropsType> = ({}) => {
  const actionRef = useRef();
  useMount(() => {
    console.log('===actionRef==>', actionRef);
  });
  return (
    <div
      style={{
        height: 500,
      }}
    >
      <LIframe actionRef={actionRef} src="https://www.baidu.com" allowedOrigins={['*']} />
    </div>
  );
};

export default Index;
