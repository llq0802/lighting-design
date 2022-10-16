import throttle from 'lodash/throttle';
import { useRef } from 'react';
import useUnmount from '../useUnmounted';


/**
 * 节流函数
 * @param fn 
 * @param wait 
 * @param options 
 * @returns 
 */
function useThrottleFn<T extends (...args: any[]) => any>(
  fn: T,
  wait = 300,
  options: Parameters<typeof throttle>[2] = {},
) {
  const refFn = useRef<T>(fn);
  refFn.current = fn;
  const throttleRun = useRef(throttle(((...args) => refFn.current(...args)) as T, wait, options));

  useUnmount(() => {
    throttleRun.current.cancel();
  });

  return {
    run: throttleRun.current,
    cancel: throttleRun.current.cancel,
    flush: throttleRun.current.flush,
  };
}

export default useThrottleFn;
