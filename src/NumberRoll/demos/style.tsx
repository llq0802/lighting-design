import { useInterval } from 'ahooks';
import dayjs from 'dayjs';
import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';
import './index.less';

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
      className="my-number-style"
      value={value}
      type="date"
    />
  );
};

export default Demo;
