import {
  useMemoizedFn,
  usePagination,
  useRafState,
  useUpdateEffect,
} from 'ahooks';
import type { FormInstance } from 'antd';
import { Card, ConfigProvider, Space, Spin, Table } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import type { Key } from 'antd/es/table/interface';
import type { ColumnGroupType, ColumnType } from 'antd/lib/table';
import classnames from 'classnames';
import type { Dispatch, FC, SetStateAction } from 'react';
import {
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import TableContext from '../TableContext';
import SearchForm, { LIGHTD_CARD } from './SearchFrom';
import './styles.less';
import ToolbarAction from './ToolBarAction';
import type { LTableProps, LTableRequestType } from './types';

export const LIGHTD_TABLE = 'lightd-table';

// 显示数据总量
const showTotal = (total: number, range: [value0: Key, value1: Key]) => (
  <span
    className={`${LIGHTD_TABLE}-pagination-show-total`}
  >{`当前显示${range[0]}-${range[1]}条，共 ${total} 条数据`}</span>
);

// 注意TdCell要提到Table作用域外声明
const TdCell = (props: any) => {
  // onMouseEnter, onMouseLeave在数据量多的时候，会严重阻塞表格单元格渲染，严重影响性能
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onMouseEnter, onMouseLeave, ...restProps } = props;
  return <td {...restProps} />;
};

const defaultArray: any[] = [];
/**
 * 表格组件
 * @param props
 * @returns
 */
