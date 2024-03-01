import type { FormInstance, TableProps } from 'antd';
import { Button, Space, Tag, message } from 'antd';
import type { LTableInstance } from 'lighting-design';
import {
  LFormItemDatePicker,
  LFormItemInput,
  LFormItemNumber,
  LFormItemNumberRange,
  LFormItemSelect,
  LTable,
} from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import type { UseShowInstance } from 'rc-use-hooks';
import React, { useRef } from 'react';
import SDrawer from './components/S-Drawer';
import SModal from './components/S-Modal';

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

const dataSource: DataType[] = [
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
    key: '4',
    name: 'Jim Green2',
    age: 42,
    address: 'London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const formItems = [
  <LFormItemSelect
    label="下拉"
    name="select1"
    key="0"
    request={async () => {
      await awaitTime();
      return [
        { label: 'Unresolved', value: 'open' },
        { label: 'Resolved', value: 'closed' },
        { label: 'Resolving', value: 'processing' },
      ];
    }}
  />,

  <LFormItemInput key="1" name="input1" label="输入" />,
  <LFormItemNumber key="3" name="inputNumber1" label="数字输入" />,
  <LFormItemDatePicker key="4" name="date1" label="日期" />,
  <LFormItemNumberRange
    key="5"
    label="范围"
    name="numberRange1"
    placeholder={['请输入左边', '请输入右边']}
    ownColSpans={{ xl: 12, xxl: 12 }}
  />,
];
const App: React.FC = () => {
  const modalRef1 = useRef<UseShowInstance>();
  const modalRef2 = useRef<UseShowInstance>();
  const tableRef = useRef<LTableInstance>();
  const formRef = useRef<FormInstance>();

  return (
    <>
      <LTable
        showToolbar={false}
        // loading // 自行控制加载状态
        queryFormProps={{
          onReset() {
            message.success('点击了重置按钮');
          },
          onFinish() {
            message.success('点击了提交按钮');
          },
        }}
        formItems={formItems}
        columns={columns}
        dataSource={dataSource}
        formRef={formRef}
        toolbarLeft={
          <>
            <Button
              type="primary"
              onClick={() => {
                modalRef1.current?.onShow({});
              }}
            >
              新增
            </Button>
            <Button
              type="primary"
              onClick={() => {
                modalRef1.current?.onShow({
                  input: '吴彦祖',
                  radio: 'a',
                  select: '1',
                });
              }}
            >
              编辑
            </Button>
          </>
        }
        toolbarRight={
          <>
            <Button
              type="primary"
              onClick={() => {
                modalRef2.current?.onShow({});
              }}
            >
              导出
            </Button>
            <Button
              type="primary"
              onClick={() => {
                modalRef2.current?.onShow({
                  input: '陈冠希',
                  radio: 'b',
                  select: '0',
                });
              }}
            >
              审批
            </Button>
          </>
        }
        toolbarActionConfig={{
          onReloadIconChange() {
            console.log('onReloadIconChange');
            message.success('点击了刷新按钮');
          },
        }}
        pagination={{
          defaultPageSize: 3,
          onChange(page, pageSize) {
            console.log('==page====>', page);
            console.log('==pageSize====>', pageSize);
            message.success('点击了分页按钮');
          },
        }}
      />
      <SModal tableRef={tableRef} modalRef={modalRef1} />
      <SDrawer tableRef={tableRef} modalRef={modalRef2} />
    </>
  );
};

export default App;
