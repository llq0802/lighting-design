import { useCallback, useRef, useState } from 'react';

/**
 * 用于给一个异步函数节流阀，防止并发执行。
 */
export default function useLockAsyncFn<P extends any[] = any[], V extends any = any>(
  fn: (...args: P) => Promise<V>,
) {
  const [loading, setLoading] = useState<boolean>(false);
  const lockRef = useRef<boolean>(false);

  const run = useCallback(
    async (...args: P) => {
      if (lockRef.current) return;
      lockRef.current = true;
      try {
        setLoading(true);
        const ret = await fn(...args);
        setLoading(false);
        lockRef.current = false;
        return ret;
      } catch (e) {
        setLoading(false);
        lockRef.current = false;
        throw e;
      }
    },
    [fn],
  );
  return {
    loading,
    run,
  };
}

// // 防止网络请求多次(使用promise实现)
// function firstPromise(returnPromiseFn) {
//   let promiseInstance = null;
//   return function (...args) {
//     if (promiseInstance) {
//       return promiseInstance;
//     } else {
//       return (promiseInstance = returnPromiseFn.apply(this, args).finally(() => (promiseInstance = null)));
//     }
//   };
// }
