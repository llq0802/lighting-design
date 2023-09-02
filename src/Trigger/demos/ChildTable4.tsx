import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
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

const data: DataType[] = [
  { key: '1', name: 'John-1', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '4', name: 'John-2', age: 99, address: 'Sidney No. 1 Lake Park' },
  { key: '2', name: 'JimGreen', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'JoeBlack', age: 32, address: 'Sidney No. 1 Lake Park' },
];

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
      dataSource={data}
    />
  );
};

export default Tables;
