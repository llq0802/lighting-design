import { useEventListener } from 'ahooks';
import { Button } from 'antd';
import type { LSliderVerifyActionRef } from 'lighting-design';
import { LSliderVerify } from 'lighting-design';
import { useRef, useState } from 'react';

const Demo3 = () => {
  const actionRef = useRef<LSliderVerifyActionRef>();
  const [widths, setWidths] = useState(() => ({
    width: (window.innerWidth * 400) / 1920,
    height: (window.innerWidth * 32) / 1920,
    barWidth: (window.innerWidth * 60) / 1920,
  }));

  useEventListener('resize', (e) => {
    const clientWidth = e.target.innerWidth;
    setWidths({
      width: (clientWidth * 400) / 1920,
      height: (clientWidth * 32) / 1920,
      barWidth: (clientWidth * 60) / 1920,
    });
  });

  return (
    <div>
      <LSliderVerify {...widths} actionRef={actionRef} />
      <br></br>
      <Button onClick={() => actionRef.current?.reset()} size="small">
        重置
      </Button>
    </div>
  );
};

export default Demo3;
