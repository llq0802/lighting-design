import { LCaptchaButton } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import { useState } from 'react';

const Demo2 = () => {
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <LCaptchaButton
        second={10}
        onClick={async () => {
          setLoading(true);
          // 也可以是异步请求
          await awaitTime(3000);
          setLoading(false);
          setStart(true);
        }}
        onEnd={() => setStart(false)}
        start={start}
        loading={loading}
        cacheKey="__CaptchaButton__Phone__2"
        type="primary"
      />
    </div>
  );
};

export default Demo2;
