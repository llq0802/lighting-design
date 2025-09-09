import { useInterval } from 'ahooks';
import dayjs from 'dayjs';
import { LNumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const Demo: FC = () => {
  const [value, setValue] = useState<string>(dayjs().format('HH:mm:ss'));
  const [value2, setValue2] = useState<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  const [value3, setValue3] = useState<string>(dayjs().format('YYYY MM DD HH:mm:ss'));
  const [value4, setValue4] = useState<string>(dayjs().format('YYYY/MM/DD HH:mm:ss'));
  const [value5, setValue5] = useState<string>(dayjs().format('YYYY年MM月DD日 HH:mm:ss'));

  useInterval(() => {
    setValue(dayjs().format('HH:mm:ss'));
    setValue2(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    setValue3(dayjs().format('YYYY MM DD HH:mm:ss'));
    setValue4(dayjs().format('YYYY/MM/DD HH:mm:ss'));
    setValue5(dayjs().format(dayjs().format('YYYY年MM月DD日 HH:mm:ss')));
  }, 1000);

  return (
    <>
      <LNumberRoll
        value={value}
        type="date"
        // onFinish={(value) => {
        //   console.log('动画结束', value);
        // }}
      />
      <br />
      <LNumberRoll value={value3} type="date" />
      <br />
      <LNumberRoll value={value2} type="date" />
      <br />
      <LNumberRoll value={value4} type="date" />
      <br />
      <LNumberRoll value={value5} type="date" />
    </>
  );
};

export default Demo;
