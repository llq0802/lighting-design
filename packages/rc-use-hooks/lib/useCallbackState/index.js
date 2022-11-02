'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = useCallbackState;

var _react = require('react');

var _utils = require('../utils');

/**
 * useState的回调 setState第二个参数(函数)获取最新的state并执行一些操作
 * @export
 * @template T
 * @param {T} state
 * @return {*}  { [T,  (val: SetStateAction<T>, cb: (newVal: T) => void) => void}
 */
function useCallbackState(state) {
  const callBackRef = (0, _react.useRef)();
  const [data, setData] = (0, _react.useState)(state);
  (0, _react.useEffect)(() => {
    callBackRef?.current?.(data);
  }, [data]);
  const setState = (0, _react.useCallback)(function (newState, cb) {
    if ((0, _utils.isFunction)(cb)) {
      callBackRef.current = cb;
    }

    if ((0, _utils.isFunction)(newState)) {
      setData((prevState) => {
        const ret = newState?.(prevState);
        return ret;
      });
    } else {
      setData(newState);
    }
  }, []);
  return [data, setState];
}
