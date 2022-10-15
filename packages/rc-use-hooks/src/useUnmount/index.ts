import { useEffect } from 'react';
import { useLatest } from '../useLatest';

/**
 * 组件卸载时触发
 * @param fn
 */
export default function (fn: () => void) {
  const fnRef = useLatest(fn);
  useEffect(() => {
    return () => {
      fnRef?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
