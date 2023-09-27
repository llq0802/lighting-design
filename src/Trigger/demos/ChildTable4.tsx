import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Mock from 'better-mock';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', render: (text: string) => <a>{text}</a> },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];

const dataSource: DataType[] = Mock.mock({
  'list|25': [
    {
      key: '@id',
      name: '@cname',
      address: '@county(true)',
      'age|10-30': 10,
    },
  ],
}).list;

const Tables: React.FC = (props) => {
  const { value: outValue, onChange: outChange, open, setOpen } = props;
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      outChange({
        label: selectedRows.map((row) => row.name),
        value: selectedRowKeys,
      });
      setOpen(false);
    },
    // getCheckboxProps: (record: DataType) => ({
    //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //   name: record.name,
    // }),
  };

  return (
    <Table
      pagination={{
        defaultPageSize: 5,
      }}
      style={{ width: 500 }}
      size="small"
      rowSelection={{
        selectedRowKeys: outValue,
        type: 'radio',
        // 当数据被删除时仍然保留选项的 key， 对于通过异步请求的数据十分有用
        preserveSelectedRowKeys: true,
        ...rowSelection,
      }}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default Tables;
