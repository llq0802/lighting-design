import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  { key: '2', name: 'Jim Green', age: 42 },
  { key: '3', name: 'Joe Black', age: 32 },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
  },
];
const Tables: React.FC = (props) => {
  const { value: outValue, onChange: outOnChange, open, setOpen } = props;

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      outOnChange({
        label: selectedRows.map((row) => row.name),
        value: selectedRowKeys,
      });
    },
  };

  return (
    <Table
      style={{ width: 450 }}
      size="small"
      rowSelection={{
        selectedRowKeys: outValue ?? [],
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default Tables;
