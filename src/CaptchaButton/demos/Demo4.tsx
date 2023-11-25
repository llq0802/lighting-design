// import React, { useEffect, useLayoutEffect, useState } from 'react';
// import { flushSync } from 'react-dom';
// import { Card, Spin } from 'antd';
// import './Demo4.css';
// // React 18 之前
// const App: React.FC = () => {
//   // console.log('App组件渲染了！');
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

import { Button } from 'antd';
import { memo, useCallback, useMemo, useRef, useState } from 'react';

//   useEffect(() => {
//     // document.body.addEventListener('click', () => {
//     //   setCount1((count) => count + 1);
//     //   setCount2((count) => count + 1);
//     // });
//     console.log('useEffect-父组件');
//   }, []);

//   useLayoutEffect(() => {
//     console.log('useLayoutEffect-父组件');
//   }, []);

//   return (
//     <>
//       <button
//         onClick={() => {
//           // setTimeout(() => {
//           //   setCount2((count) => count + 1);
//           //   setCount1((count) => count + 1);
//           // });
//           flushSync(() => {
//             setCount1((count) => count + 1);
//             setCount2((count) => count + 1);
//           });
//           // 第一次更新
//           // flushSync(() => {
//           //   setCount2((count) => count + 1);
//           // });
//           // 第二次更新
//           // Promise.resolve().then(() => {
//           //   setCount2((count) => count + 1);
//           //   setCount1((count) => count + 1);
//           // });
//         }}
//       >
//         {`count1 is ${count1}, count2 is ${count2}`}
//       </button>
//       {/* <BBB></BBB> */}
//       <AAA></AAA>
//     </>
//   );
// };

// export default App;

// function AAA() {
//   useEffect(() => {
//     console.log('useEffect-AAA');
//   }, []);
//   useLayoutEffect(() => {
//     console.log('useLayoutEffect-AAA');
//   }, []);
//   return <h3>AAA</h3>;
// }
// function BBB() {
//   useLayoutEffect(() => {
//     console.log('useLayoutEffect-BBB');
//   }, []);
//   useEffect(() => {
//     console.log('useEffect-BBB');
//   }, []);
//   return <h3>BBB</h3>;
// }

// const Indicator = () => {
//   return (
//     <div className="loading-wave">
//       <div className="loading-bar"></div>
//       <div className="loading-bar"></div>
//       <div className="loading-bar"></div>
//       <div className="loading-bar"></div>
//     </div>
//   );
// };

// export default function SPins() {
//   return (
//     <Spin indicator={<Indicator></Indicator>}>
//       <Card title="标题">gfasd</Card>
//     </Spin>
//   );
// }

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

      {/* <BBB age={25} info={{}} handle={() => {}}></BBB> */}
      <BBB age={25} info={info} handle={handle}></BBB>
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
