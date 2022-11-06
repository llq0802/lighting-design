/**
 * title: 代替useMemo
 * desc: 返回的值永远是最新的
 */
import { Button } from 'antd';
import { useCreate } from 'rc-use-hooks';
import { useState } from 'react';

const demo2 = () => {
  const [count, setCount] = useState(1);
  const [age, setAge] = useState(25);

  const countX2 = useCreate(() => count * 2, [count]);

  return (
    <div>
      <p>countX2在只有count变化时才会变化: {countX2}</p>
      <Button onClick={() => setCount(count + 1)}>点击更新count</Button>
      <p>count- {count}</p>
      <Button onClick={() => setAge(age + 1)}>点击更新age</Button>
      <p>age- {age}</p>
    </div>
  );
};

export default demo2;
