import { useMount } from 'ahooks';
import { Card, Flex, Pagination, Table, type PaginationProps, type TableProps } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import LQueryForm from 'lighting-design/l-query-form';
import { isEvenNumber } from 'lighting-design/utils';
import { isPlainObject } from 'lodash-es';
import { useImperativeHandle } from 'react';
import { useDefaultPagination } from './hooks/use-default-pagination';
import { useTablePagination } from './hooks/use-table-pagination';
import { useStyles } from './styles';

const LTable = <T extends Record<string, any>>(props: TableProps<T>) => {
  const {
    className,
    style,
    rowClassName,
    onHeaderRow,
    pagination,
    dataSource,
    columns,
    //
    sort = true,
    rootStyle,
    request,
    autoRequest = true,
    gap = 16,
    actionRef,
    form: outForm,
    formItems,
    toolbar,
    toolbarClassName,
    toolbarStyle,
    rowHoverable = true,
    rowStripe = true,
    borderless = false,
    queryFormProps,
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
  const hasFormItems = formItems?.length > 0;

  const {
    run,
    data: requestData,
    innerPagination,
    setInnerPagination,
    pagination: requestPagination,
  } = useTablePagination({ request, defaultCurrent, defaultPageSize });

  const total = hasDataSource ? dataSource?.length ?? 0 : requestData.total;

  const paginationProps: PaginationProps | false =
    pagination === null || pagination === false
      ? false
      : {
          align: 'end',
          hideOnSinglePage: true,
          showSizeChanger: total > 50,
          showQuickJumper: total > 50,
          showTotal: (total: number) => `共 ${total} 条数据`,
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
            const formValues: Record<string, any> = hasFormItems ? formRef.current?.getFieldsValue() : {};
            run({ formValues, current, pageSize }, 'pagination');
          },
        };

  const getTableColumns = (): ColumnType<any>[] | undefined => {
    if (sort) {
      const sortProps = isPlainObject(sort) ? sort : {};
      const { current, pageSize } = hasDataSource ? innerPagination : requestPagination;
      const render = (t: any, c: any, i: number) => {
        const count = paginationProps ? (current - 1) * pageSize + i + 1 : i + 1;
        return typeof sortProps?.render === 'function' ? sortProps?.render?.(count, t, c, i) : count;
      };
      const sortColumn: ColumnType = {
        title: '序号',
        align: 'center',
        width: 70,
        ...sortProps,
        render,
        dataIndex: '__SORT__',
      };
      return [sortColumn, ...(columns || [])];
    }
    return columns;
  };

  const getTableData = () => {
    if (!paginationProps) return dataSource ?? requestData.list;
    if (hasDataSource) {
      return dataSource?.slice?.(
        (innerPagination.current - 1) * innerPagination.pageSize,
        innerPagination.current * innerPagination.pageSize,
      );
    }
    return requestData.list;
  };

  // 根据传入参数请求
  const handleCustomSearch = (current: number, pageSize: number, extraParams?: Record<string, any>) => {
    if (hasDataSource) return;
    const formValues = hasFormItems ? formRef.current?.getFieldsValue() : {};
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

  useMount(() => {
    if (!autoRequest || hasDataSource) return;
    const formValues: Record<string, any> = hasFormItems ? formRef.current?.getFieldsValue() : {};
    run({ formValues, current: defaultCurrent, pageSize: defaultPageSize }, 'init');
  });

  useImperativeHandle(actionRef, () => ({
    // /** 根据条件，当前页、刷新数据 */
    // onReload: handleReload,
    // /** 重置数据，从第一页开始显示、查询数据 */
    // onReset: handleReset,
    // /** 根据条件，从第一页开始显示、查询数据 */
    // onSearch: handleSearch,
    /** 根据传入参数请求 */
    onCustomSearch: handleCustomSearch,
  }));

  const formDom = (
    <LQueryForm
      items={formItems}
      {...queryFormProps}
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
    <Table
      {...restProps}
      style={rootStyle}
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
    />
  );
  const paginationDom = paginationProps ? <Pagination {...paginationProps} /> : null;
  const innerFormDom = hasFormItems ? <Card className={cx(styles.form_card)}>{formDom}</Card> : null;
  const innerToolbarDom = toolbar ? (
    <Flex align="center" gap={8} className={cx(styles.toolbar, toolbarClassName)} style={toolbarStyle}>
      {toolbarDom}
    </Flex>
  ) : null;

  if (renderLTable) {
    return renderLTable({ formDom, toolbarDom, tableDom, paginationDom }, props);
  }

  if (!hasFormItems) {
    return (
      <Card className={className} style={style}>
        {innerToolbarDom}
        {tableDom}
        {paginationDom}
      </Card>
    );
  }

  const innerTableDom = (
    <Card>
      {innerToolbarDom}
      {tableDom}
      {paginationDom}
    </Card>
  );

  return (
    <Flex vertical gap={gap} className={className} style={style}>
      {innerFormDom}
      {innerTableDom}
    </Flex>
  );
};

export default LTable;
