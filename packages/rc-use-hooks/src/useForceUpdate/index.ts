import { useCallback, useState } from 'react';

/**
 * 强制组件更新一次
 * @returns
 */
 const useUpdate = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};
export default useUpdate