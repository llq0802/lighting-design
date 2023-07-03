import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  phone: number;
  address: string;
}

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (data: DataType, index: number) => {
  // console.log('index', index, data);
  // if (index === 1) {
  //   return { colSpan: 0 };
  // }

  return {};
};

const columns: ColumnsType<DataType> = [
  {
    title: 'RowHead',
    dataIndex: 'key',
    rowScope: 'row',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,

    onCell: (data, index) => {
      console.log('index', index, data);
      if (index === 0) {
        return {
          rowSpan: 2,
        };
      }
      if (index === 1) {
        return {
          rowSpan: 0,
        };
      }
      return {};
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    // onCell: sharedOnCell,
  },
  {
    title: 'Home phone',
    // colSpan: 2,
    dataIndex: 'tel',
    onCell: (data, index) => {
      // if (index === 3) {
      //   return { rowSpan: 2 };
      // }
      // // These two are merged into above cell
      // if (index === 4) {
      //   return { rowSpan: 0 };
      // }
      // if (index === 1) {
      //   return { colSpan: 0 };
      // }

      return {};
    },
  },
  {
    title: 'Phone',
    // colSpan: 0,
    dataIndex: 'phone',
    // onCell: sharedOnCell,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    // onCell: sharedOnCell,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John-1',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'John-2',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'John-3',

    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'John-4',

    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'John-5',

    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
  {
    key: '6',
    name: 'John-6',
    age: 26,
    tel: '0575-22098909',
    phone: 18900010009,
    address: 'Dublin No. 6 Lake Park',
  },
];

const LTreeTable: React.FC = () => (
  <Table columns={columns} dataSource={data} bordered />
);

export default LTreeTable;
