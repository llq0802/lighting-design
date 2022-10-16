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

function useThrottleFn(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var refFn = useRef(fn);
  refFn.current = fn;
  var throttleRun = useRef(
    throttle(
      function () {
        return refFn.current.apply(refFn, arguments);
      },
      wait,
      options,
    ),
  );
  useUnmount(function () {
    throttleRun.current.cancel();
  });
  return {
    run: throttleRun.current,
    cancel: throttleRun.current.cancel,
    flush: throttleRun.current.flush,
  };
}

export default useThrottleFn;
