import { LH5Preview } from 'lighting-design';
import { useEffect, useRef } from 'react';

const Demo2 = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log('ref.current', ref.current);
  }, []);
  return (
    <div>
      <LH5Preview
        ref={ref}
        scale={0.8}
        deviceColor="gray"
        className="my-h5-preview-1"
      >
        <div
          style={{
            background: '#fff',
            width: '100%',
            height: 1000,
          }}
        >
          <div>手机标题</div>
          <div>手机内容</div>
          <div>手机底部</div>
        </div>
      </LH5Preview>
    </div>
  );
};

export default Demo2;
