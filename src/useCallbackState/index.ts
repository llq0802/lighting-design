import type { SetStateAction } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

const isFunction = (patch: any) => {
  return typeof patch === 'function';
};

/**
 * useState的回调 setState第二个参数(回调函数)获取最新的state并执行一些操作
 * @param {T} state
 * @return {*}  { [T,  (val: SetStateAction<T>, cb: (newVal: T) => void) => void}
 */
export default function useCallbackState<T>(
  state: T,
): [T, (val: SetStateAction<T>, cb?: (newVal: T) => void) => void] {
  const callBackRef = useRef<(newData: T) => void>();
  const [data, setData] = useState<T>(state);
  useEffect(() => {
    callBackRef?.current?.(data);
  }, [data]);

  const setState = useCallback(
    (newState: T | ((prevState: T) => void), cb?: (val: T) => void) => {
      if (isFunction(cb)) {
        callBackRef.current = cb;
      }
      setData((prevState: T) => {
        const ret = isFunction(newState) ? newState?.(prevState) : newState;
        return ret;
      });
    },
    [],
  );

  return [data, setState];
}
