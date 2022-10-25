/**
 * 持久函数,地址永远不会改变
 * @param fn
 * @returns
 */
declare function usePersistFn<T extends (...args: any[]) => any>(fn: T): T extends infer R ? R : T;
export default usePersistFn;
