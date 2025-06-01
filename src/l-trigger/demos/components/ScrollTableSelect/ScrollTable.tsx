import { Spin, Table } from 'antd';
import queryString from 'query-string';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import TableEllipsisCell, { useIntersectionObserver } from './TableEllipsisCell';

function ScrollTable(
  {
    fetchDataHandle,
    url,
    method = 'GET',
    dataSource: dataSourceProps,
    allowChecked,
    onCheckedChange,
    selectedRows,
    summaryWidth,
    hiddenLoading,
    ...rest
  },
  ref,
) {
  const [dataSource, setDataSource] = useState(dataSourceProps);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [searchParams, setSearchParams] = useState({});

  const [hasMore, setHasMore] = useState(true);

  const loadingRef = useRef();

  const { intersecting, disconnect } = useIntersectionObserver(loadingRef);

  // 存放id和数据之间的映射关系 ex: {1: {id: 1, name: '2}}
  const dataMap = useRef({});

  // 当前选中的行改变
  const onSelectChange = (selectedRowKeys) => {
    if (onCheckedChange) {
      // 通过id把当前行信息暴露出去
      onCheckedChange(selectedRowKeys.map((key) => dataMap.current[key]).filter((o) => o));
    }
  };

  const [rowSelection, setRowSelection] = useState(() => ({
    selectedRowKeys: [],
    onChange: onSelectChange,
    columnWidth: 40,
    preserveSelectedRowKeys: true,
    fixed: true,
  }));

  // 对外暴露搜索方法
  useImperativeHandle(
    ref,
    () => {
      return {
        search: async (params) => {
          setSearchParams(params);
          setDataSource([]);
          setPagination((prev) => ({
            ...prev,
            total: 0,
            current: 1,
          }));
        },
      };
    },
    [],
  );

  // 获取数据，这里支持两种获取数据方式，一个是注入请求方法，还有一个是通过url和请求方式在组件内部去请求数据。
  const getData = async (pagination, searchParams) => {
    let requestMethod = fetchDataHandle;

    if (!requestMethod && url) {
      requestMethod = async (params) => {
        return await window
          .fetch([url, queryString.stringify(params)].join(url.includes('?') ? '&' : '?'), {
            method,
          })
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
      };
    }

    if (requestMethod && dataSourceProps === undefined) {
      setLoading(true);
      const { list, total } = await requestMethod({
        pageSize: pagination.pageSize,
        page: pagination.current,
        ...searchParams,
      })
        .then((data) => data)
        .catch(() => null);

      if (list) {
        const newDataSource = [...(dataSource || []), ...list];

        setDataSource(newDataSource);
        setLoading(false);
        setPagination({
          ...pagination,
          total,
        });

        setHasMore(total > newDataSource.length);

        // 没有更多数据了
        if (total <= newDataSource.length) {
          disconnect();
        }
      }
    } else if (dataSourceProps) {
      setLoading(false);
    }
  };

  // 当分页信息或搜索参数发生变化时，设置分页信息
  const tableChange = (pagination) => {
    setPagination(pagination);
  };

  // 当选中的行发生变化时，设置选中的行
  useEffect(() => {
    if (allowChecked) {
      setRowSelection((prev) => ({
        ...prev,
        selectedRowKeys: (selectedRows || []).map((o) => o[rest.rowKey || 'id']),
      }));
    }
  }, [selectedRows]);

  useEffect(() => {
    // 当分页信息或搜索参数发生变化时，重新获取数据
    getData(pagination, searchParams);
  }, [pagination.current, pagination.pageSize, searchParams]);

  // 当数据源发生变化时，更新数据映射
  useEffect(() => {
    dataMap.current = {
      ...dataMap.current,
      ...(dataSource || []).reduce((prev, cur) => {
        prev[cur[rest.rowKey]] = cur;
        return prev;
      }, {}),
    };
  }, [dataSource]);

  // 自定义单元格，当文本超出宽度时，显示省略号，并且显示tooltip
  const columns = useMemo(() => {
    return (rest.columns || []).map((item) => {
      if (!item.ellipsis) return item;
      return {
        ...item,
        render: (text, record, index) => (
          <TableEllipsisCell value={item.render ? item.render(text, record, index) : text} />
        ),
      };
    });
  }, [rest.columns]);

  useEffect(() => {
    if (intersecting) {
      setPagination((prev) => ({
        ...prev,
        current: (prev.current || 1) + 1,
      }));
    }
  }, [intersecting]);

  return (
    <Table
      {...rest}
      columns={columns}
      rowSelection={allowChecked && rowSelection}
      dataSource={dataSource}
      loading={loading}
      pagination={false}
      onChange={tableChange}
      virtual={false}
      tableLayout="fixed"
      summary={() => (
        <Table.Summary.Row>
          {pagination?.total > 0 && !hiddenLoading && (
            <div
              style={{ width: summaryWidth - 23, padding: '10px 0', textAlign: 'center' }}
              ref={loadingRef}
            >
              {hasMore ? <Spin /> : '暂无更多数据'}
            </div>
          )}
        </Table.Summary.Row>
      )}
    />
  );
}

export default forwardRef(ScrollTable);
