// import React, { useEffect, useLayoutEffect, useState } from 'react';
// import { flushSync } from 'react-dom';

import { Card, Spin } from 'antd';
import './Demo4.css';
// // React 18 之前
// const App: React.FC = () => {
//   // console.log('App组件渲染了！');
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

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

const Indicator = () => {
  return (
    <div className="loading-wave">
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
    </div>
  );
};

export default function SPins() {
  return (
    <Spin indicator={<Indicator></Indicator>}>
      <Card title="标题">gfasd</Card>
    </Spin>
  );
}
