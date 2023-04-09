import dayjs from 'dayjs';
import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState<string>(dayjs().format('HH:mm:ss'));
  const [value3, setValue3] = useState<string>(dayjs().format('YYYY-MM-DD'));
  const [value2, setValue2] = useState<string>(
    dayjs().format('YYYY-MM-DD HH:mm:ss'),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(dayjs().format('HH:mm:ss'));
      setValue2(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <LNumberRoll
        style={center}
        value={value}
        type="date"
        // onFinish={(value) => {
        //   console.log('动画结束', value);
        // }}
      />
      <br />
      <LNumberRoll style={center} value={value3} type="date" />
      <br />
      <LNumberRoll style={center} value={value2} type="date" />
    </>
  );
};

export default Demo;
