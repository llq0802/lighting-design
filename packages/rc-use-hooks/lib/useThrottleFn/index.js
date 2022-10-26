'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _throttle = _interopRequireDefault(require('lodash/throttle'));

var _react = require('react');

var _useUnmounted = _interopRequireDefault(require('../useUnmounted'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 节流函数
 * @param fn
 * @param wait
 * @param options
 * @returns
 */
function useThrottleFn(fn, wait = 300, options = {}) {
  const refFn = (0, _react.useRef)(fn);
  refFn.current = fn;
  const throttleRun = (0, _react.useRef)(
    (0, _throttle.default)((...args) => refFn.current(...args), wait, options),
  );
  (0, _useUnmounted.default)(() => {
    throttleRun.current.cancel();
  });
  return {
    run: throttleRun.current,
    cancel: throttleRun.current.cancel,
    flush: throttleRun.current.flush,
  };
}

var _default = useThrottleFn;
exports.default = _default;
