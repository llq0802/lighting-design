import { Card, Pagination, Table, type PaginationProps, type TableProps } from 'antd';
import { useTablePagination } from './hooks/use-table-pagination';
import { useStyles } from './styles';

const LTable = <T extends Record<string, any>>(props: TableProps<T>) => {
  const { pagination, dataSource, request, ...restProps } = props;
  const { styles, cx } = useStyles();

  const hasDataSource = !!dataSource;

  const paginationProps: PaginationProps | false =
    pagination === null || pagination === false
      ? false
      : {
          align: 'end',
          showTotal: (total: number) => `共 ${total} 条数据`,
          total:hasDataSource? dataSource?.length,
          defaultCurrent: 1,
          defaultPageSize: 10,
          ...pagination,
          className: cx(styles.pagination, pagination?.className),
        };

  const {
    innerPagination,
    setInnerPagination,
    pagination: requestPagination,
  } = useTablePagination({
    hasDataSource,
    request,
    defaultCurrent: paginationProps ? paginationProps.defaultCurrent! : 1,
    defaultPageSize: paginationProps ? paginationProps.defaultPageSize! : 10,
  });










  const innerTableData =
    dataSource && dataSource?.length > 0
      ? dataSource.slice(
          (innerPagination.current - 1) * innerPagination.pageSize,
          innerPagination.current * innerPagination.pageSize,
        )
      : [];

  const paginationDom = paginationProps ? (
    <Pagination
      {...paginationProps}
      onChange={(current, pageSize) => {
        setInnerPagination({ current, pageSize });
        paginationProps?.onChange?.(current, pageSize);
      }}
    />
  ) : null;

  const tableDom = <Table loading={false} {...restProps} dataSource={innerTableData} pagination={false} />;

  return (
    <Card>
      {tableDom}
      {paginationDom}
    </Card>
  );
};

export default LTable;
