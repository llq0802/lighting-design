/**
 * 判断是不是函数
 * @export
 * @param {unknown} patch
 * @return {*}
 */
export function isFunction(patch: unknown) {
  return typeof patch === 'function';
}
