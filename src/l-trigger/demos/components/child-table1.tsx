import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import Mock from 'better-mock';
import type { LTriggerMode } from 'lighting-design';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

interface LTriggerChildProps {
  value?: any;
  onChange?: (value: any) => void;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  labelInValue?: boolean;
  mode?: LTriggerMode;
  [key: string]: any;
}

const columns: ColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', render: (text: string) => <a>{text}</a> },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];

const dataSource: DataType[] = Mock.mock({
  'list|25': [{ 'key|+1': 1, name: '@cname', address: '@county(true)', 'age|10-30': 10 }],
}).list;

const ChildTable1: React.FC<LTriggerChildProps> = (props) => {
  const { open, value, onChange: outOnChange, setOpen, labelInValue, mode } = props;

  function getType() {
    return mode?.includes('radio') ? 'radio' : 'checkbox';
  }
  function getValue() {
    const innerVal = labelInValue ? value?.value : value;
    if (mode === 'radio' || mode === 'radioTag') {
      return [innerVal];
    }
    return innerVal;
  }

  const rowSelection = {
    preserveSelectedRowKeys: true,
    type: getType(),
    selectedRowKeys: getValue(),
    onChange: (selectedRowKeys: (string | number)[], selectedRows: DataType[]) => {
      let selectedNames = selectedRows?.map((item) => item?.name);
      let selectedKeys = selectedRowKeys;

      if (mode === 'radio' || mode === 'radioTag') {
        selectedNames = selectedNames[0];
        selectedKeys = selectedKeys[0];
      }

      outOnChange!({
        label: selectedNames,
        value: selectedKeys,
      });

      if (mode?.includes('radio')) setOpen!(false);
    },
  };

  return (
    <Table
      pagination={{ defaultPageSize: 6 }}
      size="small"
      rowSelection={rowSelection as TableRowSelection<DataType>}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default ChildTable1;
