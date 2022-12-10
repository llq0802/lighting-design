import { useMount, usePagination } from 'ahooks';
import type { CardProps, FormInstance } from 'antd';
import { Card, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import type { CSSProperties, FC, MutableRefObject, ReactElement, ReactNode } from 'react';
import { useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import type { LQueryFormProps } from '../../Form/components/QueryForm';
import SearchForm, { LIGHTD_CARD } from './SearchFrom';
import './styles.less';

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
  showToolbarAction: boolean;
  /** 重新渲染toolBar 包括内置表格工具 */
  toolbarRender: (dom: ReactElement) => ReactNode;
  /** 重新渲染表格 */
  tableRender: (dom: ReactElement) => ReactNode;
  /** 整个toolBar的左侧 */
  toolbarLeft: ReactNode;
  /** 整个toolBar的右侧 在内置表格工具左侧 */
  toolbaRight: ReactNode;
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

// 显示数据总量
const showTotal = (total: number) => `共 ${total} 条数据`;

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

    tableClassName,
    tableStyle,

    formItems = [],

    pagination: outPagination,

    ...restProps
  } = props;

  const queryFormRef = useRef<FormInstance | null>(null);
  // 绑定SearchForm组件form实例
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

  const {
    data,
    loading: requestLoading,
    run,
    refresh,
    params,
    pagination: paginationAction,
  } = usePagination(
    async (arg, requestType) => {
      console.log('...arg ', arg);
      const res = await request(arg, requestType);
      if (!res?.success) {
        return {
          list: [],
          total: 0,
        };
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
          current: 1,
          pageSize: outPaginationPageSize,
          formValues: formValues,
        },
        'onSearch',
      );
    },
    [outPaginationPageSize, run],
  );

  // 默认 onReset 中已经重置表单，这里只从第一页开始显示、查询数据请求
  const handleSearchFormReset = useCallback(() => {
    handleSearch('onReset');
  }, [handleSearch]);

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
  const tableDom = (
    <Card bordered={false} className={LIGHTD_CARD} {...tableCardProps}>
      <Table
        className={tableClassName}
        style={tableStyle}
        loading={requestLoading}
        dataSource={data?.list}
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

  return (
    <div>
      <SearchForm
        ref={handleFormRef}
        cardProps={formCardProps}
        onFinish={handleSearchFormFinish}
        onReset={handleSearchFormReset}
        loading={requestLoading}
        formItems={formItems}
        initialValues={formInitialValues}
        {...queryFormProps}
      />
      {tableDom}
    </div>
  );
};

export default BaseTable;
