import { useInterval } from 'ahooks';
import type { LNumberRollActionRef } from 'lighting-design';
import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useRef, useState } from 'react';

const Demo: FC = () => {
  const [value, setValue] = useState(10);
  const numRef = useRef<LNumberRollActionRef>();

  useInterval(() => {
    setValue((num) => (num > Number.MAX_SAFE_INTEGER ? 10 : num + 10));
  }, 2000);

  return (
    <div style={{}}>
      <LNumberRoll value={value} ref={numRef} fontSize={36} />
    </div>
  );
};

export default Demo;
