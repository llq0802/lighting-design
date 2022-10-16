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

function useDebounceFn(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var refFn = useRef(fn);
  refFn.current = fn;
  var debounceRun = useRef(
    debounce(
      function () {
        return refFn.current.apply(refFn, arguments);
      },
      wait,
      options,
    ),
  );
  useUnmount(function () {
    debounceRun.current.cancel();
  });
  return {
    run: debounceRun.current,
    cancel: debounceRun.current.cancel,
    flush: debounceRun.current.flush,
  };
}

export default useDebounceFn;
