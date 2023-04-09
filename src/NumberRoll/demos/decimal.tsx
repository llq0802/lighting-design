import { LNumberRoll } from 'lighting-design';
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
    return setInterval(() => {
      const random = Number((Math.random() * 1000000000).toFixed(2)) as number;
      setValue(random);
    }, 5000);
  };
  useEffect(() => {
    const timer = load();
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <LNumberRoll style={center} value={value} dot={2} symbol="," />;
};

export default Demo;
