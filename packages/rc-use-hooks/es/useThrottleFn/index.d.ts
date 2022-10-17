import throttle from 'lodash/throttle';
/**
 * 节流函数
 * @param fn
 * @param wait
 * @param options
 * @returns
 */
declare function useThrottleFn<T extends (...args: any[]) => any>(fn: T, wait?: number, options?: Parameters<typeof throttle>[2]): {
    run: any;
    cancel: any;
    flush: any;
};
export default useThrottleFn;
