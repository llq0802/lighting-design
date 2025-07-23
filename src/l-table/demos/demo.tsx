import { Tag, type TableProps } from 'antd';
import { LFormItemInput } from 'lighting-design';
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
];
const data: DataType[] = new Array(48).fill(null).map((_, i) => ({
  key: i.toString(),
  name: `Edward King ${i + 1}`,
  age: i + 1,
  address: `London, Park Lane no. ${i + 1}`,
  tags: ['nice', 'developer'],
}));

const Index: React.FC<PropsType> = ({}) => {
  return (
    <div
      style={{
        outline: '1px solid red',
        // height: 500,
      }}
    >
      <LTable
        rootClassName="my-table-root-1"
        formItems={[
          {
            content: <LFormItemInput name="input1" label="输入框1" />,
          },
          <LFormItemInput name="input2" label="输入框2" />,
          <LFormItemInput name="input3" label="输入框3" />,
          <LFormItemInput name="input4" label="输入框3" />,
          <LFormItemInput name="input5" label="输入框3" />,
        ]}
        columns={columns}
        // dataSource={data}
        request={async (params) => {
          console.log('params', params);
          return {
            data: data.slice((params.current - 1) * params.pageSize, params.current * params.pageSize),
            total: data.length,
          };
        }}
        // pagination={false}
        onChange={(...args) => {
          console.log('change', args);
        }}
      />
    </div>
  );
};

export default Index;
