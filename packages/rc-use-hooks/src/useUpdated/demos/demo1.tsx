import { Button, message } from 'antd';
import { useUpdated } from 'rc-use-hooks';
import { useState } from 'react';

const demo1 = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(99);

  useUpdated(() => {
    message.info('只有在age变化时才触发');
  }, [age]);

  return (
    <>
      <div>只有在age变化时才触发</div>
      <div>count: {count}</div>
      <div>age: {age}</div>

      <Button onClick={() => setCount(count + 1)}>add count </Button>
      <Button onClick={() => setAge(age + 1)}>add age </Button>
    </>
  );
};

export default demo1;
