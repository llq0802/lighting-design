import { Button } from 'antd';
import { NumberCount } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const Demo: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <NumberCount value={0} count={count} speed={3} />
      <Button
        onClick={() => {
          setCount(99999);
        }}
      >
        设置99999
      </Button>
    </>
  );
};

export default Demo;
