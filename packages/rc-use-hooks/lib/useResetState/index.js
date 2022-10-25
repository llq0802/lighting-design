'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

var _usePersistFn = _interopRequireDefault(require('../usePersistFn'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const useResetState = (initialState) => {
  const [state, setState] = (0, _react.useState)(initialState);
  const resetState = (0, _usePersistFn.default)(() => {
    setState(initialState);
  });
  return [state, setState, resetState];
};

var _default = useResetState;
exports.default = _default;
