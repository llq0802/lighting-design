import { NumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setCalue] = useState<number>(() => Number((Math.random() * 10000).toFixed(2)));

  useEffect(() => {
    setInterval(() => {
      const random = Number((Math.random() * 10000).toFixed(2));
      setCalue(random);
    }, 3000);
  }, []);

  return (
    <>
      <NumberRoll style={center} value={value} scale={0.6} />
      <br />
      <br />
      <NumberRoll style={center} value={value} scale={1.4} />
      <br />
      <br />
      <br />
      <NumberRoll style={center} value={value} scale={2} />
    </>
  );
};

export default Demo;
