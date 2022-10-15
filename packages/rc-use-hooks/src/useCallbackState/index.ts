import { useCallback, useEffect, useRef, useState } from 'react';
import { isFunction } from '../utils';

/**
 * useState的回调获取最新的state
 * @export
 * @template T
 * @param {T} state
 * @return {*}  { [T, Function]}
 */
export function useCallbackState<T>(state: T): [T, Function] {
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
