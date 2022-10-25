'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _debounce = _interopRequireDefault(require('lodash/debounce'));

var _react = require('react');

var _useUnmounted = _interopRequireDefault(require('../useUnmounted'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 防抖函数
 * @template T
 * @param {T} fn
 * @param {number} [wait=300]
 * @param {Parameters<typeof debounce>[2]} [options={}]
 * @return {*}
 */
function useDebounceFn(fn, wait = 300, options = {}) {
  const refFn = (0, _react.useRef)(fn);
  refFn.current = fn;
  const debounceRun = (0, _react.useRef)(
    (0, _debounce.default)((...args) => refFn.current(...args), wait, options),
  );
  (0, _useUnmounted.default)(() => {
    debounceRun.current.cancel();
  });
  return {
    run: debounceRun.current,
    cancel: debounceRun.current.cancel,
    flush: debounceRun.current.flush,
  };
}

var _default = useDebounceFn;
exports.default = _default;
