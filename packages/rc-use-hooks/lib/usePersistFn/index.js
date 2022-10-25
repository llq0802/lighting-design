'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

/**
 * 持久函数,地址永远不会改变
 * @param fn
 * @returns
 */
function usePersistFn(fn) {
  const ref = (0, _react.useRef)(fn);
  ref.current = fn;
  const persistFn = (0, _react.useCallback)(
    (...args) => {
      const refFn = ref.current;
      return refFn?.(...args);
    },
    [ref],
  );
  return persistFn;
}

var _default = usePersistFn; //  https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
// function useEventCallback(fn, dependencies) {
//   const ref = useRef(() => {
//     throw new Error('Cannot call an event handler while rendering.');
//   });
//   useEffect(() => {
//     ref.current = fn;
//   }, [fn, ...dependencies]);
//   return useCallback(() => {
//     const fn = ref.current;
//     return fn();
//   }, [ref]);
// }

exports.default = _default;
