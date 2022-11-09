import { Button, Input } from 'antd';
import { NumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [count, setCount] = useState(999.99);
  const [value, setValue] = useState<number>();
  return (
    <>
      <NumberRoll style={center} value={count} />
      <br />
      <Input.Group compact style={center}>
        <Input
          style={{ width: 200 }}
          value={value}
          placeholder="请输入数字"
          defaultValue={999.99}
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
        />
        <Button
          type="primary"
          onClick={() => {
            setCount(Number(value));
          }}
        >
          设置
        </Button>
      </Input.Group>
    </>
  );
};

export default Demo;
