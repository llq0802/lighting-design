// import React from 'react';

// const Logger = (props) => {
//   console.log(`${props.label} rendered`);
//   return <div>{Math.random()}</div>;
// };

// // const MemoLogger = React.memo(Logger);
// const Count = (props) => {
//   const [count, setCount] = React.useState(0);
//   const increment = () => setCount((c) => c + 1);

//   // const MemoLogger = useMemo(() => {
//   //   return <Logger label="MemoLogger" />;
//   // }, [count]);

//   return (
//     <div>
//       <button onClick={increment}>The count is {count}</button>
//       {props.logger.map((item) => item)}
//       {/* {MemoLogger} */}
//     </div>
//   );
// };

// export default () => {
//   return (
//     <>
//       <Count logger={[<Logger label="counter" key="0" />]} />;
//     </>
//   );
// };

// import React, { createContext, useContext } from 'react';

// const MyContext = createContext<any>(null);

// const Logger = (props) => {
//   // const { count } = useContext(MyContext);

//   console.log('Logger-Render ');
//   return (
//     <div>
//       {/* {Math.random()}-----{count} */}
//       {Math.random()}
//     </div>
//   );
// };

// const MemoLogger = React.memo(Logger);

// const Count = (props) => {
//   const { count, setCount } = useContext(MyContext);
//   const increment = () => setCount((c) => c + 1);
//   return (
//     <div>
//       <button onClick={increment}>The count is {count}</button>
//     </div>
//   );
// };

// const Body = (props) => {
//   return (
//     <div>
//       <div>Counter</div>
//       <Count />
//       <div>Logger</div>
//       <MemoLogger />
//     </div>
//   );
// };

// const Provider = (props) => {
//   const [count, setCount] = React.useState(0);

//   // const value = React.useMemo(
//   //   () => ({
//   //     count,
//   //     setCount,
//   //   }),
//   //   [count],
//   // );

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
