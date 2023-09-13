import { Button, Table, Upload } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { excelToJson, getExcelData } from '../utils';

interface DataType {
  key: string;
  name: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => {
  return (
    <>
      <Upload
        onChange={async (files: any[]) => {
          const res = await excelToJson({
            // columns,
            file: files.file.originFileObj,
          });
        }}
      >
        <Button>Click to Upload-1</Button>
      </Upload>
      <Upload
        onChange={async (files: any[]) => {
          const res = await getExcelData(files.file.originFileObj);
          console.log('res', res);
        }}
      >
        <Button>Click to Upload-2</Button>
      </Upload>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

export default App;
