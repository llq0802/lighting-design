import { useLatest, usePagination } from 'ahooks';
import type { PaginationOptions } from 'ahooks/lib/usePagination/types';
import { useState } from 'react';

type useTablePaginationParams = {
  request?: (...args: any[]) => Promise<any>;
  requestOptions: PaginationOptions<any, any> & {
    onInitRequest?: PaginationOptions<any, any>['onFinally'];
  };
  requestAuto?: boolean;
  requestOnce?: boolean;
  requestExtraParams?: Record<string, any>;
};

export const useTablePagination = ({
  request,
  requestAuto = true,
  requestOnce,
  requestOptions,
  requestExtraParams = {},
}: useTablePaginationParams) => {
  const [innerPagination, setInnerPagination] = useState(() => ({
    current: requestOptions.defaultCurrent!,
    pageSize: requestOptions.defaultPageSize!,
  }));
  const [initLoading, setInitLoading] = useState(() => requestAuto);
  const [noInitLoading, setNoInitLoading] = useState(false);
  const [firstRequest, setFirstRequest] = useState(true);
  const firstRequestRef = useLatest(firstRequest);

  const { data, ...rest } = usePagination(
    async (...args) => {
      if (firstRequestRef.current) {
        setInitLoading(true);
      } else {
        setNoInitLoading(true);
      }
      const [paramsObj, requestType, ...restArgs] = args;
      const res = await request?.({ ...requestExtraParams, ...paramsObj }, requestType, ...restArgs);
      const list = res?.list || res?.data || res?.rows || res?.result || [];
      const total = res?.total ?? list.length;
      if (Array.isArray(list) && list.length) {
        return { list, total };
      }
      return { list: [], total: 0 };
    },
    {
      loadingDelay: 20,
      ...requestOptions,
      manual: true,
      onFinally(...args) {
        if (firstRequestRef.current) {
          setInitLoading(false);
          setFirstRequest(false);
          requestOptions?.onInitRequest?.(...args);
        } else {
          setNoInitLoading(false);
        }
        requestOptions?.onFinally?.(...args);
      },
    },
  );
  const canRun = !requestOnce ? true : firstRequestRef.current!;

  return {
    ...rest,
    data: data || { list: [], total: 0 },
    initLoading,
    noInitLoading,
    innerPagination,
    setInnerPagination,
    canRun,
  };
};
