import { useRef } from 'react';
/**
 * 返回当前最新值的 Hook，可以避免闭包问题。
 * @param value
 * @returns
 */

export default function useLatest(value) {
  var ref = useRef(value);
  ref.current = value;
  return ref.current;
}