const BaseTable: FC<Partial<LTableProps>> = (props) => {
  const {
    isSort = false,
    fillSpace = false,

    className,

    formRef,
    tableRef,

    fullScreenBgColor = '#fff',
    defaultRequestParams = {},
    requestOptions = {},
    request = async () => {},
    autoRequest = true,
    formInitialValues,
    queryFormProps,
    formCardProps,
    tableCardProps,

    tableExtra,
    tableRender,
    showToolbar = true,
    isReady = true,
    toolbarActionConfig: outToolbarActionConfig = {},
    toolbarRender,
    toolbarLeft,
    toolbarRight,

    loading: outLoading,
    contentRender,
    rowClassName,
    rootClassName,
    tableClassName,
    rootStyle,
    tableStyle,
    toolbarStyle,
    size: outSize,
    columns = defaultArray,
    components,
    style,

    formItems = defaultArray,

    pagination: outPagination,

    onChange,
    ...restProps
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const tablecardref = useRef<HTMLDivElement>(null);
  const _lformRef = useRef<Record<string, any>>({});
  const isInit = useRef<boolean>(false); // 是否第一次自动请求
  const [isFullScreen, setFullScreen] = useRafState(false);

  // 绑定SearchForm组件form实例在内部
  const queryFormRef = useRef<FormInstance | null>(null);
  // 绑定SearchForm组件form实例在外部
  const handleFormRef = useMemoizedFn((refValue: FormInstance) => {
    queryFormRef.current = refValue;
    if (formRef) {
      if (typeof formRef === 'function') {
        formRef(refValue);
      } else {
        formRef.current = refValue;
      }
    }
  });

  // 内置表格工具栏
  const toolbarActionConfig = useMemo(() => {
    if (!outToolbarActionConfig) {
      return false;
    }
    return {
      showReload: true,
      showColumnSetting: true,
      showDensity: true,
      showFullscreen: true,
      ...outToolbarActionConfig,
    };
  }, [outToolbarActionConfig]);

  // 根标签全屏样式
  const rootDefaultStyle = useMemo(
    () => (isFullScreen ? { background: fullScreenBgColor } : {}),
    [isFullScreen],
  );

  // 默认从第一页
  const outPaginationCurrent = useMemo(() => {
    return (
      (outPagination &&
        (outPagination.defaultCurrent || outPagination.current)) ||
      1
    );
  }, [
    typeof outPagination !== 'boolean' ? outPagination?.defaultCurrent : void 0,
    typeof outPagination !== 'boolean' ? outPagination?.current : void 0,
  ]);

  // 默认一页10条
  const outPaginationPageSize = useMemo(() => {
    return (
      (outPagination &&
        (outPagination.defaultPageSize || outPagination.pageSize)) ||
      10
    );
  }, [
    typeof outPagination !== 'boolean'
      ? outPagination?.defaultPageSize
      : void 0,
    typeof outPagination !== 'boolean' ? outPagination?.pageSize : void 0,
  ]);
  // 是否有查询框组
  const hasFromItems = useMemo(() => formItems?.length > 0, [formItems]);

  // useRequest请求
  const {
    // refresh,
    // params,
    data,
    run,
    loading: requestLoading,
    mutate: setTableData,
    pagination: paginationAction,
  } = usePagination(
    async (args, requestType: LTableRequestType) => {
      isInit.current = false;
      const res = await request({ ...args }, requestType);
      // 必须设置success为true data必须为数组长度大于0 才会有数据
      if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
        return { list: res.data, total: +res.total };
      }
      return { list: [], total: 0 };
    },
    {
      // refreshDeps: requestParams,
      defaultCurrent: outPaginationCurrent,
      defaultPageSize: outPaginationPageSize,
      ...(requestOptions as Record<string, any>),
      manual: true,
    },
  );

  // ==================== 表格大小以及列的处理-开始====================
  const [currentSize, setCurrentSize] = useRafState(() => outSize);
  // 存储外部columns 是否设置序号
  const outColumns = useMemo(() => {
    if (contentRender) return defaultArray;
    if (isSort) {
      const { current, pageSize } = paginationAction;
      const render = (_: any, __: any, index: number) =>
        (current - 1) * (pageSize || 0) + index + 1;
      const sortColumn = {
        title: '序号',
        align: 'center',
        dataIndex: '_SORT_NUM_COLUMN_',
        width: typeof isSort === 'boolean' ? 80 : isSort?.width,
        render,
      };
      return [sortColumn, ...columns];
    }
    return columns;
  }, [
    columns,
    typeof isSort === 'boolean' ? isSort : isSort?.width,
    paginationAction?.current,
    paginationAction?.pageSize,
    contentRender,
  ]);

  // 表格展示的列key
  const [columnKeys, setColumnKeys] = useRafState(() =>
    outColumns.map(
      (item: Record<string, any>, i) =>
        `${item?.dataIndex || ''}-${item?.key || ''}-${i}`,
    ),
  );

  useUpdateEffect(() => {
    setCurrentSize(outSize);
  }, [outSize]);

  const finalColumns = useMemo(() => {
    if (contentRender) return defaultArray;

    const tmpColumns: Record<string, any>[] = [];
    const sortColumnKeys = columnKeys.sort((a, b) => {
      return (
        parseInt(a?.split('-')?.at(-1) ?? '0') -
        parseInt(b?.split('-')?.at(-1) ?? '0')
      );
    });
    sortColumnKeys.forEach((key) => {
      const columnItem = outColumns.find(
        (item: Record<string, any>, i) =>
          `${item?.dataIndex || ''}-${item?.key || ''}-${i}` === key,
      );
      if (columnItem) {
        tmpColumns.push(columnItem);
      }
    });

    return tmpColumns;
  }, [columnKeys, outColumns, contentRender]);

  // useDeepCompareEffect(() => {
  //   const newKeys = outColumns.map(
  //     (item, i) => `${item?.dataIndex || ''}-${item.key || ''}-${i}`,
  //   );
  //   setColumnKeys(newKeys);
  //   console.log('useUpdateEffect');
  // }, [outColumns]);

  // ==================== 表格大小以及列的处理-结束====================

  // 内部loading
  const currentLoading = useMemo(() => {
    if (outLoading === void 0) {
      return { spinning: requestLoading };
    } else if (typeof outLoading === 'boolean') {
      return { spinning: outLoading };
    }
    return {
      spinning: requestLoading,
      ...outLoading,
    };
  }, [
    typeof outLoading === 'boolean' || outLoading === void 0
      ? outLoading
      : outLoading?.spinning,
    requestLoading,
  ]);

  // ==================== 表格方法开始====================
  // 重置所有表单数据，从第一页开始显示、查询数据
  const handleReset = useMemoizedFn(() => {
    if (hasFromItems) {
      const formValues = _lformRef.current;
      queryFormRef.current?.setFieldsValue({ ...formValues });
      run(
        {
          current: 1,
          pageSize: outPaginationPageSize,
          formValues,
        },
        'onReset',
      );
      return;
    }
    paginationAction.onChange(outPaginationCurrent, outPaginationPageSize);
  });
  // 根据条件，从第一页开始显示、查询数据
  const handleSearch = useMemoizedFn((type = 'onSearch') => {
    if (hasFromItems) {
      const formValues = queryFormRef.current?.getFieldsValue();
      run(
        {
          current: 1,
          pageSize: paginationAction?.pageSize || outPaginationPageSize,
          formValues: formValues,
        },
        type,
      );
      return;
    }
    paginationAction.changeCurrent(1);
  });
  // 根据当前条件和页码 查询数据
  const handleReload = useMemoizedFn(() => {
    if (hasFromItems) {
      const formValues = queryFormRef.current?.getFieldsValue();
      run(
        {
          current: paginationAction?.current,
          pageSize: paginationAction?.pageSize,
          formValues: formValues,
        },
        'onReload',
      );
      return;
    }
    paginationAction.changeCurrent(paginationAction?.current);
  });
  // 表单查询 保留表单参数 保留pageSize  重置page为 1
  const handleSearchFormFinish = useMemoizedFn(
    (formValues: Record<string, any>) => {
      const defaultPar = isInit.current ? { ...defaultRequestParams } : {};
      run(
        {
          current: 1,
          pageSize: paginationAction?.pageSize || outPaginationPageSize,
          formValues,
          ...defaultPar,
        },
        isInit.current ? 'onInit' : 'onSearch',
      );
    },
  );
  // 默认 onReset 中已经重置表单，这里只从第一页开始显示、查询数据请求
  const handleSearchFormReset = useMemoizedFn(() => handleReset());
  // 表格分页页码丶排序等改变时触发
  const handleTableChange = useMemoizedFn(
    (pagination, filters, sorter, extra) => {
      onChange?.(pagination, filters, sorter, extra);
      if (hasFromItems) {
        const formValues = queryFormRef.current?.getFieldsValue();
        run(
          {
            current: pagination.current || 1,
            pageSize: pagination.pageSize,
            formValues: formValues,
          },
          'onReload',
        );
        return;
      }
      paginationAction.onChange(pagination?.current || 1, pagination?.pageSize);
    },
  );
  // ==================== 表格方法结束====================

  // ==================== table副作用开始====================
  // 处理是否沾满视口的剩余空间
  useLayoutEffect(() => {
    if (!tablecardref.current) return;
    if (fillSpace === 0 || fillSpace === true) {
      const _minHeght =
        document.documentElement.clientHeight -
        tablecardref.current!.getBoundingClientRect().top;

      tablecardref.current!.style.minHeight = `${_minHeght}px`;
    } else if (
      typeof fillSpace === 'number' &&
      Math.sign(fillSpace as number) === 1
    ) {
      const _minHeght =
        document.documentElement.clientHeight -
        tablecardref.current!.getBoundingClientRect().top;

      tablecardref.current!.style.minHeight = `${_minHeght - fillSpace}px`;
    } else {
      tablecardref.current!.style.minHeight = `auto`;
    }
  }, [fillSpace, tablecardref.current]);

  // 初始化请求
  useEffect(() => {
    if (autoRequest && isReady) {
      if (hasFromItems) {
        Promise.resolve().then(() => {
          isInit.current = true;
          queryFormRef.current?.submit();
        });
        return;
      }
      paginationAction.changeCurrent(1);
    }
  }, [autoRequest, isReady]);
  // ==================== table副作用结束====================

  // ==================== 暴露外部方法开始====================
  useImperativeHandle(tableRef, () => ({
    // onReload: refresh,
    /** 根据条件，当前页、刷新数据 */
    onReload: handleReload,
    /** 重置数据，从第一页开始显示、查询数据 */
    onReset: handleReset,
    /** 根据条件，从第一页开始显示、查询数据 */
    onSearch: handleSearch,
    /** 表格根标签 div */
    rootRef: rootRef,
    /** 表格数据 */
    tableData:
      data?.list || (restProps?.dataSource as Record<string, any>[]) || [],
    /** 直接修改当前表格的数据,必须是 { total , data } 的形式 */
    setTableData: setTableData as Dispatch<
      SetStateAction<{ list: Record<string, any>[]; total: number }>
    >,
    /** 页码信息及操作 */
    pagination: paginationAction,
  }));
  // ==================== 暴露外部方法结束===================

  // ==================== dom 区域开始 ====================
  const ToolbarActionDom = useMemo(() => {
    if (toolbarActionConfig === false) {
      return null;
    }
    return (
      <ToolbarAction
        {...toolbarActionConfig}
        showColumnSetting={
          contentRender ? false : toolbarActionConfig?.showColumnSetting
        }
        showDensity={contentRender ? false : toolbarActionConfig?.showDensity}
        className={`${LIGHTD_TABLE}-toolbar-action ${toolbarActionConfig.className}`}
      />
    );
  }, [toolbarActionConfig, contentRender]);

  const toolbarDom = useMemo(() => {
    return !showToolbar ||
      (toolbarActionConfig === false &&
        !toolbarLeft &&
        !toolbarRight) ? null : (
      <div className={`${LIGHTD_TABLE}-toolbar`} style={toolbarStyle}>
        <div className={`${LIGHTD_TABLE}-toolbar-content-left`}>
          {<Space>{toolbarLeft}</Space>}
        </div>
        <div className={`${LIGHTD_TABLE}-toolbar-content-right`}>
          <Space>
            {toolbarRight}
            {ToolbarActionDom}
          </Space>
        </div>
      </div>
    );
  }, [
    showToolbar,
    toolbarActionConfig,
    toolbarLeft,
    toolbarRight,
    toolbarStyle,
  ]);

  const searchFormDom = useMemo(() => {
    return (
      <SearchForm
        isReady={isReady}
        loading={currentLoading.spinning}
        ref={handleFormRef}
        cardProps={formCardProps}
        onFinish={handleSearchFormFinish}
        onReset={handleSearchFormReset}
        formItems={formItems}
        initialValues={formInitialValues}
        _lformRef={_lformRef}
        {...queryFormProps}
      />
    );
  }, [
    isReady,
    currentLoading.spinning,
    formCardProps,
    formInitialValues,
    formItems,
    queryFormProps,
  ]);

  const tableDom = (
    <Spin {...currentLoading}>
      <Card
        ref={tablecardref}
        bordered={false}
        {...tableCardProps}
        style={{
          ...tableCardProps?.style,
        }}
        className={classnames(`${LIGHTD_CARD}`, tableCardProps?.className)}
      >
        {toolbarRender ? toolbarRender(ToolbarActionDom) : toolbarDom}
        <Table
          components={{
            table: contentRender
              ? () => contentRender?.(data?.list ?? [])
              : void 0,
            body: { cell: TdCell },
            ...components,
          }}
          className={classnames(tableClassName, className)}
          rowClassName={classnames(
            `${LIGHTD_TABLE}-row`,
            rowClassName as string | undefined,
          )}
          style={{ ...tableStyle, ...style }}
          size={currentSize}
          columns={finalColumns as (ColumnGroupType<any> | ColumnType<any>)[]}
          dataSource={data?.list || []}
          onChange={handleTableChange}
          pagination={
            outPagination !== false
              ? {
                  showTotal,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  current: paginationAction?.current,
                  pageSize: paginationAction?.pageSize,
                  total: paginationAction?.total,
                  // onChange: paginationAction.onChange,
                  // onShowSizeChange: paginationAction.onChange,
                  ...outPagination,
                }
              : false
          }
          {...restProps}
        />
      </Card>
    </Spin>
  );

  const finallyDom = (
    <div
      ref={rootRef}
      style={{ ...rootDefaultStyle, ...rootStyle }}
      className={classnames(LIGHTD_TABLE, rootClassName, {
        [`${LIGHTD_TABLE}-full-screen`]: isFullScreen,
      })}
    >
      {searchFormDom}
      {tableExtra}
      {tableDom}
    </div>
  );
  // ==================== dom 区域结束 ====================

  // 根节点注册
  const returnDom = (
    <TableContext.Provider
      value={{
        // reload: refresh,
        reload: handleReload,
        size: currentSize,
        setSize: setCurrentSize,
        columns: outColumns,
        columnKeys: columnKeys,
        setColumnKeys: setColumnKeys,
        rootRef: rootRef,
        setFullScreen,
      }}
    >
      {tableRender
        ? tableRender(
            {
              searchFormDom: searchFormDom,
              toolbarDom: toolbarDom,
              tableExtraDom: tableExtra,
              tableDom: tableDom,
              finallyDom: finallyDom,
            },
            props,
          )
        : finallyDom}
    </TableContext.Provider>
  );

  if (
    (typeof toolbarActionConfig !== 'boolean' &&
      !toolbarActionConfig?.showFullscreen) ||
    toolbarActionConfig === false
  ) {
    return <ConfigProvider locale={zhCN}>{returnDom}</ConfigProvider>;
  }
  return (
    // 处理表格在全屏状态下 ant一些弹出层组件(Modal)无法显示问题
    // 全屏本质上是把你的表格区域 fixed 了，所以你需要把 Modal等组件 的 getPopupContainer 设置为了 table 的区域
    <ConfigProvider
      locale={zhCN}
      getPopupContainer={() => rootRef?.current || document.body}
    >
      {returnDom}
    </ConfigProvider>
  );
};

export default BaseTable;
