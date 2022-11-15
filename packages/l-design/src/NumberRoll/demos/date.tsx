import { NumberRoll } from 'lighting-design';
import moment from 'moment';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState<string>(moment(new Date()).format('HH:mm:ss'));
  const [value2, setValue2] = useState<string>(moment(new Date()).format('yyyy-MM-DD HH:mm'));

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(moment(new Date()).format('HH:mm:ss'));
      setValue2(moment(new Date()).format('yyyy-MM-DD HH:mm'));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <NumberRoll style={center} value={value} type="date" />
      <br />
      <NumberRoll style={center} value={value2} type="date" />
    </>
  );
};

export default Demo;
