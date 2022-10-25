import { Button } from 'antd';
import { usePrevious } from 'rc-use-hooks';
import { useState } from 'react';

const demo1 = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Button onClick={onClick}>点击</Button>

      <div> 上一次count:{prevCount}</div>
      <div> 当前count:{count}</div>
    </>
  );
};

export default demo1;
