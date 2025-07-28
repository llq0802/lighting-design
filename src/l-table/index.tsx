import { LoadingOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';
import { Card, ConfigProvider, Flex, Pagination, Spin, Table, Tooltip, type PaginationProps } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import LQueryForm from 'lighting-design/l-query-form';
import { isEvenNumber } from 'lighting-design/utils';
import { isPlainObject } from 'lodash-es';
import { forwardRef, useImperativeHandle } from 'react';
import { useDefaultPagination } from './hooks/use-default-pagination';
import { useMergeLoading } from './hooks/use-merge-loading';
import { useTablePagination } from './hooks/use-table-pagination';
import type { LTableProps } from './interface';
import { useStyles } from './styles';
const LTable = <T extends Record<string, any>>(props: LTableProps<T>, ref: any) => {
  const {
    className,
    style,
    rowClassName,
    onHeaderRow,
    pagination,
    dataSource,
    columns,
    loading: outLoading,
    //
    gap = 16,
    tableClassName,
    tableStyle,
    tableCardProps,
    formCardProps,
    autoRequest = true,
    request,
    requestCacheKey,
    defaultRequestParams,
    requestCacheParams,
    requestOptions,
    actionRef,
    form: outForm,
    formItems,
    formInitialValues,
    queryFormProps,
    toolbar,
    toolbarClassName,
    toolbarStyle,
    sortColumn: sort,
    rowHoverable = true,
    rowStripe = true,
    borderless = false,
    renderEmpty,
    renderLTable,
    ...restProps
  } = props;
  const { styles, cx } = useStyles({
    rowHoverable,
    rowStripe,
  });
  const { defaultCurrent, defaultPageSize } = useDefaultPagination(pagination);
  const formRef = useLFormInstance(queryFormProps?.form ?? outForm);

  const hasDataSource = !!dataSource;
  const hasFormItems = formItems && formItems?.length > 0;

  const innerRequestOptions = {
    cacheKey: requestCacheKey,
    ...requestOptions,
    defaultCurrent,
    defaultPageSize,
  };

  const {
    loading: requestLoading,
    initLoading,
    noInitLoading,
    run,
    params: requestParams,
    data: requestData,
    mutate: requestMutate,
    innerPagination,
    setInnerPagination,
    pagination: requestPagination,
  } = useTablePagination({
    request,
    requestOptions: innerRequestOptions,
  });

  const loadingProps = useMergeLoading(requestLoading, outLoading);

  const total = hasDataSource ? dataSource?.length ?? 0 : requestData.total;
  const getFormValues = () => {
    if (hasFormItems) {
      return formRef.current?.getFieldsValue();
    }
    return {};
  };

  const paginationProps: PaginationProps | false =
    pagination === null || pagination === false
      ? false
      : {
          // disabled: loadingProps.spinning,
          align: 'end',
          hideOnSinglePage: true,
          showSizeChanger: total > 50,
          showQuickJumper: total > 50,
          showTotal: (t) => `共 ${t} 条数据`,
          total,
          current: hasDataSource ? void 0 : requestPagination.current,
          pageSize: hasDataSource ? void 0 : requestPagination.pageSize,
          defaultCurrent,
          defaultPageSize,
          ...pagination,
          className: cx(styles.pagination, pagination?.className),
          onChange: (current, pageSize) => {
            pagination?.onChange?.(current, pageSize);
            if (hasDataSource) {
              setInnerPagination({ current, pageSize });
              return;
            }
            const formValues = getFormValues();
            run({ formValues, current, pageSize }, 'pagination');
          },
        };

  const getTableColumns = () => {
    let innerColumns = columns || [];
    if (sort) {
      const sortProps = isPlainObject(sort) ? (sort as any) : {};
      const { current, pageSize } = hasDataSource ? innerPagination : requestPagination;
      const render = (t: any, c: any, i: number) => {
        const count = paginationProps ? (current - 1) * pageSize + i + 1 : i + 1;
        return typeof sortProps?.render === 'function' ? sortProps?.render?.(count, current, pageSize, i) : count;
      };
      const sortColumn = {
        title: '序号',
        align: 'center',
        width: 70,
        ...sortProps,
        render,
        dataIndex: '__SORT__',
      };
      innerColumns = [sortColumn, ...innerColumns];
    }
    return innerColumns?.map((item) => {
      if (item.toolTip && !item.ellipsis) {
        return {
          ...item,
          ellipsis: { showTitle: false },
          render: (text: any, row: Record<string, any>, i: number) => {
            return (
              <Tooltip placement="topLeft" title={text} {...(isPlainObject(item.toolTip) ? item.toolTip : {})}>
                {item?.render ? item?.render(text, row, i) : text}
              </Tooltip>
            );
          },
        };
      }
      return item;
    });
  };

  const getTableData = () => {
    if (hasDataSource) {
      if (!paginationProps) return dataSource;
      return dataSource?.slice?.(
        (innerPagination.current - 1) * innerPagination.pageSize,
        innerPagination.current * innerPagination.pageSize,
      );
    }
    return requestData.list;
  };

  const handleCustom = (current: number, pageSize: number, extraParams?: Record<string, any>) => {
    if (hasDataSource) return;
    const formValues = getFormValues();
    run(
      {
        ...extraParams,
        formValues,
        current,
        pageSize,
      },
      'custom',
    );
  };

  const handleReload = (extraParams?: Record<string, any>) => {
    if (hasDataSource) return;
    const formValues = getFormValues();
    run(
      {
        ...extraParams,
        formValues,
        current: requestPagination?.current,
        pageSize: requestPagination?.pageSize,
      },
      'reload',
    );
  };

  const handleReset = (extraParams?: Record<string, any>) => {
    if (hasDataSource) return;
    const formValues = getFormValues();
    run(
      {
        ...defaultRequestParams,
        ...extraParams,
        formValues,
        current: defaultCurrent,
        pageSize: defaultPageSize,
      },
      'reset',
    );
  };

  const handleSearch = (extraParams?: Record<string, any>) => {
    if (hasDataSource) return;
    const formValues = getFormValues();
    run(
      {
        ...extraParams,
        formValues,
        current: defaultCurrent,
        pageSize: requestPagination?.pageSize,
      },
      'search',
    );
  };

  useMount(() => {
    if (!autoRequest) return;
    if (hasDataSource) return;
    if (innerRequestOptions.cacheKey && requestCacheParams && requestParams[0]) {
      const { current: cacheCurrent, pageSize: cachePageSize, formValues: cacheFormValues, ...rest } = requestParams[0];
      if (hasFormItems) {
        formRef.current.setFieldsValue(cacheFormValues);
      }
      run(
        {
          ...rest,
          ...defaultRequestParams,
          formValues: cacheFormValues,
          current: cacheCurrent,
          pageSize: cachePageSize,
        },
        'init',
      );
    } else {
      const formValues = getFormValues();
      run(
        {
          ...defaultRequestParams,
          formValues,
          current: defaultCurrent,
          pageSize: defaultPageSize,
        },
        'init',
      );
    }
  });

  useImperativeHandle(actionRef, () => ({
    /** 根据条件，当前页、刷新数据 */
    onReload: handleReload,
    /** 重置数据，从第一页开始显示、查询数据 */
    onReset: handleReset,
    /** 根据条件，从第一页开始显示、查询数据 */
    onSearch: handleSearch,
    /** 根据传入参数请求 */
    onCustom: handleCustom,
    tableData: requestData,
    setTableData: requestMutate,
    params: requestParams,
    pagination: requestPagination,
    loading: requestLoading,
    initLoading,
    noInitLoading,
  }));

  const formDom = (
    <LQueryForm
      items={formItems!}
      initialValues={formInitialValues}
      {...queryFormProps}
      submitter={
        typeof queryFormProps?.submitter === 'boolean'
          ? false
          : {
              disabled: loadingProps.spinning,
              ...queryFormProps?.submitter,
              onReset: (e) => {
                handleReset();
                queryFormProps?.submitter && queryFormProps?.submitter?.onReset?.(e);
              },
            }
      }
      form={formRef.current}
      onFinish={(formValues) => {
        queryFormProps?.onFinish?.(formValues);
        if (hasDataSource) return;
        run(
          {
            formValues,
            current: defaultCurrent,
            pageSize: requestPagination?.pageSize,
          },
          'search',
        );
      }}
    />
  );

  const toolbarDom = toolbar;
  const tableDom = (
    <ConfigProvider renderEmpty={renderEmpty} locale={zhCN}>
      <Table<T>
        {...restProps}
        ref={ref}
        className={tableClassName}
        style={tableStyle}
        columns={getTableColumns()}
        dataSource={getTableData()}
        onHeaderRow={(record, i) => {
          const headerRowProps = typeof onHeaderRow === 'function' ? onHeaderRow?.(record, i) : {};
          return {
            ...headerRowProps,
            className: cx(borderless && styles.header_borderless, headerRowProps.className),
          };
        }}
        rowClassName={(record, i, indent) => {
          return cx(
            rowStripe && isEvenNumber(i + 1) ? styles.row_stripe : '',
            rowHoverable && styles.row_hover,
            borderless && styles.row_borderless,
            typeof rowClassName === 'function' ? rowClassName?.(record, i, indent) : rowClassName,
          );
        }}
        pagination={false}
        rowHoverable={false}
        loading={false}
      />
    </ConfigProvider>
  );
  const paginationDom = paginationProps ? <Pagination {...paginationProps} /> : null;
  const innerFormDom = hasFormItems ? (
    <Card {...formCardProps} className={cx(styles.form_card, formCardProps?.className)}>
      {formDom}
    </Card>
  ) : null;
  const innerToolbarDom = toolbar ? (
    <Flex align="center" gap={8} className={cx(styles.toolbar, toolbarClassName)} style={toolbarStyle}>
      {toolbarDom}
    </Flex>
  ) : null;

  if (renderLTable) {
    return renderLTable({ formDom, toolbarDom, tableDom, paginationDom }, props);
  }

  const innerSpinProps = {
    ...loadingProps,
    indicator: <LoadingOutlined spin style={{ fontSize: loadingProps?.style?.fontSize || 36 }} />,
  };

  if (!hasFormItems) {
    const innerNoFormTableDom = (
      <Card className={className} style={style}>
        {innerToolbarDom}
        {tableDom}
        {paginationDom}
      </Card>
    );

    return loadingProps.spinning ? (
      <Spin {...innerSpinProps} spinning>
        {innerNoFormTableDom}
      </Spin>
    ) : (
      innerNoFormTableDom
    );
  }

  const innerTableDom = (
    <Card {...tableCardProps}>
      {innerToolbarDom}
      {tableDom}
      {paginationDom}
    </Card>
  );

  return (
    <Flex vertical gap={gap} className={className} style={style}>
      {innerFormDom}
      {loadingProps.spinning ? (
        <Spin {...innerSpinProps} spinning>
          {innerTableDom}
        </Spin>
      ) : (
        innerTableDom
      )}
    </Flex>
  );
};

export default forwardRef(LTable);
