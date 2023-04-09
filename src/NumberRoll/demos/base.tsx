import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState(10);

  const load = () => {
    return setInterval(() => {
      setValue((num) => (num > Number.MAX_SAFE_INTEGER ? 10 : num + 10));
    }, 2000);
  };
  useEffect(() => {
    const timer = load();
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <LNumberRoll style={center} value={value} />;
};

export default Demo;
