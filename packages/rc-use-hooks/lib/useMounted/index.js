'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

/**
 * 组件第一次挂在完成触发
 * @param fn
 */
const useMount = (fn) => {
  (0, _react.useEffect)(() => {
    fn?.(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

var _default = useMount;
exports.default = _default;
