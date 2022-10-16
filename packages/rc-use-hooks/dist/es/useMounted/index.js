import { useEffect } from 'react';
/**
 * 组件第一次挂在完成触发
 * @param fn
 */

var useMount = function useMount(fn) {
  useEffect(function () {
    fn === null || fn === void 0 ? void 0 : fn(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMount;
