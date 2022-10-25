'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

/**
 * 强制组件更新一次
 * @returns
 */
const useUpdate = () => {
  const [, setState] = (0, _react.useState)({});
  return (0, _react.useCallback)(() => setState({}), []);
};

var _default = useUpdate;
exports.default = _default;
