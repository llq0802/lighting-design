import { useEffect, useState } from 'react';

const Demo7 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Demo7-{count}</button>
      <hr />
      <Child1 key={count}></Child1>
    </div>
  );
};

function Child1(params: type) {
  useEffect(() => {
    console.log('===Child1===>');
  }, []);

  return <div>Child1</div>;
}

export default Demo7;
