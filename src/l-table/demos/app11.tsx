import { Button, Flex, Tag } from 'antd';
import Mock from 'better-mock';
import {
  LForm,
  LFormItemInput,
  LFormItemSelect,
  LTable,
  type LTableActionRef,
  type LTableProps,
} from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React, { useRef } from 'react';
import { type DataType } from './service';

type PropsType = {};

const columns: LTableProps<DataType>['columns'] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '出生年月',
    dataIndex: 'birthday',
    key: 'birthday',
    align: 'center',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    toolTip: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (text: string) => <Tag>{text}</Tag>,
  },
  {
    title: '婚姻',
    dataIndex: 'isMarried',
    render: (v: string) => <Tag color={v ? 'green-inverse' : 'blue-inverse'}> {v ? '已婚' : '未婚'}</Tag>,
  },
];

const App: React.FC<PropsType> = ({}) => {
  const [form] = LForm.useForm();
  const actionRef = useRef<LTableActionRef>();
  return (
    <LTable
      rowKey="id"
      actionRef={actionRef}
      form={form}
      formItems={[
        <LFormItemInput label="输入框1" name="input1" />,
        <LFormItemInput label="输入框2" name="input2" />,
        <LFormItemSelect
          label="下拉框1"
          name="select1"
          options={Mock.mock({ 'list|5': [{ label: '@cname', value: '@id' }] }).list}
        />,
      ]}
      toolbar={
        <Flex gap={8} flex={1}>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
          <Button>按钮4</Button>
          <Button type="primary" style={{ marginLeft: 'auto' }}>
            按钮4
          </Button>
          <Button type="primary">按钮5</Button>
        </Flex>
      }
      columns={columns}
      request={async (params, type) => {
        await sleep();
        const list: DataType[] = Mock.mock({
          [`list|${95}`]: [
            {
              id: '@id',
              name: '@cname',
              'sex|1': ['男', '女'],
              'age|10-50': 10,
              phone: '@integer(10000000000,99999999999)',
              birthday: `@date`,
              'status|1': ['启用', '禁用'],
              address: `@province@city@county`,
              'isMarried|1': [true, false],
            },
          ],
        }).list;
        return {
          list,
          total: list.length,
        };
      }}
    />
  );
};

export default App;
