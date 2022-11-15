import { NumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState(() => {
    return Number((Math.random() * 1000000000).toFixed(2)) as number;
  });
  const load = () => {
    setInterval(() => {
      const random = Number((Math.random() * 1000000000).toFixed(2)) as number;
      setValue(random);
    }, 5000);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <>
      <NumberRoll style={center} value={value} dot={2} symbol="," />
      <br />
    </>
  );
};

export default Demo;
