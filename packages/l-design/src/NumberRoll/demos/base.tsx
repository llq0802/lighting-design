import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState(10 as number);

  const load = () => {
    setInterval(() => {
      const random = value * Math.floor(Math.random() * 1000);
      setValue(random);
    }, 3000);
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <LNumberRoll style={center} value={value} />
    </>
  );
};

export default Demo;
