import { Button } from 'antd';
import type { LSliderVerifyInstance } from 'lighting-design';
import { LSliderVerify } from 'lighting-design';
import { useRef } from 'react';

const Demo1 = () => {
  const actionRef = useRef<LSliderVerifyInstance>();
  return (
    <div>
      <LSliderVerify actionRef={actionRef} />
      <br></br>
      <Button onClick={() => actionRef.current?.reset()}>重置</Button>
    </div>
  );
};

export default Demo1;
