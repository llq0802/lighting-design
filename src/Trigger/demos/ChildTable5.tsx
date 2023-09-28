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
    age: Mock.Random.integer(25, 45),
    address: Mock.Random.city(true),
  },
  {
    key: '2',
    name: '吴彦祖',
    age: Mock.Random.integer(25, 45),
    address: Mock.Random.city(true),
  },
  {
    key: '3',
    name: '陈冠希',
    age: Mock.Random.integer(25, 45),

    address: Mock.Random.city(true),
  },
  {
    key: '4',
    name: '刘德华',
    age: Mock.Random.integer(25, 45),
    address: Mock.Random.city(true),
  },
  {
    key: '5',
    name: '彭于晏',
    age: Mock.Random.integer(25, 45),
    address: Mock.Random.city(true),
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
        selectedRowKeys: value ?? [],
        type: 'checkbox',
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
