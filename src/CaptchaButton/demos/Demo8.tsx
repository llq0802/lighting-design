import Button from 'antd/es/button';
import React, { createContext, useContext, useMemo } from 'react';

function GrandChild1() {
  console.log('== render-GrandChild1 ====>');

  return <div>GrandChild1</div>;
}
function GrandChild11() {
  const ctx = useContext(Pr);

  console.log('== render-GrandChild11 ====>');

  return <div>GrandChild11 - {ctx.count2}</div>;
}

function GrandChild2() {
  console.log('== render-GrandChild2 ====>');

  return <div>GrandChild2</div>;
}

function Child1() {
  const ctx = useContext(Pr);
  console.log('== render-Child1 ====>');

  const GrandChild1111 = useMemo(() => {
    return <GrandChild11 />;
  }, []);

  return (
    <div>
      Child1
      <GrandChild1 />
      {GrandChild1111}
      <Button onClick={() => ctx.setCount(ctx.count + 1)}>button - {ctx.count}</Button>
    </div>
  );
}

function Child2() {
  console.log('== render-Child2 ====>');

  return (
    <div>
      Child2
      <GrandChild2 />
    </div>
  );
}

const Pr = createContext({});

const Demo8 = () => {
  const [state, setState] = React.useState(0);
  const [state2, setState2] = React.useState(99);
  const child = useMemo(() => {
    return (
      <>
        <Child1 />
        <hr />
        <Child2 />
      </>
    );
  }, []);
  return (
    <Pr.Provider
      value={{
        count: state,
        count2: state2,
        setCount: setState,
      }}
    >
      <div>{child}</div>
    </Pr.Provider>
  );
};

export default Demo8;
