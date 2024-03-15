// import { Button } from 'antd';
// import React from 'react';

// const Logger = (props) => {
//   return <h3 style={{ outline: `1px solid` }}>{Math.random()}</h3>;
// };

// // const MemoLogger = React.memo(Logger);
// const Count = (props) => {
//   const [count, setCount] = React.useState(0);
//   const increment = () => setCount((c) => c + 1);

//   // const MemoLogger = useMemo(() => {
//   //   return <Logger label="MemoLogger" />;
//   // }, [count]);

//   // const LoggerC = props.logger;
//   return (
//     <div>
//       <Button onClick={increment}>The count is {count}</Button>
//       {/* {props.logger.map((item) => item)} */}
//       {props.logger.map((item) => item.content)}
//       {/* {MemoLogger} */}
//       {/* {props.logger} */}

//       {/* {props.logger?.content} */}

//       {/* {props.logger?.()} */}
//       {/* <LoggerC></LoggerC> */}
//     </div>
//   );
// };

// export default () => {
//   return (
//     <>
//       <Count
//         logger={[
//           { content: <Logger label="counter" key="0" /> },
//           { content: <Logger label="counter" key="1" /> },
//         ]}
//       />
//       {/* <Count
//         logger={{
//           content: <Logger label="counter" key="0" />,
//         }}
//       /> */}
//       {/* <Count logger={<Logger label="counter" key="0" />} /> */}
//       {/* <Count logger={Logger} /> */}
//     </>
//   );
// };

import { Button } from 'antd';
import React, { createContext, useContext, useMemo } from 'react';

const MyContext = createContext<any>(null);

const Child = () => {
  return <h3>{Math.random()}</h3>;
};

const Logger = () => {
  const { count } = useContext(MyContext);
  return (
    <>
      <h3>{Math.random()}</h3>
    </>
  );
};

const MemoLogger = React.memo(Logger, () => false);

const Count = () => {
  const { count, setCount } = useContext(MyContext);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <Button onClick={increment}>The count is {count}</Button>
    </div>
  );
};

const Body = () => {
  const logger = useMemo(() => <Logger></Logger>, []);
  return (
    <div>
      <h3>Counter</h3>
      <Count />
      <hr />
      <h3>Logger</h3>
      {/* {logger} */}
      <MemoLogger />
      {/* <Logger></Logger> */}
      <h3>Child</h3>
      <Child />
    </div>
  );
};

const MemoBody = React.memo(Body);
// const Provider = (props) => {
//   const [count, setCount] = React.useState(0);

//   return (
//     <MyContext.Provider
//       value={{
//         count,
//         setCount,
//       }}
//     >
//       {props.children}
//     </MyContext.Provider>
//   );
// };

// export default () => {
//   return (
//     <Provider>
//       <Body />
//     </Provider>
//   );
// };

export default () => {
  const [count, setCount] = React.useState(0);

  const myBody = useMemo(() => <Body></Body>, []);

  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {/* {myBody} */}
      {/* <MemoBody abc={{}}></MemoBody> */}
      {/* <Body></Body> */}
    </MyContext.Provider>
  );
};
