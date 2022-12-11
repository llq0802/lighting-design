import { useMount, usePagination, useUpdateEffect } from 'ahooks';
import type { CardProps, FormInstance } from 'antd';
import { Card, Space, Table } from 'antd';
import type { Key } from 'antd/es/table/interface';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import classnames from 'classnames';
import type { CSSProperties, FC, MutableRefObject, ReactElement, ReactNode } from 'react';
import { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { LQueryFormProps } from '../../Form/components/QueryForm';
import TableContext from '../TableContext';
import SearchForm, { LIGHTD_CARD } from './SearchFrom';
import './styles.less';
import ToolbarAction from './ToolBarAction';

export type BaseTableProps = {
  /** 表格内容是否换行 */
  nowrap: boolean;
  /** 异步请求函数 */
  request: (
    params: {
      current: number;
      pageSize: number;
      formValues?: Record<string, any>;
      [key: string]: any;
    },
    requestType: RequestType,
  ) => Promise<{ success: boolean; data: Record<string, any>[]; total: number }>;
  /** 是否自动请求 */
  autoRequest: boolean;
  /** 查询表单的实例 */
  formRef: MutableRefObject<FormInstance | undefined> | ((ref: FormInstance) => void);
  /** 表格的实例 包含一些方法 */
  tableRef: MutableRefObject<any | undefined>;
  /** 是否占满剩余空间 */
  isSpace: boolean;
  /** 表格最外层div类名 */
  wrapperClassName: string;
  /** 表格额外类名 */
  tableClassName: string;
  /** 表格额外style */
  tableStyle: CSSProperties;
  /** 查询表单外层的CardProps*/
  formCardProps: CardProps;
  /** 表格外层的CardProps*/
  tableCardProps: CardProps;

  columns: ColumnsType<Record<string, any>>;
  /** 是否显示内置表格工具 */
  showToolbar: boolean;
  /** 重新渲染toolBar 包括内置表格工具 */
  toolbarRender: (dom: ReactElement | null) => ReactNode;
  /** 重新渲染表格 */
  tableRender: (tableDom: ReactElement, props: BaseTableProps) => ReactNode;
  /** 整个toolBar的左侧 */
  toolbarLeft: ReactNode;
  /** 整个toolBar的右侧 在内置表格工具左侧 */
  toolbarRight: ReactNode;
  /** 表格上部区域 */
  tableExtra: ReactNode;
  /** 表单查询框组 */
  formItems: Exclude<ReactNode, string | number | boolean | null | undefined>[];
  /** 查询表单初始值 */
  formInitialValues: Record<string, any>;
  /** 查询表单LQueryFormProps */
  queryFormProps: LQueryFormProps;
} & Omit<TableProps<Record<string, any>>, 'columns'>;

export type RequestType = 'onSearch' | 'onReload' | 'onReset';
export const LIGHTD_TABLE = 'lightd-table';

// 显示数据总量
const showTotal = (total: number, range: [value0: Key, value1: Key]) => (
  <span
    className={`${LIGHTD_TABLE}-pagination-showTotal`}
  >{`当前显示${range[0]}-${range[1]} 条，共 ${total} 条数据`}</span>
);

/**
 * 表格组件
 * @param props
 * @returns
 */
const BaseTable: FC<BaseTableProps> = (props) => {
  const {
    nowrap,

    formRef,
    tableRef,

    request,
    autoRequest = true,
    formInitialValues,
    queryFormProps,
    formCardProps,
    tableCardProps,

    tableExtra,
    tableRender,
    showToolbar = true,
    toolbarRender,
    toolbarLeft,
    toolbarRight,

    wrapperClassName,
    tableClassName,
    tableStyle,
    size: outSize = 'middle',
    columns: outColumns = [],

    formItems = [],

    pagination: outPagination,

    ...restProps
  } = props;

  const [currentColumns, setCurrentColumns] = useState(outColumns);
  const [currentSize, setCurrentSize] = useState(outSize);
  // 绑定SearchForm组件form实例在内部
  const queryFormRef = useRef<FormInstance | null>(null);
  // 绑定SearchForm组件form实例在外部
  const handleFormRef = useCallback(
    (refValue: FormInstance) => {
      queryFormRef.current = refValue;
      if (formRef) {
        if (typeof formRef === 'function') {
          formRef(refValue);
        } else {
          formRef.current = refValue;
        }
      }
    },
    [formRef],
  );

  const outPaginationCurrent = useMemo(() => {
    return (outPagination && (outPagination.defaultCurrent || outPagination.current)) || 1;
  }, [outPagination]);

  const outPaginationPageSize = useMemo(() => {
    return (outPagination && (outPagination.defaultPageSize || outPagination.pageSize)) || 10;
  }, [outPagination]);

  const hasFromItems = useMemo(() => Array.isArray(formItems) && formItems.length > 0, [formItems]);

  // request请求
  const {
    data,
    loading: requestLoading,
    run,
    refresh,
    params,
    pagination: paginationAction,
  } = usePagination(
    async (arg, requestType) => {
      const res = await request(arg, requestType);
      if (!res?.success) {
        return { list: [], total: 0 };
      }
      return {
        list: res.data,
        total: res.total,
      };
    },
    {
      manual: true,
      defaultCurrent: outPaginationCurrent,
      defaultPageSize: outPaginationPageSize,
    },
  );

  // 重置表单数据
  const handleReset = useCallback(() => {
    if (hasFromItems) {
      queryFormRef.current?.resetFields();
      Promise.resolve().then(() => {
        queryFormRef.current?.submit();
      });
    } else {
      paginationAction.changeCurrent(1);
    }
  }, [hasFromItems, paginationAction]);

  // 根据条件，从第一页开始显示、查询数据
  const handleSearch = useCallback(
    (type = 'onSearch') => {
      if (hasFromItems) {
        const formValues = queryFormRef.current?.getFieldsValue();
        return run(
          {
            current: 1,
            pageSize: outPaginationPageSize,
            formValues: formValues,
          },
          type,
        );
      } else {
        paginationAction.changeCurrent(1);
      }
    },
    [hasFromItems, outPaginationPageSize, paginationAction, run],
  );

  // 表单查询
  const handleSearchFormFinish = useCallback(
    (formValues: Record<string, any>) => {
      return run(
        {
          ...params[0],
          current: 1,
          pageSize: outPaginationPageSize,
          formValues: formValues,
        },
        'onSearch',
      );
    },
    [outPaginationPageSize, params, run],
  );

  // 默认 onReset 中已经重置表单，这里只从第一页开始显示、查询数据请求
  // const handleSearchFormReset = useCallback(() => {
  //   handleSearch('onReset');
  // }, [handleSearch]);

  // 表格分页排序等改变时
  const handleTableChange = useCallback(
    (pagination) => {
      // console.log('pagination ', pagination);
      // console.log('filters ', filters);
      // console.log('sorter ', sorter);
      // console.log('extra ', extra);

      const formValues = queryFormRef.current?.getFieldsValue();
      return run(
        {
          current: pagination.current,
          pageSize: pagination.pageSize,
          formValues: formValues,
        },
        'onReload',
      );
    },
    [run],
  );

  // 暴露外部方法
  useImperativeHandle(tableRef, () => ({
    // 根据条件，当前页、刷新数据
    onReload: refresh,
    // 重置数据，清空选择
    onReset: handleReset,
    // 根据条件，从第一页开始显示、查询数据
    onSearch: handleSearch,
  }));

  useUpdateEffect(() => {
    setCurrentColumns(outColumns);
  }, [outColumns]);

  useMount(() => {
    if (autoRequest) {
      if (hasFromItems) {
        Promise.resolve().then(() => {
          queryFormRef.current?.submit();
        });
      } else {
        paginationAction.changeCurrent(1);
      }
    }
  });

  const toolbarDom = showToolbar ? (
    <div className={`${LIGHTD_TABLE}-toolbar`}>
      <div className={`${LIGHTD_TABLE}-toolbar-content-left`}>{<Space>{toolbarLeft}</Space>}</div>
      <div className={`${LIGHTD_TABLE}-toolbar-content-right`}>
        <Space>
          {toolbarRight}
          <ToolbarAction className={`${LIGHTD_TABLE}-toolbar-action`} />
        </Space>
      </div>
    </div>
  ) : null;

  const tableDom = (
    <Card bordered={false} className={LIGHTD_CARD} {...tableCardProps}>
      {toolbarRender ? toolbarRender(toolbarDom) : toolbarDom}
      <Table
        className={tableClassName}
        style={tableStyle}
        size={currentSize}
        columns={currentColumns}
        loading={restProps?.loading || requestLoading}
        dataSource={data?.list || []}
        onChange={handleTableChange}
        pagination={
          outPagination !== false
            ? {
                showTotal,
                showSizeChanger: true,
                showQuickJumper: true,
                ...outPagination,
                current: paginationAction?.current,
                pageSize: paginationAction?.pageSize,
                total: paginationAction?.total,
              }
            : false
        }
        {...restProps}
        scroll={{ ...(nowrap ? { x: true } : {}), ...restProps?.scroll }}
      />
    </Card>
  );

  const renderTableDom = () => (tableRender ? tableRender(tableDom, props) : tableDom);

  const finallyDom = (
    // 根节点注册
    <TableContext.Provider
      value={{
        reload: refresh,
        size: currentSize,
        setSize: setCurrentSize,
        columns: outColumns,
        setColumns: setCurrentColumns,
      }}
    >
      <div className={classnames(LIGHTD_TABLE, wrapperClassName)}>
        <SearchForm
          loading={!!restProps?.loading || requestLoading}
          ref={handleFormRef}
          cardProps={formCardProps}
          onFinish={handleSearchFormFinish}
          // onReset={handleSearchFormReset}
          formItems={formItems}
          initialValues={formInitialValues}
          {...queryFormProps}
        />
        {tableExtra}
        {renderTableDom()}
      </div>
    </TableContext.Provider>
  );

  return finallyDom;
};

export default BaseTable;
