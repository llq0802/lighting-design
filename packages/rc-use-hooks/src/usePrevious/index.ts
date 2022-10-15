import { useEffect, useRef } from 'react';

/**
 * 用于获取上一次的值
 * @param value
 * @returns
 */
export default function usePrevious<T>(value: T): T {
  const ref = useRef<unknown | null>(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current as T;
}
