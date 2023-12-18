import { useInterval } from 'ahooks';
import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState(() => {
    return Number((Math.random() * 1000000000).toFixed(4)) as number;
  });

  useInterval(() => {
    const random = Number((Math.random() * 1000000000).toFixed(4)) as number;
    setValue(random);
  }, 5000);

  return <LNumberRoll style={center} value={value} dot={2} symbol="," />;
};

export default Demo;
