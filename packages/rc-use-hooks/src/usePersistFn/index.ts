import { useCallback, useRef } from 'react';

/**
 * 持久函数,地址永远不会改变
 * @param fn
 * @returns
 */
function usePersistFn<T extends (...args: any[]) => any>(fn: T): T extends infer R ? R : T {
  const ref = useRef<T>(fn);
  ref.current = fn;
  const persistFn = useCallback(
    (...args: any[]) => {
      const refFn = ref.current;
      return refFn?.(...args);
    },
    [ref],
  );

  return persistFn as any;
}

export default usePersistFn;

//  https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback

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
