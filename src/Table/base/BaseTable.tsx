import { useFullscreen, useMemoizedFn } from 'ahooks';
import type { FormInstance } from 'antd';
import { Card, ConfigProvider, Space, Spin, Table } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import zhCN from 'antd/es/locale/zh_CN';
import classnames from 'classnames';
import { isFunction } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { Dispatch, FC, SetStateAction } from 'react';
import { useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import TableContext from '../TableContext';
import type { LTableProps } from '../interface';
import SearchForm, { LIGHTD_CARD } from './SearchFrom';
import ToolbarAction, { TdCell, showTotal } from './ToolBarAction';
import {
  useFillSpace,
  useMergeLoading,
  useMergePagination,
  useMergeToolbarActionConfig,
  useTableColumn,
  useTableRequest,
  useTableSize,
} from './hooks';
import './styles.less';

export const LIGHTD_TABLE = 'lightd-table';

const spinStyle = { maxHeight: '86%' };

const BaseTable: FC<Partial<LTableProps>> = (props) => {
  const {
    isReady = true,
    isSort = false,
    fillSpace = false,
    showStripe = false,
    showHover = false,
    showToolbar = true,
    autoRequest = true,

    formRef,
    tableRef,

    defaultRequestParams = emptyObject,
    requestOptions = emptyObject,
    request = async () => {},
    requestCacheKey: outRequestCacheKey,
    requestBefore,
    requestFinally,
    requestSuccess,

    formInitialValues,
    queryFormProps,

    formCardProps,
    tableCardProps,

    tableExtra: tableExtraDom,
    tableRender,

    toolbarActionConfig: outToolbarActionConfig = emptyObject,
    toolbarRender,
    toolbarLeft,
    toolbarRight,

    fullScreenBgColor = '#fff',
    contentRender,
    formItems = emptyArray,
    tableHeaderRender,

    rowClassName,
    rootClassName,

    rootStyle,
    toolbarStyle,

    loading: outLoading,
    size: outSize,
    columns = emptyArray,
    pagination: outPagination,
    components,
    ...restProps
  } = props;
  const dataSource = restProps?.dataSource;
  const rootRef = useRef<HTMLDivElement>(null);
  const tablecardref = useRef<HTMLDivElement>(null);
  const _formInitValRef = useRef(formInitialValues);
  const [isFullScreen, { toggleFullscreen }] = useFullscreen(rootRef, {
    onExit: () => toggleFullscreen(),
  });
  const queryFormRef = useRef<FormInstance>();
  const handleFormRef = useMemoizedFn((refValue: FormInstance) => {
    queryFormRef.current = refValue;
    if (formRef) {
      if (isFunction(formRef)) {
        // @ts-ignore
        formRef?.(refValue);
      } else {
        (formRef as any).current = refValue;
      }
    }
  });
  // 根标签全屏样式
  const rootDefaultStyle = useMemo(
    () => (isFullScreen ? { backgroundColor: fullScreenBgColor } : {}),
    [isFullScreen],
  );
  // 是否有表单查询框组
  const hasFromItems = useMemo(() => formItems?.length > 0, [formItems?.length]);
  // 合并内置表格工具栏配置
  const toolbarActionConfig = useMergeToolbarActionConfig(outToolbarActionConfig);
  // 合并分页
  const { outDefaultCurrent, outDefaultPageSize } = useMergePagination(outPagination);
  // useRequest请求
  const {
    params: requestCacheParams,
    data,
    run,
    loading: requestLoading,
    mutate: setTableData,
    pagination: paginationAction,
  } = useTableRequest({
    dataSource,
    request,
    requestCacheKey: outRequestCacheKey,
    requestOptions,
    requestBefore,
    requestSuccess,
    requestFinally,
    outDefaultCurrent,
    outDefaultPageSize,
  });
  // 合并loading
  const currentLoading = useMergeLoading(requestLoading, outLoading);
  // 设置表格大小
  const [currentSize, setCurrentSize] = useTableSize(outSize);
  // 设置表格columns 是否设置序号
  const { finalColumns, columnKeys, setColumnKeys, outColumns } = useTableColumn({
    contentRender,
    isSort,
    paginationAction,
    columns,
    toolbarActionConfig,
  });
  // ==================== 表格方法开始====================
  // 重置所有表单数据，从第一页开始显示、查询数据
  const handleReset = useMemoizedFn((extraParams?: Record<string, any>) => {
    if (dataSource) return;
    let formValues;
    if (hasFromItems) {
      if (queryFormProps?.isAntdReset === false) {
        formValues = _formInitValRef.current;
        queryFormRef.current?.setFieldsValue({ ...(_formInitValRef.current ?? {}) });
      } else {
        queryFormRef.current?.resetFields();
        formValues = queryFormRef.current?.getFieldsValue();
      }
    }
    run(
      {
        ...extraParams,
        current: outDefaultCurrent,
        pageSize: outDefaultPageSize,
        formValues,
      },
      'onReset',
    );
  });
  // 根据表单条件，从第一页以及当前的分页数量开始显示、查询数据
  const handleSearch = useMemoizedFn((extraParams?: Record<string, any>) => {
    if (dataSource) return;
    const formValues = hasFromItems ? queryFormRef.current?.getFieldsValue() : void 0;
    run(
      {
        ...extraParams,
        current: outDefaultCurrent,
        pageSize: paginationAction?.pageSize,
        formValues,
      },
      'onSearch',
    );
  });
  // 根据当前条件和页码 查询数据
  const handleReload = useMemoizedFn((extraParams?: Record<string, any>) => {
    if (dataSource) return;
    const formValues = hasFromItems ? queryFormRef.current?.getFieldsValue() : void 0;
    run(
      {
        ...extraParams,
        current: paginationAction?.current,
        pageSize: paginationAction?.pageSize,
        formValues,
      },
      'onReload',
    );
  });
  //  表格分页页码等改变时触发
  const handlePaginationChange = useMemoizedFn((current, pageSize) => {
    if (dataSource) return;
    const formValues = hasFromItems ? queryFormRef.current?.getFieldsValue() : void 0;
    run({ current, pageSize, formValues }, 'onReload');
  });
  // 表单查询,保留表单参数 保留pageSize  重置page为 1
  const handleSearchFormFinish = useMemoizedFn((formValues: Record<string, any>) => {
    queryFormProps?.onFinish?.(formValues);
    if (dataSource) return;
    run(
      {
        current: outDefaultCurrent,
        pageSize: paginationAction?.pageSize,
        formValues,
      },
      'onSearch',
    );
  });
  // 表单重置完成后的回调
  const handleSearchFormReset = useMemoizedFn((e) => {
    queryFormProps?.onReset?.(e);
    if (dataSource) return;
    const formValues = hasFromItems ? queryFormRef.current?.getFieldsValue() : void 0;
    run(
      {
        current: outDefaultCurrent,
        pageSize: outDefaultPageSize,
        formValues,
      },
      'onReset',
    );
  });
  // 根据传入参数请求
  const handleCustomSearch = useMemoizedFn(
    (
      current: number = outDefaultCurrent,
      pageSize: number = outDefaultPageSize,
      extraParams?: Record<string, any>,
    ) => {
      if (dataSource) return;
      const formValues = hasFromItems ? queryFormRef.current?.getFieldsValue() : void 0;
      run({ ...extraParams, current, pageSize, formValues }, 'onCustomSearch');
    },
  );

  // ==================== 表格方法结束====================

  // ==================== table副作用开始====================
  // 处理是否沾满视口的剩余空间
  useFillSpace({ tablecardref, fillSpace });
  // 初始化请求
  useEffect(() => {
    if (!autoRequest || !isReady || dataSource) return;
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
  // ==================== table副作用结束====================
  // ==================== 暴露外部方法开始====================
  const tableData = data?.list?.length ? data.list : dataSource?.length ? dataSource : [];
  useImperativeHandle(tableRef, () => ({
    // onReload: refresh,
    /** 根据条件，当前页、刷新数据 */
    onReload: handleReload,
    /** 重置数据，从第一页开始显示、查询数据 */
    onReset: handleReset,
    /** 根据条件，从第一页开始显示、查询数据 */
    onSearch: handleSearch,
    /** 根据传入参数请求 */
    onCustomSearch: handleCustomSearch,
    /** 表格根标签 div */
    rootRef,
    /** 请求的参数 */
    params: requestCacheParams,
    /** 表格数据 */
    tableData,
    /** 直接修改当前表格的数据,必须是 { total , data } 的形式 */
    setTableData: setTableData as Dispatch<
      SetStateAction<{ list: Record<string, any>[]; total: number }>
    >,
    /** 页码信息及操作 */
    pagination: paginationAction,
  }));
  // ==================== 暴露外部方法结束===================

  // ==================== dom 区域开始 ====================
  const searchFormDom = useMemo(() => {
    if (!hasFromItems) return null;
    const formSize = currentSize === 'large' ? 'middle' : currentSize;
    return (
      <SearchForm
        size={formSize}
        isReady={isReady}
        loading={currentLoading.spinning}
        initialValues={formInitialValues}
        {...queryFormProps}
        onFinish={handleSearchFormFinish}
        onReset={handleSearchFormReset}
        formItems={formItems}
        cardProps={formCardProps}
        ref={handleFormRef}
        _formInitValRef={_formInitValRef}
      />
    );
  }, [
    hasFromItems,
    currentSize,
    isReady,
    currentLoading?.spinning,
    formCardProps,
    formInitialValues,
    formItems,
    queryFormProps,
  ]);

  const toolbarActionDom = useMemo(() => {
    if (toolbarActionConfig === false) {
      return null;
    }
    return (
      <ToolbarAction
        {...toolbarActionConfig}
        showColumnSetting={contentRender ? false : toolbarActionConfig?.showColumnSetting}
        showDensity={contentRender ? false : toolbarActionConfig?.showDensity}
        className={classnames(`${LIGHTD_TABLE}-toolbar-action`, toolbarActionConfig?.className)}
      />
    );
  }, [toolbarActionConfig]);

  const toolbarDom = useMemo(() => {
    return !showToolbar ||
      (toolbarActionConfig === false && !toolbarLeft && !toolbarRight) ? null : (
      <div className={`${LIGHTD_TABLE}-toolbar`} style={toolbarStyle}>
        <div className={`${LIGHTD_TABLE}-toolbar-content-left`}>
          {toolbarLeft && <Space>{toolbarLeft}</Space>}
        </div>
        <div className={`${LIGHTD_TABLE}-toolbar-content-right`}>
          <Space>
            {toolbarRight}
            {toolbarActionDom}
          </Space>
        </div>
      </div>
    );
  }, [showToolbar, toolbarActionConfig, toolbarLeft, toolbarRight, JSON.stringify(toolbarStyle)]);

  const tableCardDom = (
    <Card
      ref={tablecardref}
      bordered={false}
      {...tableCardProps}
      style={{
        // @ts-ignore
        [`--${LIGHTD_CARD}-stripe-bg`]: typeof showStripe === 'string' ? showStripe : '#fafafa',
        [`--${LIGHTD_CARD}-hover-bg`]: typeof showHover === 'string' ? showHover : '#fafafa',
        ...tableCardProps?.style,
      }}
      className={classnames(
        LIGHTD_CARD,
        { [`${LIGHTD_CARD}-stripe`]: showStripe, [`${LIGHTD_CARD}-hover`]: showHover },
        tableCardProps?.className,
      )}
    >
      {toolbarRender ? toolbarRender(toolbarActionDom, toolbarDom) : toolbarDom}
      {tableHeaderRender ? tableHeaderRender(finalColumns, tableData) : null}
      <Table
        showHeader={!tableHeaderRender && !contentRender}
        components={{
          table: contentRender ? () => contentRender?.(tableData) : void 0,
          ...components,
          body: { cell: TdCell, ...components?.body },
        }}
        rowClassName={classnames(`${LIGHTD_TABLE}-row`, rowClassName as string | undefined)}
        size={currentSize as SizeType}
        columns={finalColumns}
        dataSource={data?.list}
        pagination={
          outPagination !== false
            ? {
                showTotal,
                showSizeChanger: true,
                current: dataSource ? void 0 : paginationAction?.current,
                pageSize: dataSource ? void 0 : paginationAction?.pageSize,
                total: dataSource ? void 0 : paginationAction?.total,
                ...outPagination,
                onChange(page, pageSize) {
                  outPagination?.onChange?.(page, pageSize);
                  if (dataSource) return;
                  handlePaginationChange(page, pageSize);
                },
                className: classnames(`${LIGHTD_TABLE}-pagination`, outPagination?.className),
              }
            : false
        }
        {...restProps}
      />
    </Card>
  );

  const tableDom = (
    <Spin style={spinStyle} {...currentLoading}>
      {tableCardDom}
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
      {tableExtraDom}
      {tableDom}
    </div>
  );
  // ==================== dom 区域结束 ====================

  // 根节点注册
  const returnDom = (
    <TableContext.Provider
      value={{
        reload: handleReload,
        size: currentSize as any,
        setSize: setCurrentSize as any,
        outColumns,
        columnKeys: columnKeys,
        setColumnKeys: setColumnKeys,
        rootRef,
        isFullScreen,
        toggleFullscreen,
      }}
    >
      {tableRender
        ? tableRender(
            {
              searchFormDom,
              toolbarActionDom,
              toolbarDom,
              tableExtraDom,
              tableCardDom,
              tableDom,
              finallyDom,
            },
            props,
          )
        : finallyDom}
    </TableContext.Provider>
  );

  if (
    (typeof toolbarActionConfig !== 'boolean' && !toolbarActionConfig?.showFullscreen) ||
    toolbarActionConfig === false
  ) {
    return <ConfigProvider locale={zhCN}>{returnDom}</ConfigProvider>;
  }
  return (
    // 处理表格在全屏状态下 ant一些弹出层组件(Modal)无法显示问题
    // 全屏本质上是把你的表格区域 fixed 了，所以你需要把 Modal等组件 的 getPopupContainer 设置为了 table 的区域
    <ConfigProvider locale={zhCN} getPopupContainer={() => rootRef?.current || document.body}>
      {returnDom}
    </ConfigProvider>
  );
};
export default BaseTable;
