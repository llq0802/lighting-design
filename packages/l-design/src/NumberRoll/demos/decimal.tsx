import { NumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [count, setCount] = useState<number>(() => {
    return Number((Math.random() * 1000000000).toFixed(2));
  });
  const load = () => {
    setInterval(() => {
      const random = Number((Math.random() * 1000000000).toFixed(2));
      setCount(random);
    }, 5000);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <>
      <NumberRoll style={center} value={count} dot={2} symbol=","/>
      <br />
    </>
  );
};

export default Demo;
