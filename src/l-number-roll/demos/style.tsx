import { useInterval } from 'ahooks';
import dayjs from 'dayjs';
import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const Demo: FC = () => {
  const [value, setValue] = useState<string>(dayjs().format('HH:mm:ss'));

  useInterval(() => {
    setValue(dayjs().format('HH:mm:ss'));
  }, 1000);

  return (
    <LNumberRoll
      value={value}
      type="date"
      fontSize={52}
      itemNumStyle={{
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
        width: 50,
      }}
    />
  );
};

export default Demo;
