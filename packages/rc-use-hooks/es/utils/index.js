/**
 * 判断是不是函数
 * @export
 * @param {unknown} patch
 * @return {*}
 */
export function isFunction(patch) {
  return typeof patch === 'function';
}
