import { Button } from 'antd';
import { useEffect, useState } from 'react';

function Child1() {
  useEffect(() => {
    console.log('===Child1===>');
  }, []);

  return <div>Child1</div>;
}

const Demo7 = () => {
  const [count, setCount] = useState(false);
  return (
    <div>
      <Button onClick={() => setCount(!count)}> Demo7-{JSON.stringify(count)}</Button>
      <hr />
      <Child1 key={`${count}`}></Child1>
    </div>
  );
};

export default Demo7;
