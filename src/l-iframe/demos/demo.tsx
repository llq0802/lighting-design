import React, { useEffect, useState } from 'react';
import LIframe from '..';

type PropsType = {};

type ChildMethods = {
  onMessage: (msg: string) => Promise<string>;
};
const ParentPage: React.FC<PropsType> = ({}) => {
  const [message, setMessage] = useState<string>('');
  const [childMethods, setChildMethods] = useState<ChildMethods>(null!);

  useEffect(() => {
    if (!childMethods) return;
    childMethods?.onMessage('hello，我是父页面').then((res) => {
      console.log('===res==>', res);
    });
  }, [childMethods]);

  return (
    <div
      style={{
        height: 500,
      }}
    >
      <h3>子页面：{message}</h3>
      <LIframe
        src="http://localhost:5173/penpal"
        methods={{
          onMessage(message: string) {
            setMessage(message);
          },
        }}
        setChildMethods={setChildMethods}
        style={{
          border: '1px solid red',
        }}
      />
    </div>
  );
};

export default ParentPage;

// import { useLIframeParent } from 'lighting-design';

// type ParentMethods = {
//   onMessage(msg: string): Reply<string>;
// };

// function Penpal() {
//   const [message, setMessage] = useState('');
//   const { parentMethods, connection } = useLIframeParent<ParentMethods>(
//     {
//       methods: {
//         onMessage(message: string) {
//           setMessage(message);
//           return 'ok';
//         },
//       },
//     },
//     ['*'],
//   );

//   useEffect(() => {
//     if (connection && parentMethods) {
//       console.log('===parentMethods==>', parentMethods);
//       parentMethods.onMessage('Hello 我是子页面');
//     }
//   }, [connection, parentMethods]);

//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// }
// export default Penpal;
