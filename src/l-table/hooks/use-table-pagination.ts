import { usePagination } from 'ahooks';
import type { PaginationOptions } from 'ahooks/lib/usePagination/types';
import { useRef, useState } from 'react';

type useTablePaginationParams = {
  request: (...args: any[]) => Promise<any>;
  defaultCurrent: number;
  defaultPageSize: number;
  requestOptions?: PaginationOptions<any, any> & {
    onInitRequest?: PaginationOptions<any, any>['onFinally'];
  };
};

export const useTablePagination = ({
  request,
  defaultCurrent,
  defaultPageSize,
  requestOptions,
}: useTablePaginationParams) => {
  const [innerPagination, setInnerPagination] = useState({ current: defaultCurrent, pageSize: defaultPageSize });
  const [initLoading, setInitLoading] = useState(false);
  const [noInitLoading, setNoInitLoading] = useState(false);
  const firstRequestRef = useRef(true);

  const { data, ...rest } = usePagination(
    async (...args) => {
      if (firstRequestRef) {
        setInitLoading(true);
      } else {
        setNoInitLoading(true);
      }
      const [paramsObj, requestType, ...restArgs] = args;
      const res = await request?.(paramsObj, requestType, ...restArgs);
      const list = res?.data || res?.list || res?.rows || res?.result || [];
      const total = res?.total ?? list.length;
      if (Array.isArray(list) && list.length) {
        return { list, total };
      }
      return { list: [], total: 0 };
    },
    {
      ...requestOptions,
      manual: true,
      defaultCurrent,
      defaultPageSize,
      onFinally(...args) {
        if (firstRequestRef.current) {
          firstRequestRef.current = false;
          requestOptions?.onInitRequest?.(...args);
        }
        setInitLoading(false);
        setNoInitLoading(false);
        requestOptions?.onFinally?.(...args);
      },
    },
  );

  return {
    data: data || { list: [], total: 0 },
    ...rest,
    initLoading,
    noInitLoading,
    innerPagination,
    setInnerPagination,
  };
};
