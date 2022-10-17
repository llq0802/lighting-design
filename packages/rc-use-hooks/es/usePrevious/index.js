import { useEffect, useRef } from 'react';
/**
 * 用于获取状态上一次的值
 * @param value
 * @returns
 */

export default function usePrevious(value) {
  var ref = useRef(null);
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}
