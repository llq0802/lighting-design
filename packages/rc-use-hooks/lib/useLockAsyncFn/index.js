'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = useLockAsyncFn;

var _react = require('react');

/**
 * 用于给一个异步函数节流阀，防止并发执行。
 */
function useLockAsyncFn(fn) {
  const [loading, setLoading] = (0, _react.useState)(false);
  const lockRef = (0, _react.useRef)(false);
  const run = (0, _react.useCallback)(
    async (...args) => {
      if (lockRef.current) return;
      lockRef.current = true;

      try {
        setLoading(true);
        const ret = await fn(...args);
        setLoading(false);
        lockRef.current = false;
        return ret;
      } catch (e) {
        setLoading(false);
        lockRef.current = false;
        throw e;
      }
    },
    [fn],
  );
  return {
    loading,
    run,
  };
} // // 防止网络请求多次(使用promise实现)
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
