/**
 * 用于给一个异步函数节流阀，防止并发执行。
 */
export default function useLockAsyncFn<P extends any[] = any[], V extends any = any>(fn: (...args: P) => Promise<V>): {
    loading: boolean;
    run: (...args: P) => Promise<V | undefined>;
};
