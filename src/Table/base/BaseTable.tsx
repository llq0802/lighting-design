import { useMemoizedFn, usePagination } from 'ahooks';
import type { CardProps, FormInstance } from 'antd';
import { Card, ConfigProvider, Space, Spin, Table } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import type { Key } from 'antd/es/table/interface';
import type {
  ColumnGroupType,
  ColumnsType,
  ColumnType,
  TableProps,
} from 'antd/lib/table';
import classnames from 'classnames';
import type { LQueryFormProps } from 'lighting-design/QueryForm';
import type {
  CSSProperties,
  Dispatch,
  FC,
  MutableRefObject,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
} from 'react';
import {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import TableContext from '../TableContext';
import SearchForm, { LIGHTD_CARD } from './SearchFrom';
import './styles.less';
import type { LToolbarActionProps } from './ToolBarAction';
import ToolbarAction from './ToolBarAction';

export type LTableRenderProps = (
  optionsDom: {
    /** 表单dom */
    searchFormDom: ReactNode;
    /** 工具栏dom */
    toolbarDom: ReactNode;
    /**   table上面额外Dom 如果没有配置则没有 */
    tableExtraDom: ReactNode;
    /**   table主体Dom 包含工具栏Dom  */
    tableDom: ReactNode;
    /** 整个表格Dom包含全部Dom */
    finallyDom: ReactNode;
  },
  props: LTableProps,
) => ReactElement;

export type LTableRequestType = 'onInit' | 'onSearch' | 'onReload' | 'onReset';

export type LTableInstance = {
  // 根据条件，当前页、刷新数据
  onReload: () => void;
  // 重置数据，从第一页开始显示、查询数据
  onReset: () => void;
  // 根据条件，从第一页开始显示、查询数据
  onSearch: () => void;
  // 表格根标签div
  rootRef: RefObject<HTMLDivElement>;
  // 表格数据
  tableData: Record<string, any>[];
  // 页码信息
  pagination: {
    current: number;
    pageSize: number;
  };
};

export type LTableRequestParams = {
  /** 当前页 */
  current: number;
  /** 一页多少条 */
  pageSize: number;
  /** 表单数据 */
  formValues?: Record<string, any>;
  /** 其他参数 */
  [key: string]: any;
};

export type LTableRequest = (
  /** 请求参数 */
  params: LTableRequestParams,
  /** 请求类型 */
  requestType: LTableRequestType,
) => Promise<{ success: boolean; data: Record<string, any>[]; total: number }>;

export type LTableProps = {
  /** 表格是否需要排序序号 */
  isSort?: boolean;
  /** 表格 表单是否准备好 false时表格不会请求 表单不能提交查询 */
  isReady?: boolean;
  /** 全屏表格的背景颜色 */
  fullScreenBgColor?: string;
  /** 表格宽度超过 100%自动处理横向滚动条。 */
  nowrap?: boolean;
  /** 异步请求函数第一次额外参数(仅在第一次请求时会携带) */
  defaultRequestParams?: Record<string, any>;
  /**
   * ahooks的useRequest的options
   * @version v3.7.4
   * @see https://ahooks.js.org/zh-CN/hooks/use-request/basic#result
   */
  requestOptions?: {
    /** 首次默认执行时，传递给 service 的参数 */
    defaultParams?: any;
    /** service 执行前触发*/
    onBefore?: (params: any) => void;
    /** ervice resolve 时触发 */
    onSuccess?: (data: any, params: any) => void;
    /** ervice reject 时触发 */
    onError?: (e: Error, params: any) => void;
    /** service 执行完成时触发 */
    onFinally?: (params: any, data?: any, e?: Error) => void;
    /** 其他高级配置 */
    [key: string]: any;
  };
  /** 异步请求函数 */
  request?: LTableRequest;
  /** 是否自动请求 */
  autoRequest?: boolean;
  /** 查询表单的实例 */
  formRef?:
    | MutableRefObject<FormInstance | undefined>
    | ((ref: FormInstance) => void);
  /** 表格的实例 包含一些方法 */
  tableRef?: MutableRefObject<LTableInstance | undefined>;
  /** 是否占满剩余空间 */
  // fillSpace?: boolean;
  /** 表格最外层div类名 */
  rootClassName?: string;
  /** 表格额外类名 */
  tableClassName?: string;
  /** 表格最外层div样式 */
  rootStyle?: CSSProperties;
  /** 表格额外style */
  tableStyle?: CSSProperties;
  /** 整个toolbar的样式  showToolbar为true时生效*/
  toolbarStyle?: CSSProperties;
  /** 查询表单外层的CardProps*/
  formCardProps?: CardProps;
  /** 表格外层的CardProps*/
  tableCardProps?: CardProps;
  /** 是否显示toolbar */
  showToolbar?: boolean;
  /** 配置内置表格工具栏 继承Space组件的属性 showToolbar为 true 时生效*/
  toolbarActionConfig?: LToolbarActionProps;
  /** 重新渲染toolBar 包括内置表格工具 */
  toolbarRender?: (ToolbarActionDom: ReactNode) => ReactNode;
  /** 重新渲染整个表格 */
  tableRender?: (
    optionsDom: {
      /** 表单dom */
      searchFormDom: ReactNode;
      /** 工具栏dom */
      toolbarDom: ReactNode;
      /**   table上面额外Dom 如果没有配置则没有 */
      tableExtraDom: ReactNode;
      /**   table主体Dom 包含工具栏Dom  */
      tableDom: ReactNode;
      /** 整个表格Dom包含全部Dom */
      finallyDom: ReactNode;
    },
    props: LTableProps,
  ) => ReactElement;
  /** 重新渲染表格内容 */
  contentRender?: (data: Record<string, any>[]) => ReactNode;
  /** 整个toolBar的左侧 */
  toolbarLeft?: ReactNode;
  /** 整个toolBar的右侧 在内置表格工具左侧 */
  toolbarRight?: ReactNode;
  /** 表格内容上部区域 */
  tableExtra?: ReactNode;
  /** 表单查询框组 */
  formItems?: Exclude<
    ReactNode,
    string | number | boolean | null | undefined
  >[];
  /** 查询表单初始值 */
  formInitialValues?: Record<string, any>;
  /** 查询表单LQueryFormProps */
  queryFormProps?: LQueryFormProps;
} & TableProps<any>;

export const LIGHTD_TABLE = 'lightd-table';

// 显示数据总量
const showTotal = (total: number, range: [value0: Key, value1: Key]) => (
  <span
    className={`${LIGHTD_TABLE}-pagination-showTotal`}
  >{`当前显示${range[0]}-${range[1]}条，共 ${total} 条数据`}</span>
);

/**
 * 表格组件
 * @param props
 * @returns
 */
const BaseTable: FC<Partial<LTableProps>> = (props) => {
  const {
    isSort = false,
    className,
    nowrap,

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
    toolbarActionConfig = {
      showFullscreen: true,
    },
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
    columns = [],
    components,
    style,

    formItems = [],

    pagination: outPagination,

    onChange,
    ...restProps
  } = props;

  const [currentSize, setCurrentSize] = useState(outSize);
  const rootRef = useRef<HTMLDivElement>(null);
  const _lformRef = useRef<Record<string, any>>({});
  const isInit = useRef<boolean>(false); // 是否第一次自动请求
  const [isFullScreen, setFullScreen] = useState(false);

  const rootDefaultStyle = isFullScreen
    ? { background: fullScreenBgColor, overflow: 'auto', padding: 24 }
    : {};
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
  // 默认从第一页
  const outPaginationCurrent = useMemo(() => {
    return (
      (outPagination &&
        (outPagination.defaultCurrent || outPagination.current)) ||
      1
    );
  }, [outPagination]);
  // 默认一页10条
  const outPaginationPageSize = useMemo(() => {
    return (
      (outPagination &&
        (outPagination.defaultPageSize || outPagination.pageSize)) ||
      10
    );
  }, [outPagination]);
  // 是否有查询框组
  const hasFromItems = useMemo(
    () => Array.isArray(formItems) && formItems.length > 0,
    [formItems],
  );

  // request请求
  const {
    data,
    loading: requestLoading,
    run,
    // refresh,
    // mutate,
    params,
    pagination: paginationAction,
  } = usePagination(
    async (args, requestType) => {
      isInit.current = false;
      const res = await request({ ...args }, requestType as LTableRequestType);
      // 必须设置success为true data必须为数组长度大于0 才会有数据
      if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
        return { list: res.data, total: res.total };
      }
      return { list: [], total: 0 };
    },
    {
      // refreshDeps: requestParams,
      manual: true,
      defaultCurrent: outPaginationCurrent,
      defaultPageSize: outPaginationPageSize,
      ...requestOptions,
    },
  );

  // loading
  const currentLoading = useMemo(() => {
    if (outLoading === undefined) {
      return { spinning: requestLoading };
    } else if (typeof outLoading === 'boolean') {
      return { spinning: outLoading };
    }
    return {
      spinning: requestLoading,
      ...outLoading,
    };
  }, [outLoading, requestLoading]);

  // 存储外部columns 是否设置序号
  const outColumns = useMemo(() => {
    if (isSort) {
      const sortColumn = {
        align: 'center',
        title: '序号',
        dataIndex: '_sortColumn_',
        width: 80,
        // fixed: 'left',
        render: (_: any, __: any, index: number) => (
          <>
            {(paginationAction?.current - 1) *
              (paginationAction?.pageSize || 0) +
              index +
              1}
          </>
        ),
      };
      return [sortColumn, ...columns] as (
        | ColumnGroupType<any>
        | ColumnType<any>
      )[];
    }
    return columns;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns, isSort, paginationAction?.current, paginationAction?.pageSize]);

  // 表格展示的列
  const [currentColumns, setCurrentColumns] = useState(outColumns);

  // 重置数据，从第一页开始显示、查询数据
  const handleReset = useMemoizedFn(() => {
    if (hasFromItems) {
      // queryFormRef.current?.resetFields();
      // const formValues = queryFormRef.current?.getFieldsValue();
      const formValues = _lformRef.current;
      queryFormRef.current?.setFieldsValue({ ...formValues });
      return run(
        {
          current: 1,
          pageSize: outPaginationPageSize,
          formValues,
        },
        'onReset',
      );
    } else {
      paginationAction.changeCurrent(1);
    }
  });

  // 根据条件，从第一页开始显示、查询数据
  const handleSearch = useMemoizedFn(() => {
    if (hasFromItems) {
      const formValues = queryFormRef.current?.getFieldsValue();
      return run(
        {
          current: 1,
          pageSize: outPaginationPageSize,
          formValues: formValues,
        },
        'onSearch',
      );
    } else {
      paginationAction.changeCurrent(1);
    }
  });

  // 根据当前条件和页码 查询数据
  const handleReload = useMemoizedFn(() => {
    if (hasFromItems) {
      const formValues = queryFormRef.current?.getFieldsValue();
      return run(
        {
          current: paginationAction?.current,
          pageSize: paginationAction?.pageSize,
          formValues: formValues,
        },
        'onReload',
      );
    } else {
      paginationAction.changeCurrent(paginationAction?.current);
    }
  });

  // 表单查询
  const handleSearchFormFinish = useMemoizedFn(
    (formValues: Record<string, any>) => {
      const defaultPar = isInit.current ? { ...defaultRequestParams } : {};
      return run(
        {
          current: params.current || 1,
          pageSize: outPaginationPageSize,
          formValues,
          ...defaultPar,
        },
        isInit.current ? 'onInit' : 'onSearch',
      );
    },
  );

  // 默认 onReset 中已经重置表单，这里只从第一页开始显示、查询数据请求
  // const handleSearchFormReset = useCallback(() => {
  //   handleSearch('onReset');
  // }, [handleSearch]);

  // 表格分页页码丶排序等改变时触发
  const handleTableChange = useMemoizedFn(
    (pagination, filters, sorter, extra) => {
      onChange?.(pagination, filters, sorter, extra);
      if (hasFromItems) {
        const formValues = queryFormRef.current?.getFieldsValue();
        return run(
          {
            current: pagination.current || 1,
            pageSize: pagination.pageSize,
            formValues: formValues,
          },
          'onReload',
        );
      } else {
        paginationAction.changeCurrent(pagination?.current || 1);
      }
    },
  );

  // 暴露外部方法
  useImperativeHandle(tableRef, () => ({
    // onReload: refresh,
    /** 根据条件，当前页、刷新数据 */
    onReload: handleReload,
    /** 重置数据，从第一页开始显示、查询数据 */
    onReset: handleReset,
    /** 根据条件，从第一页开始显示、查询数据 */
    onSearch: handleSearch,
    // 表格根标签div
    rootRef: rootRef,
    // 表格数据
    tableData:
      data?.list ?? ((restProps?.dataSource || []) as Record<string, any>[]),
    // 页码信息
    pagination: {
      current: paginationAction.current,
      pageSize: paginationAction.pageSize,
    },
  }));

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRequest, isReady]);

  const ToolbarActionDom = (
    <ToolbarAction
      {...toolbarActionConfig}
      showColumnSetting={
        contentRender ? false : toolbarActionConfig?.showColumnSetting
      }
      showDensity={contentRender ? false : toolbarActionConfig?.showDensity}
      className={`${LIGHTD_TABLE}-toolbar-action ${toolbarActionConfig.className}`}
    />
  );

  const toolbarDom = showToolbar ? (
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
  ) : null;

  const tableDom = (
    <Spin {...currentLoading}>
      <Card
        bordered={false}
        {...tableCardProps}
        style={{ ...tableCardProps?.style }}
        className={classnames(`${LIGHTD_CARD}`, tableCardProps?.className)}
      >
        {toolbarRender ? toolbarRender(ToolbarActionDom) : toolbarDom}
        <Table
          components={{
            ...components,
            table: contentRender
              ? () => contentRender(data?.list ?? []) as unknown as any
              : void 0,
          }}
          className={classnames(tableClassName, className)}
          rowClassName={classnames(`${LIGHTD_TABLE}-row`, rowClassName)}
          style={{ ...tableStyle, ...style }}
          size={currentSize}
          columns={currentColumns as (ColumnGroupType<any> | ColumnType<any>)[]}
          dataSource={data?.list || []}
          onChange={handleTableChange}
          pagination={
            outPagination !== false
              ? {
                  showTotal,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  ...outPagination,
                  // current: paginationAction?.current,
                  // pageSize: paginationAction?.pageSize,
                  defaultCurrent: paginationAction?.current,
                  defaultPageSize: paginationAction?.pageSize,
                  total: paginationAction?.total,
                }
              : false
          }
          {...restProps}
          scroll={{ ...(nowrap ? { x: true } : {}), ...restProps?.scroll }}
        />
      </Card>
    </Spin>
  );

  const searchFormDom = useMemo(() => {
    return (
      <SearchForm
        isReady={isReady}
        loading={currentLoading.spinning}
        ref={handleFormRef}
        cardProps={formCardProps}
        onFinish={handleSearchFormFinish}
        // onReset={handleSearchFormReset}
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
    handleFormRef,
    handleSearchFormFinish,
  ]);

  const finallyDom = (
    // 根节点注册
    <TableContext.Provider
      value={{
        // reload: refresh,
        reload: handleReload,
        size: currentSize,
        setSize: setCurrentSize,
        columns: outColumns as (ColumnGroupType<any> | ColumnType<any>)[],
        setColumns: setCurrentColumns as Dispatch<
          SetStateAction<ColumnsType<Record<string, any>>>
        >,
        rootRef: rootRef,
        setFullScreen,
      }}
    >
      <div
        ref={rootRef}
        style={{ ...rootDefaultStyle, ...rootStyle }}
        className={classnames(LIGHTD_TABLE, rootClassName, {
          [`${LIGHTD_TABLE}-fullScreen`]: isFullScreen,
        })}
      >
        {searchFormDom}
        {tableExtra}
        {tableDom}
      </div>
    </TableContext.Provider>
  );

  const returnDom = tableRender
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
    : finallyDom;

  if (!toolbarActionConfig?.showFullscreen) {
    return <ConfigProvider locale={zhCN}>{returnDom}</ConfigProvider>;
  }

  return (
    // 处理表格在全屏状态下 ant一些弹出层组件(Modal)无法显示问题
    // 全屏本质上是把你的表格区域 fixed 了，所以你需要把 Modal等组件 的 getPopupContainer 设置为了 table 的区域
    <ConfigProvider
      locale={zhCN}
      getPopupContainer={() => rootRef.current || document.body}
    >
      {returnDom}
    </ConfigProvider>
  );
};

export default BaseTable;
