import { usePagination } from 'ahooks';
import { useRef, useState } from 'react';

type useTablePaginationParams = {
  requestCacheKey?: string;
  hasDataSource: boolean;
  request: (...args: any[]) => Promise<any>;
  defaultCurrent?: number;
  defaultPageSize?: number;
  requestOptions?: any;
};

export const useTablePagination = ({
  requestCacheKey,
  hasDataSource,
  request,
  defaultCurrent,
  defaultPageSize,
  requestOptions,
}: useTablePaginationParams) => {
  const [innerPagination, setInnerPagination] = useState({
    current: defaultCurrent || 1,
    pageSize: defaultPageSize || 10,
  });

  const firstRequestRef = useRef(true);
  const { data, ...rest } = usePagination(
    async (...args) => {
      if (hasDataSource) return { list: [], total: 0 };
      const [paramsObj, requestType, ...restArgs] = args;
      const res = await request(paramsObj, requestType, ...restArgs);

      const list = res?.data || res?.list || res?.rows || res?.result || [];
      const total = res?.total ?? list.length;

      if (Array.isArray(list) && list.length) {
        return { list, total };
      }
      return { list: [], total: 0 };
    },
    {
      defaultCurrent,
      defaultPageSize,
      cacheKey: requestCacheKey,
      manual: true,
      ...requestOptions,
      onSuccess(...args) {
        if (firstRequestRef.current) {
          requestOptions?.requestFirstSuccess?.(...args);
        }
        firstRequestRef.current = false;
        requestOptions?.onSuccess?.(...args);
      },
    },
  );

  return { data: data || { list: [], total: 0 }, ...rest, innerPagination, setInnerPagination };
};
