import { useCallback, useRef } from 'react';

/**
 * 用于给一个异步函数节流阀，防止并发执行。
 */
export default function useLockAsyncFn<P extends any[] = any[], V extends any = any>(
  fn: (...args: P) => Promise<V>,
) {
  const lockRef = useRef<boolean>(false);

  return useCallback(
    async (...args: P) => {
      if (lockRef.current) return;
      lockRef.current = true;
      try {
        const ret = await fn(...args);
        lockRef.current = false;
        return ret;
      } catch (e) {
        lockRef.current = false;
        throw e;
      }
    },
    [fn],
  );
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
