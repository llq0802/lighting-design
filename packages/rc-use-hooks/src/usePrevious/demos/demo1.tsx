/**
 * title: 基础用法
 * desc: 记录上次的 value 值
 */

import { Input } from 'antd';
import { usePrevious } from 'rc-use-hooks';
import { useState } from 'react';

function Demo1() {
  const [value, setValue] = useState('');
  const prevValue = usePrevious(value);

  return (
    <>
      <p>Now: {value}</p>
      <p>before: {prevValue}</p>
      <Input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
    </>
  );
}

export default Demo1;
