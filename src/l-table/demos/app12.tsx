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

const options = Mock.mock({ 'list|5': [{ label: '@cname', value: '@id' }] }).list;

const columns: LTableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
  },
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
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
    align: 'center',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (v: string) => <Tag color={v ? 'magenta' : 'cyan'}>{v ? '正常' : '待业'}</Tag>,
  },
  {
    title: '婚姻',
    dataIndex: 'isMarried',
    render: (v: string) => <Tag color={v ? 'green-inverse' : 'blue-inverse'}> {v ? '已婚' : '未婚'}</Tag>,
  },
];

const list: DataType[] = Mock.mock({
  [`list|${95}`]: [
    {
      'id|+1': 1,
      name: '@cname',
      'sex|1': ['男', '女'],
      'age|10-50': 10,
      phone: '@phone',
      birthday: `@date`,
      'status|1': [1, 0],
      address: `@province@city@county`,
      'isMarried|1': [true, false],
    },
  ],
}).list;

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
        <LFormItemSelect label="下拉框1" name="select1" options={options} />,
      ]}
      toolbar={
        <Flex gap={8} flex={1}>
          <Button onClick={() => actionRef.current?.onReload()}>onReload</Button>
          <Button onClick={() => actionRef.current?.onReset()}>onReset</Button>
          <Button onClick={() => actionRef.current?.onSearch()}>onSearch</Button>
          <Button onClick={() => actionRef.current?.onCustom({ current: 2, pageSize: 10 })}>onCustom</Button>
          <Button
            type="primary"
            style={{ marginLeft: 'auto' }}
            onClick={() =>
              form.setFieldsValue({
                input1: 'input1',
                input2: 'input2',
                select1: options[1].value,
              })
            }
          >
            设置表单值
          </Button>
          <Button type="primary" onClick={() => form.resetFields()}>
            重置表单值
          </Button>
        </Flex>
      }
      columns={columns}
      requestOnce
      request={async (params, type) => {
        await sleep();
        return {
          list,
          total: list.length,
        };
      }}
    />
  );
};

export default App;
