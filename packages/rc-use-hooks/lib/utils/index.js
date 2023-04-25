'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.depsSame = depsSame;
exports.isFunction = isFunction;

/**
 * 判断是不是函数
 * @export
 * @param {unknown} patch
 * @return {*}
 */
function isFunction(patch) {
  return typeof patch === 'function';
}
/**
 * 判断新旧依赖项是否相同 (比较地址)
 * @export
 * @param {oldDeps,deps} DependencyList
 * @return {*}
 */

function depsSame(oldDeps, deps) {
  if (oldDeps === deps) return true;

  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }

  return true;
}
