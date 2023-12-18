import { useInterval } from 'ahooks';
import dayjs from 'dayjs';
import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [value, setValue] = useState<string>(dayjs().format('HH:mm:ss'));
  const [value3] = useState<string>(dayjs().format('YYYY-MM-DD'));
  const [value2, setValue2] = useState<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  const [value4, setValue4] = useState<string>(dayjs().format('YYYY/MM/DD HH:mm:ss'));

  useInterval(() => {
    setValue(dayjs().format('HH:mm:ss'));
    setValue2(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    setValue4(dayjs().format('YYYY/MM/DD HH:mm:ss'));
  }, 2000);

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
      <br />
      <LNumberRoll style={center} value={value4} type="date" />
    </>
  );
};

export default Demo;
