import { useEffect } from 'react';
import useLatest from '../useLatest';

/**
 * 组件卸载时触发
 * @param fn
 */
export default function (fn: () => void) {
  const fnRef = useLatest(fn);
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      fnRef.current?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
