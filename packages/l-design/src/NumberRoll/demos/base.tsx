import { NumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setCalue] = useState(9);

  const load = () => {
    setInterval(() => {
      setCalue(value * Math.floor(Math.random() * 1000));
    }, 3000);
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <NumberRoll style={center} value={value} />
    </>
  );
};

export default Demo;
