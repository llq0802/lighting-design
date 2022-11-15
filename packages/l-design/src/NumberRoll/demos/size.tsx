import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setCalue] = useState<number>(() => {
    return Number((Math.random() * 10000).toFixed(2));
  });

  const load = () => {
    setInterval(() => {
      const random = Number((Math.random() * 10000).toFixed(2));
      setCalue(random);
    }, 3000);
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <LNumberRoll style={center} value={value} scale={0.6} />
      <br />
      <br />
      <LNumberRoll style={center} value={value} scale={1.4} />
      <br />
      <br />
      <br />
      <LNumberRoll style={center} value={value} scale={2} />
    </>
  );
};

export default Demo;
