import { useEffect, useRef } from 'react'; // 是否时第一次渲染组件

var useIsFirstRender = function useIsFirstRender() {
  var isFirst = useRef(true);
  var current = isFirst.current; // 如果是第一次，改变状态并返回true

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

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  // 是否是第一次更新
  var isFirst = useIsFirstRender();
  useEffect(function () {
    // 如果不是第一次执行函数
    if (!isFirst) return effect(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;
