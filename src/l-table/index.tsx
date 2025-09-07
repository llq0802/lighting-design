import { Loading3QuartersOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';
import {
  Card,
  ConfigProvider,
  Flex,
  Pagination,
  Spin,
  Table,
  Tooltip,
  type PaginationProps,
  type SpinProps,
} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import LQueryForm from 'lighting-design/l-query-form';
import { isEvenNumber } from 'lighting-design/utils';
import { isPlainObject } from 'lodash-es';
import { forwardRef, useImperativeHandle, type ReactNode } from 'react';
import { useDefaultPagination } from './hooks/use-default-pagination';
import { useMergeLoading } from './hooks/use-merge-loading';
import { useTablePagination } from './hooks/use-table-pagination';
import type { LTableActionRef, LTableProps } from './interface';
import { useStyles } from './styles';

const LTable: <T = any>(props: LTableProps<T>) => ReactNode = forwardRef((props, ref) => {
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
    tableExtra,
    tableCardProps,
    formCardProps,
    requestAuto = true,
    requestOnce,
    request,
    requestCacheKey,
    requestExtraParams = {},
    requestInitialParams,
    isRequestCacheParams,
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
  const formRef = useLFormInstance(outForm);

  const hasDataSource = !!dataSource;
  const hasFormItems = !!(formItems && formItems?.length > 0);

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
    canRun,
    params: requestParams,
    data: requestData,
    mutate: requestMutate,
    innerPagination,
    setInnerPagination,
    pagination: requestPagination,
  } = useTablePagination({
    request,
    requestAuto,
    requestOnce,
    requestExtraParams,
    requestOptions: innerRequestOptions,
  });

  const loadingProps = useMergeLoading(requestLoading, outLoading);

  const total = hasDataSource ? dataSource?.length ?? 0 : requestData.total;
  const getFormValues = (isReset = false) => {
    if (hasFormItems) {
      if (isReset) formRef.current?.resetFields();
      return formRef.current?.getFieldsValue();
    }
    return {};
  };
  const paginationProps: PaginationProps | false =
    pagination === null || pagination === false
      ? false
      : {
          total,
          align: 'end',
          defaultCurrent,
          defaultPageSize,
          hideOnSinglePage: true,
          showTotal: (t, r) => `显示第 ${r[0]} 条~第 ${r[1]} 条，共 ${t} 条`,
          current: hasDataSource || requestOnce ? innerPagination.current : requestPagination.current,
          pageSize: hasDataSource || requestOnce ? innerPagination.pageSize : requestPagination.pageSize,
          ...pagination,
          className: cx(styles.pagination, pagination?.className),
          onChange: (current, pageSize) => {
            pagination?.onChange?.(current, pageSize);
            if (hasDataSource || requestOnce) {
              setInnerPagination({ current, pageSize });
              return;
            }
            const formValues = getFormValues();
            run({ formValues, current, pageSize }, 'pagination');
          },
        };

  const getTableColumns = (): any[] => {
    let innerColumns: any[] = columns || [];
    if (sort) {
      const sortProps = isPlainObject(sort) ? (sort as any) : {};
      const { current, pageSize } = hasDataSource || requestOnce ? innerPagination : requestPagination;
      const render = (t: any, c: any, i: number) => {
        const count = paginationProps ? (current - 1) * pageSize + i + 1 : i + 1;
        return sortProps?.render ? sortProps?.render?.(count, current, pageSize, i) : count;
      };
      innerColumns = [
        {
          title: '序号',
          align: 'center',
          width: 70,
          ...sortProps,
          render,
          key: '__L_SORT_COLUMNL__',
          dataIndex: '__L_SORT_COLUMNL__',
        },
        ...innerColumns,
      ];
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
    if (!paginationProps) return hasDataSource ? dataSource : requestData.list;

    if (hasDataSource) {
      if (dataSource?.length <= innerPagination.pageSize) {
        return dataSource;
      }

      return dataSource?.slice?.(
        (innerPagination.current - 1) * innerPagination.pageSize,
        innerPagination.current * innerPagination.pageSize,
      );
    }

    if (requestOnce) {
      if (requestData.list?.length <= innerPagination.pageSize) {
        return requestData.list;
      }
      return requestData.list?.slice?.(
        (innerPagination.current - 1) * innerPagination.pageSize,
        innerPagination.current * innerPagination.pageSize,
      );
    }

    if (requestData.list?.length > requestPagination.pageSize) {
      return requestData.list?.slice?.(
        (requestPagination.current - 1) * requestPagination.pageSize,
        requestPagination.current * requestPagination.pageSize,
      );
    }
    return requestData.list;
  };

  const handleCustom: LTableActionRef['onCustom'] = ({ current, pageSize, extraParams, isResetFormValues }) => {
    if (hasDataSource) return;
    if (!canRun) {
      setInnerPagination(() => ({
        current,
        pageSize,
      }));
    }
    const formValues = getFormValues(isResetFormValues);
    run({ ...extraParams, formValues, current, pageSize }, 'custom');
  };

  const handleReload = (extraParams?: Record<string, any>) => {
    if (hasDataSource) return;
    if (!canRun) {
      setInnerPagination((prev) => ({
        current: prev.current,
        pageSize: prev.pageSize,
      }));
    }
    const formValues = getFormValues();
    run(
      { ...extraParams, formValues, current: requestPagination?.current, pageSize: requestPagination?.pageSize },
      'reload',
    );
  };

  const handleReset = (extraParams?: Record<string, any>) => {
    if (hasDataSource) return;
    if (!canRun) {
      setInnerPagination(() => ({
        current: defaultCurrent,
        pageSize: defaultPageSize,
      }));
    }
    const formValues = getFormValues(true);
    run(
      { ...extraParams, ...requestInitialParams, formValues, current: defaultCurrent, pageSize: defaultPageSize },
      'reset',
    );
  };

  const handleSearch = (extraParams?: Record<string, any>) => {
    if (hasDataSource) return;
    if (!canRun) {
      setInnerPagination((prev) => ({
        current: defaultCurrent,
        pageSize: prev.pageSize,
      }));
    }
    const formValues = getFormValues();
    run({ ...extraParams, formValues, current: defaultCurrent, pageSize: requestPagination?.pageSize }, 'search');
  };

  useMount(() => {
    if (!requestAuto) return;
    if (hasDataSource) return;
    if (innerRequestOptions.cacheKey && isRequestCacheParams && requestParams[0]) {
      const { current: cacheCurrent, pageSize: cachePageSize, formValues: cacheFormValues } = requestParams[0];
      if (hasFormItems) {
        formRef.current.setFieldsValue(cacheFormValues);
      }
      run(
        { ...requestInitialParams, formValues: cacheFormValues, current: cacheCurrent, pageSize: cachePageSize },
        'init',
      );
    } else {
      const formValues = getFormValues();
      run({ ...requestInitialParams, formValues, current: defaultCurrent, pageSize: defaultPageSize }, 'init');
    }
  });

  const innerState = {
    tableData: requestData,
    params: requestParams,
    pagination: requestPagination,
    loading: requestLoading,
    initLoading,
    noInitLoading,
  };
  useImperativeHandle(actionRef, () => ({
    onReload: handleReload,
    onReset: handleReset,
    onSearch: handleSearch,
    onCustom: handleCustom,
    setTableData: requestMutate,
    ...innerState,
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
        if (!canRun) {
          setInnerPagination((prev) => ({
            current: defaultCurrent,
            pageSize: prev.pageSize,
          }));
        }
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
      <Table
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
  const paginationDom = paginationProps ? (
    <ConfigProvider locale={zhCN}>
      <Pagination {...paginationProps} />
    </ConfigProvider>
  ) : null;
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
    return renderLTable({ formDom, toolbarDom, tableDom, paginationDom }, innerState, props);
  }

  const innerSpinProps: SpinProps = {
    size: 'large',
    indicator: <Loading3QuartersOutlined spin />,
    ...loadingProps,
  };

  if (!hasFormItems) {
    const innerNoFormTableDom = (
      <>
        {tableExtra}
        <Card
          {...tableCardProps}
          className={cx(className, tableCardProps?.className)}
          style={{ ...style, ...tableCardProps?.style }}
        >
          {innerToolbarDom}
          {tableDom}
          {paginationDom}
        </Card>
      </>
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
      {tableExtra}
      {loadingProps.spinning ? (
        <Spin {...innerSpinProps} spinning>
          {innerTableDom}
        </Spin>
      ) : (
        innerTableDom
      )}
    </Flex>
  );
});

export default LTable;
export * from './interface';
