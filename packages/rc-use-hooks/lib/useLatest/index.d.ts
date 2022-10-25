/// <reference types="react" />
/**
 * 返回当前最新值的状态
 * @param value
 * @returns
 */
export default function useLatest<T = any>(value: T): import("react").MutableRefObject<T>;
