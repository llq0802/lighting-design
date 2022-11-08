import { Button } from 'antd';
import { NumberRoll } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const center = {
  display: 'flex',
  width: '50%',
  margin: '0 auto',
  justifyContent: 'space-around',
};

const Demo: FC = () => {
  const [count, setCount] = useState(100);

  return (
    <div>
      <NumberRoll
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        value={0}
        count={count}
      />
      <br />
      <div style={center}>
        <Button
          onClick={() => {
            setCount(99999);
          }}
        >
          设置999
        </Button>
        <Button
          onClick={() => {
            setCount(100);
          }}
        >
          设置100
        </Button>
        <Button
          onClick={() => {
            setCount(0);
          }}
        >
          设置0
        </Button>
      </div>
    </div>
  );
};

export default Demo;
