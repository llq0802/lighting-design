import { Button, message } from 'antd';
import { useUpdated } from 'rc-use-hooks';
import { useState } from 'react';

const demo1 = () => {
  const [count, setCount] = useState(0);

  useUpdated(() => {
    message.info('组件更新触发');
  });

  return (
    <>
      <div>更新组件触发</div>
      <div>count: {count}</div>

      <Button onClick={() => setCount(count + 1)}>add count </Button>
    </>
  );
};

export default demo1;
