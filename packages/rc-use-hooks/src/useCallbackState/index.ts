import { useCallback, useEffect, useRef, useState } from 'react';
import { isFunction } from '../utils';

/**
 * useState的回调 setState第二个参数(函数)获取最新的state并执行一些操作
 * @export
 * @template T
 * @param {T} state
 * @return {*}  { [T, Function]}
 */
export  default  function useCallbackState<T>(state: T): [T, Function] {
  const callBackRef = useRef<Function | null>(null);
  const [data, setData] = useState<T>(state);
  useEffect(() => {
    callBackRef?.current?.(data);
  }, [data]);

  const setState = useCallback(function (newState: unknown, cb: (val: T) => void) {
    callBackRef.current = cb;
    if (isFunction(newState)) {
      setData((prevState: T) => {
        const ret = (newState as Function)?.(prevState);
        return ret;
      });
    } else {
      setData(newState as T);
    }
  }, []);

  return [data, setState];
}
