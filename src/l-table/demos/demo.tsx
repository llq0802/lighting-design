import { Space, Tag, type TableProps } from 'antd';
import React from 'react';
import LTable from '..';

type PropsType = {};
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
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
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data: DataType[] = new Array(48).fill(null).map((_, i) => ({
  key: i.toString(),
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
  tags: ['nice', 'developer'],
}));

const Index: React.FC<PropsType> = ({}) => {
  return (
    <div>
      <LTable columns={columns} dataSource={data} />
    </div>
  );
};

export default Index;
