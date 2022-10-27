import debounce from 'lodash/debounce';
import { useRef } from 'react';
import useUnmount from '../useUnmounted';
/**
 * 防抖函数
 * @template T
 * @param {T} fn
 * @param {number} [wait=300]
 * @param {Parameters<typeof debounce>[2]} [options={}]
 * @return {*}
 */
function useDebounceFn<T extends (...args: any[]) => any>(
  fn: T,
  wait = 300,
  options: Parameters<typeof debounce>[2] = {},
) {
  const refFn = useRef<T>(fn);
  refFn.current = fn;

  const debounceRun = useRef(debounce(((...args) => refFn.current(...args)) as T, wait, options));

  useUnmount(() => {
    debounceRun.current.cancel();
  });

  return {
    run: debounceRun.current,
    cancel: debounceRun.current.cancel,
    flush: debounceRun.current.flush,
  };
}

export default useDebounceFn;
