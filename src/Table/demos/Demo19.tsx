import type { RadioChangeEvent } from 'antd';
import { Button, Radio, type FormInstance } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { LTableInstance } from 'lighting-design';
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
];

const options = [
  { label: 'A-类型表格', value: '1' },
  { label: 'B-类型表格', value: '2' },
];

const Demo18: React.FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const [value4, setValue4] = useState(options[0].value);

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue4(value);
  };

  return (
    <div>
      <LTable
        // showToolbar={false}
        toolbarLeft={
          <Radio.Group
            options={options}
            onChange={onChange}
            value={value4}
            optionType="button"
            // buttonStyle="solid"
          />
        }
        toolbarRight={
          <>
            <Button>查看日志</Button>
            <Button>导出数据</Button>
          </>
        }
        isSort
        columns={value4 === '1' ? columns1 : columns2}
        tableRef={tableRef}
        formRef={formRef}
        pagination={{
          showSizeChanger: false,
          showQuickJumper: false,
        }}
        request={async (params, requestType) => {
          const res: Record<string, any> = await apiGetUserList();
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
      />
    </div>
  );
};

export default Demo18;
