import { useMemoizedFn, usePagination } from 'ahooks';
import type { Options } from 'ahooks/lib/useRequest/src/types';
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
  useLayoutEffect,
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
) => Promise<{
  success: boolean;
  data: Record<string, any>[];
  total: number | string;
}>;

export type LTableProps = {
  /**
   * 表格是否需要排序序号
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  isSort?: boolean | { width: number | string };
  /**
   * 表格 表单是否准备好 false 时表格不会请求 表单不能提交查询
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   * */
  isReady?: boolean;
  /**
   * 全屏表格的背景颜色
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  fullScreenBgColor?: string;

  /**
   * 异步请求函数第一次额外参数(仅在第一次请求时会携带)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  defaultRequestParams?: Record<string, any>;
  /**
   * ahooks 的 useRequest 的 配置项， 部分参数无法配置
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   * @see https://ahooks.js.org/zh-CN/hooks/use-request/basic#result
   */
  requestOptions?: {
    /** 请求唯一标识。如果设置了 cacheKey，会启用缓存机制 */
    cacheKey?: string;
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
  } & Options<any, any[]>;
  /**
   * 异步请求函数用于获取表格数据
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  request?: LTableRequest;
  /**
   * 是否在第一次渲染时自动请求 (支持动态改变)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  autoRequest?: boolean;

  /**
   * 查询表单的实例
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  formRef?:
    | MutableRefObject<FormInstance | undefined>
    | ((ref: FormInstance) => void);
  /**
   * 表格的实例 (包含一些方法)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  tableRef?: MutableRefObject<LTableInstance | undefined>;
  /**
   * 是否占满视口剩余空间的高度
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  fillSpace?: boolean | number;
  /**
   * 表格最外层div类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  rootClassName?: string;
  /**
   *  antd表格额外类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  tableClassName?: string;
  /**
   *  表格最外层div样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  rootStyle?: CSSProperties;
  /**
   * antd表格额外style
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  tableStyle?: CSSProperties;
  /**
   * 整个toolbar的样式  showToolbar为true时生效
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  toolbarStyle?: CSSProperties;
  /**
   * 查询表单外层的CardProps
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  formCardProps?: CardProps;
  /**
   *  表格外层的CardProps
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  tableCardProps?: CardProps;
  /**
   *  是否显示 toolbar
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  showToolbar?: boolean;
  /**
   * 配置内置表格工具栏 继承 Space 组件的属性 showToolbar为 true 时生效
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  toolbarActionConfig?: LToolbarActionProps;
  /**
   * 重新渲染toolBar 包括内置表格工具
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  toolbarRender?: (ToolbarActionDom: ReactNode) => ReactNode;
  /**
   *  重新渲染整个高级表格
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
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
      /** 整个高级表格Dom 包含全部Dom */
      finallyDom: ReactNode;
    },
    props: LTableProps,
  ) => ReactElement;
  /**
   * 重新渲染 antd 表格的内容主体
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  contentRender?: (data: Record<string, any>[]) => ReactNode;
  /**
   * 整个toolBar的左侧
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  toolbarLeft?: ReactNode;
  /**
   * 整个toolBar的右侧 (如果有内置表格工具就是在内置表格工具的左侧)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  toolbarRight?: ReactNode;
  /**
   * 表格内容上部额外区域
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  tableExtra?: ReactNode;
  /**
   * 表单查询框组
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  formItems?: Exclude<
    ReactNode,
    string | number | boolean | null | undefined
  >[];
  /**
   * 查询表单的初始值
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   */
  formInitialValues?: Record<string, any>;
  /**
   * 高级查询表单组件的props-LQueryFormProps
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.16
   * @memberof LTableProps
   * @see https://llq0802.github.io/lighting-design/latest/components/query-form
   */
  queryFormProps?: LQueryFormProps;
} & TableProps<any>;

export const LIGHTD_TABLE = 'lightd-table';

// 显示数据总量
const showTotal = (total: number, range: [value0: Key, value1: Key]) => (
  <span
    className={`${LIGHTD_TABLE}-pagination-show-total`}
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
  const tablecardref = useRef<HTMLDivElement>(null);
  const _lformRef = useRef<Record<string, any>>({});
  const isInit = useRef<boolean>(false); // 是否第一次自动请求
  const [isFullScreen, setFullScreen] = useState(false);

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
    return {
      showReload: true,
      showColumnSetting: true,
      showDensity: true,
      showFullscreen: true,
      ...outToolbarActionConfig,
    };
  }, [outToolbarActionConfig]);

  // 根标签全屏样式
  const rootDefaultStyle = useMemo(() => {
    return isFullScreen ? { background: fullScreenBgColor } : {};
  }, [isFullScreen]);

  // 默认从第一页
  const outPaginationCurrent = useMemo(() => {
    return (
      (outPagination &&
        (outPagination.defaultCurrent || outPagination.current)) ||
      1
    );
  }, [outPagination?.defaultCurrent, outPagination?.current]);

  // 默认一页10条
  const outPaginationPageSize = useMemo(() => {
    return (
      (outPagination &&
        (outPagination.defaultPageSize || outPagination.pageSize)) ||
      10
    );
  }, [outPagination?.defaultPageSize, outPagination?.pageSize]);

  // 是否有查询框组
  const hasFromItems = useMemo(
    () => Array.isArray(formItems) && formItems.length > 0,
    [formItems],
  );

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
    async (args, requestType) => {
      isInit.current = false;
      const res = await request({ ...args }, requestType as LTableRequestType);
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

  // 存储外部columns 是否设置序号
  const outColumns = useMemo(() => {
    if (isSort) {
      const sortColumn = {
        align: 'center',
        title: '序号',
        dataIndex: '_sortColumn_',
        width: typeof isSort === 'boolean' ? 80 : isSort?.width,
        // fixed: 'left',
        render: (_: any, __: any, index: number) =>
          (paginationAction?.current - 1) * (paginationAction?.pageSize || 0) +
          index +
          1,
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
  }, [outLoading, requestLoading]);

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
    } else {
      paginationAction.onChange(1, outPaginationPageSize);
    }
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
    } else {
      paginationAction.changeCurrent(1);
    }
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
    } else {
      paginationAction.changeCurrent(paginationAction?.current);
    }
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
      } else {
        // paginationAction.changeCurrent(pagination?.current || 1);
        paginationAction.onChange(
          pagination?.current || 1,
          pagination.pageSize,
        );
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
    /** 表格根标签 div */
    rootRef: rootRef,
    /** 表格数据 */
    tableData:
      data?.list || (restProps?.dataSource as Record<string, any>[]) || [],
    /** 直接修改当前表格的数据*/
    setTableData,
    /** 页码信息及操作 */
    pagination: paginationAction,
  }));

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRequest, isReady]);

  const ToolbarActionDom = useMemo(() => {
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
              ? () => contentRender(data?.list ?? []) as unknown as any
              : void 0,
            ...components,
          }}
          className={classnames(tableClassName, className)}
          rowClassName={classnames(
            `${LIGHTD_TABLE}-row`,
            rowClassName as string | undefined,
          )}
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
    handleFormRef,
    handleSearchFormFinish,
  ]);

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

  // 根节点注册
  const returnDom = (
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

  if (!toolbarActionConfig?.showFullscreen) {
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
