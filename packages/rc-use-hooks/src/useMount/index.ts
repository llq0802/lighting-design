import { useEffect } from 'react';

/**
 * 组件第一次挂在完成触发
 * @param fn
 */
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMount;
