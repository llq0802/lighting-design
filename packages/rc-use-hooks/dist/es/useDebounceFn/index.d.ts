import debounce from 'lodash/debounce';
/**
 * 防抖函数
 * @template T
 * @param {T} fn
 * @param {number} [wait=300]
 * @param {Parameters<typeof debounce>[2]} [options={}]
 * @return {*}
 */
declare function useDebounceFn<T extends (...args: any[]) => any>(fn: T, wait?: number, options?: Parameters<typeof debounce>[2]): {
    run: any;
    cancel: any;
    flush: any;
};
export default useDebounceFn;
