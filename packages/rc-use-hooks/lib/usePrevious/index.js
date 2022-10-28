'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = usePrevious;

var _react = require('react');

/**
 * 用于获取状态上一次的值
 * @param value
 * @returns
 */
function usePrevious(state) {
  const prevRef = (0, _react.useRef)();
  const curRef = (0, _react.useRef)(state);

  if (!Object.is(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
} // 官方示例
// export default function usePrevious<T>(value: T): T {
//   const ref = useRef<unknown | null>(null);
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current as T;
// }
