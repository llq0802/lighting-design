/**
 * 用于给一个异步函数增加竞态锁，防止并发执行。
 */
export default function useLockAsyncFn<P extends any[] = any[], V extends any = any>(fn: (...args: P) => Promise<V>): (...args: P) => Promise<V | undefined>;
