import { useMemo } from 'react';

/**
 *合并外部分默认页配置
 */
export function useDefaultPagination(outPagination?: Record<string, any> | false) {
  // 默认从第一页
  const defaultCurrent = useMemo(() => (outPagination && outPagination.defaultCurrent) || 1, []);
  // 默认一页10条
  const defaultPageSize = useMemo(() => (outPagination && outPagination.defaultPageSize) || 10, []);
  return {
    defaultCurrent,
    defaultPageSize,
  };
}
