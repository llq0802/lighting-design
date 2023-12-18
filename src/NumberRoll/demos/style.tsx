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

  useInterval(() => {
    setValue(dayjs().format('HH:mm:ss'));
  }, 1000);

  return (
    <LNumberRoll
      style={center}
      value={value}
      type="date"
      height={70}
      fontSize={50}
      itemNumStyle={{
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
        margin: '0 2px',
        width: 50,
        outline: '2px solid #fff',
      }}
    />
  );
};

export default Demo;
