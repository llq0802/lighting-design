import { useMount } from 'ahooks';
import { Card, Flex, Pagination, Table, type PaginationProps, type TableProps } from 'antd';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import LQueryForm from 'lighting-design/l-query-form';
import { isEvenNumber } from 'lighting-design/utils';
import { useDefaultPagination } from './hooks/use-default-pagination';
import { useTablePagination } from './hooks/use-table-pagination';
import { useStyles } from './styles';

const LTable = <T extends Record<string, any>>(props: TableProps<T>) => {
  const {
    className,
    style,
    pagination,
    dataSource,
    //
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
            run({ ...formValues, current, pageSize });
          },
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

  useMount(() => {
    if (!autoRequest || hasDataSource) return;
    const formValues: Record<string, any> = hasFormItems ? formRef.current?.getFieldsValue() : {};
    run({ ...formValues, current: defaultCurrent, pageSize: defaultPageSize });
  });

  const formDom = (
    <LQueryForm
      items={formItems}
      {...queryFormProps}
      form={formRef.current}
      onFinish={(formValues) => {
        run(
          {
            current: defaultCurrent,
            pageSize: requestPagination?.pageSize,
            formValues,
          },
          'onSearch',
        );
      }}
    />
  );

  const toolbarDom = toolbar;
  const tableDom = (
    <Table
      style={rootStyle}
      {...restProps}
      dataSource={getTableData()}
      rowClassName={(record, i, indent) => {
        return cx(
          rowStripe && isEvenNumber(i + 1) ? styles.row_stripe : '',
          rowHoverable && styles.row_hover,

          borderless && styles.row_borderless,
          typeof restProps.rowClassName === 'function'
            ? restProps.rowClassName?.(record, i, indent)
            : restProps.rowClassName,
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
    return renderLTable({ formDom, tableDom, paginationDom }, props);
  }

  if (!hasFormItems) {
    return (
      <Card data-l-table className={className} style={style}>
        {innerToolbarDom}
        {tableDom}
        {paginationDom}
      </Card>
    );
  }

  return (
    <Flex vertical gap={gap} className={className} style={style}>
      {innerFormDom}
      <Card>
        {innerToolbarDom}
        {tableDom}
        {paginationDom}
      </Card>
    </Flex>
  );
};

export default LTable;
