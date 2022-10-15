import { useCallback, useState } from 'react';

/**
 * 强制组件更新一次
 * @returns
 */
export const useUpdate = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};
