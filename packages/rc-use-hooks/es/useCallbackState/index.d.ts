/**
 * useState的回调 setState第二个参数(函数)获取最新的state并执行一些操作
 * @export
 * @template T
 * @param {T} state
 * @return {*}  { [T, Function]}
 */
export default function useCallbackState<T>(state: T): [T, Function];
