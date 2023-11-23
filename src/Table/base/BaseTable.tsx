import { useMemoizedFn, usePagination, useRafState } from 'ahooks';
import type { FormInstance } from 'antd';
import { Card, ConfigProvider, Space, Spin, Table } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import type { Key } from 'antd/es/table/interface';
import classnames from 'classnames';
import { isFunction } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { Dispatch, FC, SetStateAction } from 'react';
import { useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import TableContext from '../TableContext';
import SearchForm, { LIGHTD_CARD } from './SearchFrom';
import ToolbarAction from './ToolBarAction';
import {
  useFillSpace,
  useMergeLoading,
  useMergePagination,
  useTableColumn,
  useTableSize,
} from './hooks';
import './styles.less';
import type { LTableProps, LTableRequestType } from './types';

export const LIGHTD_TABLE = 'lightd-table';

// 显示数据总量
const showTotal = (total: number, range: [value0: Key, value1: Key]) => (
  <span
    className={`${LIGHTD_TABLE}-pagination-show-total`}
  >{`当前显示${range[0]}-${range[1]}条，共 ${total} 条数据`}</span>
);

// 注意 TdCell 要提到Table作用域外声明
const TdCell = (props: any) => {
  // onMouseEnter, onMouseLeave在数据量多的时候，会严重阻塞表格单元格渲染，严重影响性能
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onMouseEnter, onMouseLeave, ...restProps } = props;
  return <td {...restProps} />;
};

/**
 * 表格组件
 */
const BaseTable: FC<Partial<LTableProps>> = (props) => {
  const {
    isReady = true,
    isSort = false,
    fillSpace = false,
    showStripe = false,
    showHover = false,
    showToolbar = true,

    formRef,
    tableRef,

    fullScreenBgColor = '#fff',
    defaultRequestParams = emptyObject,
    requestOptions = emptyObject,
    request = async () => emptyObject,

    autoRequest = true,
    formInitialValues,

    queryFormProps,
    formCardProps,
    tableCardProps,

    tableExtra,
    tableRender,

    toolbarActionConfig: outToolbarActionConfig = emptyObject,
    toolbarRender,
    toolbarLeft,
    toolbarRight,

    loading: outLoading,
    contentRender,

    className,
    rowClassName,
    rootClassName,
    tableClassName,

    style,
    rootStyle,
    tableStyle,
    toolbarStyle,

    size: outSize,
    columns = emptyArray,
    components,

    formItems = emptyArray,

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
      if (isFunction(formRef)) {
        // @ts-ignore
        formRef?.(refValue);
      } else {
        (formRef as any).current = refValue;
      }
    }
  });

  // 合并内置表格工具栏配置
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
    // JSON序列化时 当含有 undefined , 函数 日期对象会有问题 这儿根据实际情况可以使用
  }, [JSON.stringify(outToolbarActionConfig)]);

  // 根标签全屏样式
  const rootDefaultStyle = useMemo(
    () => (isFullScreen ? { backgroundColor: fullScreenBgColor } : {}),
    [isFullScreen],
  );

  // 是否有查询框组
  const hasFromItems = useMemo(() => formItems?.length > 0, [formItems]);

  // 合并分页
  const { outPaginationCurrent, outPaginationPageSize } = useMergePagination(outPagination);

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
  });

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
  const handleSearchFormFinish = useMemoizedFn((formValues: Record<string, any>) => {
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
  });
  // 表格分页页码丶排序等改变时触发
  const handleTableChange = useMemoizedFn((pagination, filters, sorter, extra) => {
    console.log('pagination ', pagination);
    console.log('filters ', filters);
    console.log('sorter ', sorter);
    console.log('extra ', extra);

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
  });
  // ==================== 表格方法结束====================

  // ==================== table副作用开始====================
  // 处理是否沾满视口的剩余空间
  useFillSpace({ tablecardref, fillSpace });

  // 初始化请求
  useEffect(() => {
    if (!autoRequest || !isReady) return;
    if (hasFromItems) {
      isInit.current = true;
      queryFormRef.current?.submit();
      return;
    }
    paginationAction.changeCurrent(1);
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
    tableData: (data?.list ?? restProps?.dataSource ?? []) as Record<string, any>[],
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
        showColumnSetting={contentRender ? false : toolbarActionConfig?.showColumnSetting}
        showDensity={contentRender ? false : toolbarActionConfig?.showDensity}
        className={`${LIGHTD_TABLE}-toolbar-action ${toolbarActionConfig.className}`}
      />
    );
  }, [toolbarActionConfig, contentRender]);

  const toolbarDom = useMemo(() => {
    return !showToolbar ||
      (toolbarActionConfig === false && !toolbarLeft && !toolbarRight) ? null : (
      <div className={`${LIGHTD_TABLE}-toolbar`} style={toolbarStyle}>
        <div className={`${LIGHTD_TABLE}-toolbar-content-left`}>{<Space>{toolbarLeft}</Space>}</div>
        <div className={`${LIGHTD_TABLE}-toolbar-content-right`}>
          <Space>
            {toolbarRight}
            {ToolbarActionDom}
          </Space>
        </div>
      </div>
    );
  }, [showToolbar, toolbarActionConfig, toolbarLeft, toolbarRight, toolbarStyle]);

  const searchFormDom = useMemo(() => {
    const formSize = currentSize === 'default' || currentSize === 'large' ? 'middle' : currentSize;
    return (
      <SearchForm
        size={formSize}
        isReady={isReady}
        loading={currentLoading.spinning}
        ref={handleFormRef}
        cardProps={formCardProps}
        onFinish={handleSearchFormFinish}
        onReset={handleReset}
        formItems={formItems}
        initialValues={formInitialValues}
        _lformRef={_lformRef}
        {...queryFormProps}
      />
    );
  }, [
    currentSize,
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
          // @ts-ignore
          [`--${LIGHTD_CARD}-stripe-bg`]: typeof showStripe === 'string' ? showStripe : '#fafafa',
          [`--${LIGHTD_CARD}-hover-bg`]: typeof showHover === 'string' ? showHover : '#fafafa',
          ...tableCardProps?.style,
        }}
        className={classnames(
          LIGHTD_CARD,
          {
            [`${LIGHTD_CARD}-stripe`]: showStripe,
            [`${LIGHTD_CARD}-hover`]: showHover,
          },
          tableCardProps?.className,
        )}
      >
        {toolbarRender ? toolbarRender(ToolbarActionDom) : toolbarDom}
        <Table
          components={{
            table: contentRender ? () => contentRender?.(data?.list ?? []) : void 0,
            body: { cell: TdCell },
            ...components,
          }}
          className={classnames(tableClassName, className)}
          rowClassName={classnames(`${LIGHTD_TABLE}-row`, rowClassName as string | undefined)}
          style={{ ...tableStyle, ...style }}
          size={currentSize}
          columns={finalColumns}
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
                  className: classnames(`${LIGHTD_TABLE}-pagination`, outPagination?.className),
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
      style={{
        ...rootDefaultStyle,
        ...rootStyle,
      }}
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
