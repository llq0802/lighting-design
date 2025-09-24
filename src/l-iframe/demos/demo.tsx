import { useMount } from 'ahooks';
import React, { useRef } from 'react';
import LIframe from '..';

type PropsType = {};

const Index: React.FC<PropsType> = ({}) => {
  const actionRef = useRef();
  useMount(() => {
    actionRef.current?.hi('LIframe');
    console.log('===actionRef==>', actionRef);
  });
  return (
    <div
      style={{
        height: 500,
      }}
    >
      <LIframe actionRef={actionRef} src="http://localhost:5173/penpal" allowedOrigins={['*']} />
    </div>
  );
};

export default Index;
