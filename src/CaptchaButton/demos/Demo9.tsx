import { memo, useCallback, useMemo, useRef, useState } from 'react';

function AAA() {
  const [count, setCount] = useState(0);
  // console.log(' AAA');
  const refObj = useRef({});

  const info = useMemo(() => {
    return {
      name: '李岚清',
    };
  }, []);

  const handle = useCallback(() => {}, []);

  const props = useMemo(() => {
    return {
      info: {},
      age: 25,
      handle: () => {},
    };
  }, []);

  // const props = {
  //   info: {},
  //   age: 25,
  //   handle: () => {},
  // };

  return (
    <div>
      <div>AAA 组件 {count}</div>

      <Button onClick={() => setCount(count + 1)}>点击</Button>

      <hr />

      <BBB age={25} info={info} handle={() => {}}></BBB>
      {/* <BBB age={25} info={info} handle={handle}></BBB> */}
      {/* <BBB {...props}></BBB> */}
      <CCC refObj={refObj}></CCC>
    </div>
  );
}

const BBB = memo(function (props) {
  console.log(' BBB', props);

  return <div>BBB 组件</div>;
});

const CCC = memo(function (props) {
  console.log(' CCC', props);

  return <div>CCC 组件</div>;
});

export default AAA;
