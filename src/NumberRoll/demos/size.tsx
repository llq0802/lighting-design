import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setCalue] = useState<number>(() =>
    Number((Math.random() * 10000).toFixed(2)),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const random = Number((Math.random() * 10000).toFixed(2));
      setCalue(random);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <LNumberRoll style={center} value={value} scale={0.6} />
      <br />
      <LNumberRoll style={center} value={value} scale={0.8} />
      <br />
      <LNumberRoll style={center} value={value} scale={1.2} />
      <br />
      <LNumberRoll style={center} value={value} scale={1.5} />
    </>
  );
};

export default Demo;
