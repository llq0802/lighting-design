'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = _default;

var _react = require('react');

var _useLatest = _interopRequireDefault(require('../useLatest'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 组件卸载时触发
 * @param fn
 */
function _default(fn) {
  const fnRef = (0, _useLatest.default)(fn);
  (0, _react.useEffect)(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      fnRef.current?.();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
