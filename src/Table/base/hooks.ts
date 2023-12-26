import { useRafState, useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { getTableColumnsKey, isFunction } from 'lighting-design/_utils';
import { emptyArray } from 'lighting-design/constants';
import { useLayoutEffect, useMemo } from 'react';

/**
 * 填充视口剩余空间
 * @param {*} {
 *   tablecardref,
 *   fillSpace,
 * }
 */
export function useFillSpace({ tablecardref, fillSpace }) {
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
 * @param outSize
 * @returns
 */
export function useTableSize(outSize) {
  const [currentSize, setCurrentSize] = useRafState<SizeType | 'default'>(() => outSize);
  useUpdateLayoutEffect(() => setCurrentSize(outSize), [outSize]);
  return [currentSize, setCurrentSize];
}

/**
 * 设置表格列
 * @param outSize
 * @returns
 */
export function useTableColumn({
  contentRender,
  isSort,
  paginationAction,
  columns,
  toolbarActionConfig,
}) {
  const outColumns = useMemo(() => {
    if (contentRender) return emptyArray;
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
  }, [
    columns,
    typeof isSort === 'boolean' && isSort,
    typeof isSort !== 'boolean' && isSort?.width,
    typeof isSort !== 'boolean' && isSort?.render,
    paginationAction?.current,
    paginationAction?.pageSize,
  ]);

  // 表格展示的列key
  const [columnKeys, setColumnKeys] = useRafState(() => {
    if (toolbarActionConfig === false) {
      return emptyArray;
    }
    if (!toolbarActionConfig?.showColumnSetting) {
      return emptyArray;
    }
    return outColumns.map(getTableColumnsKey);
  });

  useUpdateEffect(() => {
    if (toolbarActionConfig === false) {
      return;
    }
    if (!toolbarActionConfig?.showColumnSetting) {
      return;
    }

    const newKeys = outColumns.map(getTableColumnsKey);
    setColumnKeys(newKeys);
  }, [outColumns, toolbarActionConfig]);

  const finalColumns = useMemo(() => {
    if (contentRender) return emptyArray;

    if (toolbarActionConfig === false) {
      return outColumns;
    }
    if (!toolbarActionConfig?.showColumnSetting) {
      return outColumns;
    }

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
  }, [outColumns, columnKeys?.join(''), toolbarActionConfig]);

  return {
    finalColumns,
    columnKeys,
    setColumnKeys,
    outColumns,
  };
}

/**
 *
 *合并外部分页配置
 * @param {*} outPagination
 * @return {*}
 */
export function useMergePagination(outPagination) {
  // 默认从第一页
  const outPaginationCurrent = useMemo(
    () => (outPagination && (outPagination.defaultCurrent || outPagination.current)) || 1,
    [
      typeof outPagination !== 'boolean' ? outPagination?.defaultCurrent : void 0,
      typeof outPagination !== 'boolean' ? outPagination?.current : void 0,
    ],
  );

  // 默认一页10条
  const outPaginationPageSize = useMemo(
    () => (outPagination && (outPagination.defaultPageSize || outPagination.pageSize)) || 10,
    [
      typeof outPagination !== 'boolean' ? outPagination?.defaultPageSize : void 0,
      typeof outPagination !== 'boolean' ? outPagination?.pageSize : void 0,
    ],
  );

  return {
    outPaginationCurrent,
    outPaginationPageSize,
  };
}
/**
 * 合并请求loading和外部loading
 * @param requestLoading
 * @param outLoading
 * @returns
 */
export function useMergeLoading(requestLoading, outLoading) {
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
 * 合并toolbar的配置
 * @param requestLoading
 * @param outLoading
 * @returns
 */
export function useMergeToolbarActionConfig(actionConfig) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { split, ...outToolbarActionConfig } = actionConfig;
  return useMemo(() => {
    if (!actionConfig) {
      return false;
    }
    return {
      showReload: true,
      showColumnSetting: true,
      showDensity: true,
      showFullscreen: true,
      ...actionConfig,
    };
    // JSON序列化时 当含有 undefined , 函数 日期对象会有问题 这儿根据实际情况可以使用
  }, [JSON.stringify(outToolbarActionConfig)]);
}
