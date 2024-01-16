import { useInterval } from 'ahooks';
import type { LNumberRollRefProps } from 'lighting-design';
import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useRef, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState(10);
  const numRef = useRef<LNumberRollRefProps>();

  // numRef.current?.loadAnimate();

  useInterval(() => {
    setValue((num) => (num > Number.MAX_SAFE_INTEGER ? 10 : num + 10));
  }, 2000);

  return <LNumberRoll style={center} value={value} speed={500} ref={numRef} />;
};

export default Demo;
