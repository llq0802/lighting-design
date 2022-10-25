'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = useLatest;

var _react = require('react');

/**
 * 返回当前最新值的状态
 * @param value
 * @returns
 */
function useLatest(value) {
  const ref = (0, _react.useRef)(value);
  ref.current = value;
  return ref;
}
