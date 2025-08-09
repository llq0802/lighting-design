import type { RadioChangeEvent } from 'antd';
import { Button, Radio, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { LTableActionRef } from 'lighting-design';
import { LTable } from 'lighting-design';
import React, { useRef, useState } from 'react';
import { apiGetUserList } from './service';

const columns1: ColumnsType<any> = [
  {
    title: '姓名-A',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '年龄-A',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
];
const columns2: ColumnsType<any> = [
  {
    title: '姓名-B',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄-B',
    dataIndex: 'age',
    key: 'age',
  },
  {
    key: '_operation_',
    title: '操作',
    render() {
      return <Button type="text">操作</Button>;
    },
  },
];

const options = [
  { label: 'A-类型表格', value: 1 },
  { label: 'B-类型表格', value: 0 },
];

const Demo18: React.FC = () => {
  const actionRef = useRef<LTableActionRef>();
  const [type, setType] = useState(options[0].value);
  const [columns, setColumns] = useState(columns1);
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setType(value);
    actionRef.current?.onReset();
    setColumns(value ? [...columns1] : [...columns2]);
  };

  return (
    <div>
      <LTable
        rowKey="id"
        size="middle"
        sortColumn={{
          render: (count) => <Tag>{count}</Tag>,
        }}
        toolbar={<Radio.Group value={type} options={options} onChange={onChange} optionType="button" />}
        columns={columns}
        actionRef={actionRef}
        pagination={{
          showSizeChanger: false,
          showQuickJumper: false,
        }}
        request={async (params, requestType) => {
          const res = await apiGetUserList(params);
          return res;
        }}
      />
    </div>
  );
};

export default Demo18;
