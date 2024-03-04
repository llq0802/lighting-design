import { usePagination, useRafState, useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { getTableColumnsKey, isFunction } from 'lighting-design/_utils';
import { omit } from 'lodash-es';
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import type { LTableProps } from '../interface';

/**
 * 填充视口剩余空间
 */
export function useFillSpace({
  tablecardref,
  fillSpace,
  tableData,
}: {
  tablecardref: any;
  fillSpace: boolean | number;
  tableData: any[];
}) {
  useLayoutEffect(() => {
    if (fillSpace === void 0) return;
    if (!tablecardref.current) return;
    const cardDom = tablecardref.current;
    const antdTableDom = cardDom?.querySelector('div.ant-table');
    if (!antdTableDom) return;

    if (fillSpace !== true && typeof fillSpace !== 'number') {
      antdTableDom.style.height = `auto`;
      return;
    }

    let minHeight = 300;
    const fillHeight = fillSpace === true ? 1 : fillSpace + 1;
    const { bottom: antdTableBottom, height: antdTableHeight } =
      antdTableDom!.getBoundingClientRect();
    const { bottom: cardBottom } = cardDom!.getBoundingClientRect();
    const antdTableMarginBottom = window.innerHeight - antdTableBottom;

    if (antdTableMarginBottom <= 0) return;
    if (antdTableMarginBottom - fillHeight > 0) {
      minHeight =
        antdTableMarginBottom + antdTableHeight - fillHeight - (cardBottom - antdTableBottom);
    } else {
      minHeight = antdTableMarginBottom + antdTableHeight - (cardBottom - antdTableBottom);
    }
    antdTableDom!.style.height = `${Math.floor(minHeight)}px`;
    antdTableDom!.style.overflow = 'auto';
  }, [fillSpace, tableData?.length]);
}
/**
 * 设置表格大小
 */
export function useTableSize(
  outSize: SizeType,
): [SizeType, React.Dispatch<React.SetStateAction<SizeType>>] {
  const [currentSize, setCurrentSize] = useRafState<SizeType>(() => outSize);
  useUpdateLayoutEffect(() => setCurrentSize(outSize), [outSize]);
  return [currentSize, setCurrentSize];
}

/**
 * 设置表格列
 */
export function useTableColumn({
  contentRender,
  isSort,
  paginationAction,
  columns,
  toolbarActionConfig,
}: Record<string, any>) {
  const outColumns = useMemo<Record<string, any>[]>(() => {
    if (contentRender) return [];
    if (isSort) {
      const { current, pageSize } = paginationAction;
      const render = (_: any, __: any, index: number) => {
        const val = (current - 1) * (pageSize || 0) + index + 1;
        return isFunction(isSort?.render) ? isSort?.render?.(val) : val;
      };
      const sortColumn = {
        title: '序号',
        align: 'center',
        dataIndex: '_SERIAL_NUMNER_COLUMN_',
        width: typeof isSort === 'boolean' ? 80 : isSort?.width || 80,
        render,
      };
      return [sortColumn, ...columns];
    }
    return columns;
  }, [columns, paginationAction?.current, paginationAction?.pageSize]);

  // 表格展示的列key
  const [columnKeys, setColumnKeys] = useRafState(() => {
    if (contentRender || toolbarActionConfig === false || !toolbarActionConfig?.showColumnSetting) {
      return [];
    }
    return outColumns.map(getTableColumnsKey);
  });

  useUpdateEffect(() => {
    if (contentRender) return;
    setColumnKeys(outColumns.map(getTableColumnsKey));
  }, [outColumns]);

  const finalColumns = useMemo(() => {
    if (contentRender) return [];
    if (toolbarActionConfig === false || !toolbarActionConfig?.showColumnSetting) return outColumns;
    const newColumns = outColumns.filter((item: any, i) =>
      columnKeys?.includes(getTableColumnsKey(item, i)),
    );
    return newColumns;
  }, [
    columnKeys.join(''),
    typeof toolbarActionConfig === 'boolean' && toolbarActionConfig,
    typeof toolbarActionConfig !== 'boolean' && toolbarActionConfig?.showColumnSetting,
  ]);

  return {
    finalColumns,
    columnKeys,
    setColumnKeys,
    outColumns,
  };
}

/**
 *合并外部分默认页配置
 */
export function useMergePagination(outPagination?: Record<string, any> | false) {
  // 默认从第一页
  const outDefaultCurrent = useMemo(() => (outPagination && outPagination.defaultCurrent) || 1, []);
  // 默认一页10条
  const outDefaultPageSize = useMemo(
    () => (outPagination && outPagination.defaultPageSize) || 10,
    [],
  );
  return {
    outDefaultCurrent,
    outDefaultPageSize,
  };
}
/**
 * 合并请求loading和外部loading配置
 */
export function useMergeLoading(
  requestLoading: boolean,
  outLoading: Record<string, any> | undefined | boolean,
) {
  return useMemo(() => {
    if (outLoading === void 0) {
      return { spinning: requestLoading };
    }
    if (typeof outLoading === 'boolean') {
      return { spinning: outLoading };
    }
    return {
      spinning: requestLoading,
      ...outLoading,
    };
  }, [typeof outLoading === 'boolean' ? outLoading : outLoading?.spinning, requestLoading]);
}
/**
 * 合并 toolbar action 的配置
 */
export function useMergeToolbarActionConfig(
  actionConfig: Record<string, any> | false,
): false | Record<string, any> {
  const outActionConfig = typeof actionConfig === 'boolean' ? false : omit(actionConfig, ['split']);
  return useMemo(() => {
    if (!actionConfig) return false;
    return {
      showReload: true,
      showColumnSetting: true,
      showDensity: true,
      showFullscreen: true,
      ...actionConfig,
    };
    // JSON序列化时 当含有 undefined , 函数 日期对象会有问题 这儿根据实际情况可以使用
  }, [JSON.stringify(outActionConfig)]);
}
/**
 * 使用表格请求的自定义 hook
 */
export function useTableRequest({
  hasDataSource,
  request,
  requestOptions,
  requestCacheKey,
  requestBefore,
  requestSuccess,
  requestFirstSuccess,
  requestFinally,
  outDefaultCurrent,
  outDefaultPageSize,
}: {
  hasDataSource: boolean;
  request: any;
  requestCacheKey?: string;
  requestOptions: LTableProps['requestOptions'];
  requestBefore: LTableProps['requestBefore'];
  requestSuccess: LTableProps['requestSuccess'];
  requestFirstSuccess: LTableProps['requestFirstSuccess'];
  requestFinally: LTableProps['requestFinally'];
  outDefaultCurrent: number;
  outDefaultPageSize: number;
}) {
  /** 是否为第一次请求完成 */
  const firstRequestRef = useRef(true);
  const { data, ...res } = usePagination(
    async (...args) => {
      if (hasDataSource) return { list: [], total: 0 };
      const [paramsObj, requestType, ...restArgs] = args;
      const res = await request(
        {
          ...paramsObj,
          ...(requestBefore ? requestBefore?.(...args) : {}),
        },
        requestType,
        ...restArgs,
      );
      if (res?.success && Array.isArray(res.data) && res.data.length) {
        return { list: res.data, total: +res.total };
      }
      return { list: [], total: 0 };
    },
    {
      defaultCurrent: outDefaultCurrent,
      defaultPageSize: outDefaultPageSize,
      cacheKey: requestCacheKey,
      ...requestOptions,
      manual: true,
      onSuccess(...args) {
        if (firstRequestRef.current) {
          requestFirstSuccess?.(...args);
        }
        firstRequestRef.current = false;
        requestSuccess?.(...args);
        requestOptions?.onSuccess?.(...args);
      },
      onFinally(...args) {
        requestFinally?.(...args);
        requestOptions?.onFinally?.(...args);
      },
    },
  );

  return { data: !data ? { list: [], total: 0 } : data, ...res };
}
/**
 * 表格初始化
 */
export function useInitTable({
  autoRequest,
  isReady,
  hasDataSource,
  outDefaultCurrent,
  outDefaultPageSize,
  hasFromItems,
  outRequestCacheKey,
  requestCacheParams,
  requestOptions,
  defaultRequestParams,
  run,
  queryFormRef,
}: {
  autoRequest: boolean;
  isReady: boolean;
  outDefaultCurrent: number;
  hasDataSource?: boolean;
  outDefaultPageSize: number;
  hasFromItems: boolean;
  outRequestCacheKey: string | undefined;
  requestCacheParams: any[];
  requestOptions: LTableProps['requestOptions'];
  defaultRequestParams: any;
  run: any;
  queryFormRef: any;
}) {
  useEffect(() => {
    if (!autoRequest || !isReady || hasDataSource) return;
    let formValues;
    let current = outDefaultCurrent;
    let pageSize = outDefaultPageSize;
    if (hasFromItems) {
      formValues = queryFormRef.current?.getFieldsValue();
    }
    const requestCacheKey = outRequestCacheKey || requestOptions?.cacheKey;
    // 缓存功能
    if (requestCacheKey && requestCacheParams[0]) {
      const {
        current: initCurrent,
        pageSize: initPageSize,
        formValues: initFormValues,
      } = requestCacheParams[0];
      current = initCurrent;
      pageSize = initPageSize;
      if (hasFromItems && initFormValues) {
        formValues = initFormValues;
        queryFormRef.current?.setFieldsValue({ ...initFormValues });
      }
    }
    run({ ...defaultRequestParams, current, pageSize, formValues }, 'onInit');
  }, [isReady]);
}
