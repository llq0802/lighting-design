import { useInterval } from 'ahooks';
import type {} from 'lighting-design';
import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const Demo: FC = () => {
  const [value, setValue] = useState(10);

  useInterval(() => {
    setValue((num) => (num > Number.MAX_SAFE_INTEGER ? 10 : num + 10));
  }, 2000);

  return (
    <div style={{}}>
      <LNumberRoll value={value} fontSize={36} />
    </div>
  );
};

export default Demo;
