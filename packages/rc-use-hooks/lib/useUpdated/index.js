'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.useIsFirstRender = exports.default = void 0;

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
 * 更新生命周期
 * @param effect 更新时所需要调用的函数
 * @param deps  更新的依赖
 */

exports.useIsFirstRender = useIsFirstRender;

const useUpdated = (effect, deps) => {
  // eslint-disable-next-line no-param-reassign
  deps = Array.isArray(deps) && deps.length > 0 ? deps : undefined;
  const isFirst = useIsFirstRender(); // 是否是第一次更新

  (0, _react.useEffect)(() => {
    // 如果不是第一次执行函数
    if (!isFirst) return effect(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

var _default = useUpdated;
exports.default = _default;
