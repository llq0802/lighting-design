import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import Mock from 'better-mock';
import type { LTriggerMode, LValueType } from 'lighting-design';
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
  fieldNames?: {
    label: string;
    value: string;
  };
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
  const {
    value: outValue,
    onChange: outOnChange,
    open,
    setOpen,
    labelInValue,
    mode,
    fieldNames,
  } = props;

  function getValue() {
    if (!outValue) return [];
    let innerVal = outValue;
    if (labelInValue) {
      innerVal = outValue?.[fieldNames?.value as string];
    }
    if (mode === 'radio' || mode === 'radioTag') {
      return [innerVal];
    }
    return innerVal;
  }

  const rowSelection = {
    type: mode?.includes('radio') ? 'radio' : 'checkbox',
    preserveSelectedRowKeys: true,
    selectedRowKeys: getValue(),
    onChange: (selectedRowKeys: (string | number)[], selectedRows: DataType[]) => {
      let selectedNames: LValueType = selectedRows?.map((item) => item?.name);
      let selectedKeys: LValueType = selectedRowKeys;

      if (mode === 'radio' || mode === 'radioTag') {
        selectedNames = selectedNames[0];
        selectedKeys = selectedKeys[0];
      }

      outOnChange!({
        [fieldNames!.label]: selectedNames,
        [fieldNames!.value]: selectedKeys,
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
