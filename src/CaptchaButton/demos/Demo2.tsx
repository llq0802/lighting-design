import { LCaptchaButton } from 'lighting-design';
import { useState } from 'react';

const Demo2 = () => {
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <LCaptchaButton
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setStart(true);
          }, 3000);
        }}
        start={start}
        loading={loading}
        cacheKey="__CaptchaButton__Phone__2"
        type="primary"
      />
    </div>
  );
};

export default Demo2;
