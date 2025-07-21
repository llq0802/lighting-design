import { Card, Pagination, Table, type PaginationProps } from 'antd';
import { usePagination } from './hooks/use-pagination';
import { useStyles } from './styles';

const LTable = <T extends Record<string, any>>(props) => {
  const { pagination, dataSource } = props;

  const { styles, cx } = useStyles();

  usePagination(pagination);

  const paginationProps: PaginationProps =
    typeof pagination === 'boolean'
      ? false
      : {
          align: 'end',
          showTotal: (total: number) => `共 ${total} 条数据`,
          total: dataSource?.length || 0,
          ...pagination,
          onChange(page, pageSize) {
            pagination?.onChange(page, pageSize);
          },
          className: cx(styles.pagination, pagination?.className),
        };

  const paginationDom = paginationProps ? <Pagination {...paginationProps} /> : null;

  const tableDom = (
    <Table
      // loading
      {...props}
      pagination={false}
    />
  );

  return (
    <Card>
      {tableDom}
      {paginationDom}
    </Card>
  );
};

export default LTable;
