import { useDeepCompareEffect } from 'ahooks';
import type { DependencyList, EffectCallback } from 'react';
import { useRef } from 'react';
// const useBeforeUnload = (enabled: boolean = true, message?: string) => {
//   useEffect(() => {
//     if (!enabled) {
//       return;
//     }
//     const handler = (event: BeforeUnloadEvent) => {
//       event.preventDefault();
//       if (message) {
//         event.returnValue = message;
//       }
//       return message;
//     };
//     window.addEventListener('beforeunload', handler);
//     return () => window.removeEventListener('beforeunload', handler);
//   }, [message, enabled]);
// };

// export default useBeforeUnload;

/**
 * 是否时第一次渲染组件
 */
const useIsFirstRender = (): boolean => {
  const isFirst = useRef<boolean>(true);
  const { current } = isFirst;
  // 如果是第一次，改变状态并返回true
  if (current) {
    isFirst.current = false;
    return true;
  }

  return current;

  // const isFirstMount = useRef(true);
  // useEffect(() => {
  //   isFirstMount.current = false;
  // }, []);
  // return isFirstMount.current;
};

/**
 * 只在更新时调用并且会深度比较依赖项
 * @param effect{EffectCallback} 更新时所需要调用的函数
 * @param deps{DependencyList}  更新的依赖 (深度比较依赖项)
 */
const useDeepUpdateEffect = (
  effect: EffectCallback,
  deps: DependencyList,
): void => {
  // 是否是第一次更新
  const isFirst: boolean = useIsFirstRender();
  useDeepCompareEffect(() => {
    // 如果不是第一次执行函数
    if (!isFirst) return effect();
  }, deps);
};
export default useDeepUpdateEffect;
