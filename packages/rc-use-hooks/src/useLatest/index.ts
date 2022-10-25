import { useRef } from 'react';
/**
 * 返回当前最新值的状态
 * @param value
 * @returns
 */
export default function useLatest<T = any>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}
