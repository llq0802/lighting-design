import type { DependencyList, EffectCallback } from 'react';
/**
 * 依赖更改时候生命周期
 * @param effect 更新时所需要调用的函数
 * @param deps  更新的依赖
 */
declare const useUpdated: (effect: EffectCallback, deps: DependencyList) => void;
export default useUpdated;
