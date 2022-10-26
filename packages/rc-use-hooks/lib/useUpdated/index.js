'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

// 是否时第一次渲染组件
const useIsFirstRender = () => {
  const isFirst = (0, _react.useRef)(true);
  const { current } = isFirst; // 如果是第一次，改变状态并返回true

  if (current) {
    isFirst.current = false;
    return true;
  }

  return current;
};
/**
 * 依赖更改时候生命周期
 * @param effect 更新时所需要调用的函数
 * @param deps  更新的依赖
 */

const useUpdated = (effect, deps) => {
  // 是否是第一次更新
  const isFirst = useIsFirstRender();
  (0, _react.useEffect)(() => {
    // 如果不是第一次执行函数
    if (!isFirst) return effect(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

var _default = useUpdated;
exports.default = _default;
