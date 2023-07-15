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
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

const Tables: React.FC = (props) => {
  const {
    value: outValue,
    onChange: outOnChange,
    open,
    setOpen,
    ...restProps
  } = props;

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
      style={{ padding: 8 }}
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