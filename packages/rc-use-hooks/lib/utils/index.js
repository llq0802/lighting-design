'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
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
