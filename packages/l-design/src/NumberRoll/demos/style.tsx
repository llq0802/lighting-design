import { NumberRoll } from 'lighting-design';
import moment from 'moment';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import'./index.less';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState<number | string>(moment(new Date()).format('HH:mm:ss'));
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(moment(new Date()).format('HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <NumberRoll style={center} className='numberStyle' value={value} type="date" />
    </>
  );
};

export default Demo;
