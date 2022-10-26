// ref:
// https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
import React, { useState } from 'react';
import { Button } from 'antd';
import { usePersistFn } from 'rc-hooks';

export default function Form() {
  const [text, updateText] = useState('');
  // 即便 `text` 变了也会被记住:
  // const handleSubmit = useEventCallback(() => {
  //   alert(text);
  // }, [text]);

  const handleSubmit = usePersistFn(() => {
    alert(text);
  });

  return (
    <>
      <input value={text} onChange={(e) => updateText(e.target.value)} />
      <Button onClick={handleSubmit}>Alert</Button>
    </>
  );
}

// function useEventCallback(fn, dependencies) {
//   const ref = useRef(() => {
//     throw new Error('Cannot call an event handler while rendering.');
//   });

//   useEffect(() => {
//     ref.current = fn;
//   }, [fn, ...dependencies]);

//   return useCallback(() => {
//     const fn = ref.current;
//     return fn();
//   }, [ref]);
// }
