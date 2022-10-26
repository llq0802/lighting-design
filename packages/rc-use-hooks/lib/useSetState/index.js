'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

var _utils = require('../utils');

/**
 * 管理 object 类型 state 的 Hooks，可合并更新。
 * @param initialState
 * @returns
 */
const useSetState = (initialState) => {
  const [state, setState] = (0, _react.useState)(initialState);
  const setMergeState = (0, _react.useCallback)((patch) => {
    setState((prevState) => {
      const newState = (0, _utils.isFunction)(patch) ? patch(prevState) : patch;
      return newState instanceof Object ? { ...prevState, ...newState } : prevState;
    });
  }, []);
  return [state, setMergeState];
};

var _default = useSetState;
exports.default = _default;
