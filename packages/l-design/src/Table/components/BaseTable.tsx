import { Card, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import SearchForm from './SearchFrom';

const columns: ColumnsType<any> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data: any[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const BaseTable = () => {
  const tableDom = (
    <Card bordered={false}>
      <Table dataSource={data} columns={columns} />
    </Card>
  );

  return (
    <div>
      <SearchForm />
      {tableDom}
    </div>
  );
};

export default BaseTable;
