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
  'list|40': [
    {
      'key|+1': 1,
      name: '@cname',
      address: '@county(true)',
      'age|10-30': 10,
    },
  ],
}).list;

const Tables: React.FC<Record<string, any>> = (props) => {
  const { value: outValue, onChange: outOnChange, open, setOpen } = props;

  console.log('ChildTable6-props', props.labelInValue, props.mode);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      outOnChange({ name: selectedRows[0].name, id: selectedRowKeys[0] });
      setOpen(false);
    },
  };

  return (
    <Table
      pagination={{ defaultPageSize: 8 }}
      style={{ width: 500 }}
      size="small"
      rowSelection={{
        selectedRowKeys: outValue ? [outValue?.id] : [],
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
