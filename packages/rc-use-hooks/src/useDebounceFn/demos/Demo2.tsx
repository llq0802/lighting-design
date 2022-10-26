/**
 * title: 对比
 * desc: 当 value 变化完成后，会在 1000ms 后执行一次函数。
 */

import { Button, Input } from 'antd';
import { useDebounceFn } from 'rc-use-hooks';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState<string | undefined>();
  const { run, cancel, flush } = useDebounceFn(setDebouncedValue, 1000);

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          run(e.target.value);
        }}
        placeholder="Typed value"
        style={{ width: 280 }}
      />

      <p style={{ margin: '16px 0' }}>
        <Button onClick={cancel}>Cancel Debounce</Button>
      </p>
      <p style={{ margin: '16px 0' }}>
        <Button onClick={flush}>flush Debounce</Button>
      </p>

      <p>value: {value}</p>
      <p>DebouncedValue: {debouncedValue}</p>
    </div>
  );
}

export default Demo;
