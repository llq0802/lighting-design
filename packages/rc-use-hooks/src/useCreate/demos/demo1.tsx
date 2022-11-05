/**
 * title: 代替useRef
 * desc: 频繁更新组件，useCreate的数据也不会变
 */
import { Button } from 'antd';
import { useCreate } from 'rc-use-hooks';
import { useState } from 'react';

const demo1 = () => {
  const data = useCreate(() => 99, []);

  const [count, setCount] = useState(0);
  return (
    <div>
      <p> 更新组件不变的data: {data}</p>
      <Button onClick={() => setCount(count + 1)}>点击更新组件</Button>
      <p>count- {count}</p>
    </div>
  );
};

export default demo1;
