import { usePagination, useRafState, useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { getTableColumnsKey, isFunction } from 'lighting-design/_utils';
import { omit } from 'lodash-es';
import { useLayoutEffect, useMemo, useRef } from 'react';
import type { LTableProps } from '../interface';

/**
 * 填充视口剩余空间
 */
export function useFillSpace({
  tablecardref,
  fillSpace,
}: {
  tablecardref: any;
  fillSpace: boolean | number;
}) {
  useLayoutEffect(() => {
    if (!tablecardref.current) return;
    const cardDom = tablecardref.current;
    const tableContentDom = cardDom?.querySelector('div.ant-table');
    if (!tableContentDom) return;
    if (fillSpace === true || typeof fillSpace === 'number') {
      const cardBodyDom = cardDom.querySelector('div.ant-card-body');
      const paginationDom = cardDom.querySelector('ul.ant-pagination');
      const fillHeight = fillSpace === true ? 0 : fillSpace;

      const { paddingBottom: pb, marginBottom: mb } = getComputedStyle(cardBodyDom);
      const cardBodyDomHeight = parseFloat(pb) + parseFloat(mb);

      let paginationDomHeight = 0;

      if (paginationDom) {
        const { height, marginTop, marginBottom } = getComputedStyle(paginationDom);
        paginationDomHeight = parseFloat(height) + parseFloat(marginTop) + parseFloat(marginBottom);
      }

      const htmlDomHeight = document.documentElement.clientHeight;

      const minHeght =
        htmlDomHeight -
        paginationDomHeight -
        tableContentDom!.getBoundingClientRect().top -
        cardBodyDomHeight -
        fillHeight;

      tableContentDom!.style.minHeight = `${Math.floor(minHeght)}px`;
    } else {
      tableContentDom.style.minHeight = `auto`;
    }
  }, [fillSpace]);
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
  const outColumns = useMemo(() => {
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
    if (toolbarActionConfig === false) return [];
    if (!toolbarActionConfig?.showColumnSetting) return [];
    return outColumns.map(getTableColumnsKey);
  });

  useUpdateEffect(() => {
    const newKeys = outColumns.map(getTableColumnsKey);
    setColumnKeys(newKeys);
  }, [outColumns]);

  const finalColumns = useMemo(() => {
    if (contentRender) return [];
    if (toolbarActionConfig === false || !toolbarActionConfig?.showColumnSetting) return outColumns;
    const tmpColumns: Record<string, any>[] = [];

    const sortColumnKeys = columnKeys.toSorted(
      (a: string, b: string) =>
        Number(a?.split('-')?.at(-1) ?? '0') - Number(b?.split('-')?.at(-1) ?? '0'),
    );

    sortColumnKeys.forEach((key: string) => {
      const columnItem = outColumns.find(
        (item: Record<string, any>, i: number) => getTableColumnsKey(item, i) === key,
      );
      if (columnItem) {
        tmpColumns.push(columnItem);
      }
    });
    return tmpColumns;
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
  dataSource,
  request,
  requestOptions,
  requestBefore,
  requestSuccess,
  requestFinally,
  outDefaultCurrent,
  outDefaultPageSize,
}: {
  dataSource: any;
  request: any;
  requestOptions: LTableProps['requestOptions'];
  requestBefore: LTableProps['requestBefore'];
  requestSuccess: LTableProps['requestSuccess'];
  requestFinally: LTableProps['requestFinally'];
  outDefaultCurrent: number;
  outDefaultPageSize: number;
}) {
  const isInitedRef = useRef<boolean>(false);
  const { data, ...res } = usePagination(
    async (...args) => {
      isInitedRef.current = false;
      if (dataSource) return { list: [], total: 0 };
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
      ...requestOptions,
      manual: true,
      onSuccess(...args) {
        requestSuccess?.(...args);
        requestOptions?.onSuccess?.(...args);
      },
      onFinally(...args) {
        requestFinally?.(...args);
        requestOptions?.onFinally?.(...args);
      },
    },
  );
  return {
    /** 是否第一次自动请求 */
    isInitedRef,
    data: !data ? { list: [], total: 0 } : data,
    ...res,
  };
}
