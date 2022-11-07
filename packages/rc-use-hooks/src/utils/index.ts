import type { DependencyList } from 'react';

/**
 * 判断是不是函数
 * @export
 * @param {unknown} patch
 * @return {*}
 */
export function isFunction(patch: unknown) {
  return typeof patch === 'function';
}

/**
 * 判断新旧依赖项是否相同 (比较地址)
 * @export
 * @param {oldDeps,deps} DependencyList
 * @return {*}
 */
export function depsSame(oldDeps: DependencyList, deps: DependencyList): boolean {
  if (oldDeps === deps) return true;
  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }
  return true;
}
