import type { DependencyList } from 'react';
/**
 * 判断是不是函数
 * @export
 * @param {unknown} patch
 * @return {*}
 */
export declare function isFunction(patch: unknown): boolean;
/**
 * 判断新旧依赖项是否相同 (比较地址)
 * @export
 * @param {oldDeps,deps} DependencyList
 * @return {*}
 */
export declare function depsSame(oldDeps: DependencyList, deps: DependencyList): boolean;
