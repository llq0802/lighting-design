import { useMemo } from 'react';

/**
 *合并外部分默认页配置
 */
export function useDefaultPagination(outPagination?: Record<string, any> | false) {
  // 默认从第一页
  const defaultCurrent: number = useMemo(() => {
    if (!outPagination) {
      return 1;
    }
    return outPagination.current || outPagination.defaultCurrent;
  }, []);
  // 默认一页10条
  const defaultPageSize: number = useMemo(() => {
    if (!outPagination) {
      return 10;
    }
    return outPagination.pageSize || outPagination.defaultPageSize;
  }, []);
  return {
    defaultCurrent,
    defaultPageSize,
  };
}
