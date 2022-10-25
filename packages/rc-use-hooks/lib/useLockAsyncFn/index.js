'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = useLockAsyncFn;

var _react = require('react');

/**
 * 用于给一个异步函数增加竞态锁，防止并发执行。
 */
function useLockAsyncFn(fn) {
  const lockRef = (0, _react.useRef)(false);
  return (0, _react.useCallback)(
    async (...args) => {
      if (lockRef.current) return;
      lockRef.current = true;

      try {
        const ret = await fn(...args);
        lockRef.current = false;
        return ret;
      } catch (e) {
        lockRef.current = false;
        throw e;
      }
    },
    [fn],
  );
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
