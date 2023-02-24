import { useRef } from 'react';

/**
 * 用于获取状态上一次的值
 * @param value
 * @returns
 */
export default function usePrevious<T>(state: T) {
  const prevRef = useRef<T>();
  const curRef = useRef<T>(state);
  if (!Object.is(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }
  return prevRef.current;
}
// 官方示例
// export default function usePrevious<T>(value: T): T {
//   const ref = useRef<unknown | null>(null);
//   useEffect(() => {
//     ref.current = value;
//   },[value]);
//   return ref.current as T;
// }
