import { Button, message } from 'antd';
import { useMounted } from 'rc-use-hooks';
import { useState } from 'react';

const demo1 = () => {
  const [count, setCount] = useState(0);
  useMounted(() => {
    message.info('组价挂在完成触发');
  });

  return (
    <>
      <div>组价挂在完成触发,更新组件不触发</div>
      <div>count: {count}</div>
      <Button onClick={() => setCount(count + 1)}>add count </Button>
    </>
  );
};

export default demo1;
