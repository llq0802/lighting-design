import type { DependencyList, EffectCallback } from 'react';
import { useEffect, useRef } from 'react';

// 是否时第一次渲染组件
const useIsFirstRender = (): boolean => {
  const isFirst = useRef<boolean>(true);
  const { current } = isFirst;
  // 如果是第一次，改变状态并返回true
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
const useUpdated = (effect: EffectCallback, deps: DependencyList): void => {
  // 是否是第一次更新
  const isFirst: boolean = useIsFirstRender();
  useEffect(() => {
    // 如果不是第一次执行函数
    if (!isFirst) return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
export default useUpdated;
