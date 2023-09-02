import { Table } from 'antd';
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
    name: '李岚清',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: '吴彦祖',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: '陈冠希',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: '刘德华',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

const Tables: React.FC = (props) => {
  const { value, onChange, open, setOpen } = props;

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      const names = selectedRows.map((row) => row.name).join(' , ');
      const values = selectedRowKeys?.length ? selectedRowKeys : void 0;
      onChange({
        label: names,
        value: values,
      });
    },
    // getCheckboxProps: (record: DataType) => ({
    //   disabled: record.name === 'Disabled User',
    //   name: record.name,
    // }),
  };

  return (
    <Table
      size="small"
      rowSelection={{
        selectedRowKeys: value,
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default Tables;
