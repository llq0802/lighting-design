/**
 * title: 不受其他状态影响
 */

import { Button, Input } from 'antd';
import { usePrevious } from 'rc-use-hooks';
import { useState } from 'react';

function Demo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const prevValue = usePrevious(value);
  return (
    <>
      <p>Now: {value}</p>
      <p>before: {prevValue}</p>
      <Input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <p>count: {count}</p>
      <Button onClick={() => setCount((x) => x + 1)}>add count</Button>
    </>
  );
}

export default Demo;
