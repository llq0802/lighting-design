import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const center = {
  // display: 'flex',
  // justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState(101.1);

  // useInterval(() => {
  //   setValue((num) => (num > Number.MAX_SAFE_INTEGER ? 10 : num + 10));
  // }, 2000);

  return <LNumberRoll style={center} value={value} />;
};

export default Demo;
