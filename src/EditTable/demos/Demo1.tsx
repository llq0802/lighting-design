import { useMount } from 'ahooks';
import { Button, Space } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LFormItemNumber } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import Mock from 'mockjs';
import { useRef, useState } from 'react';
import LEditTable from '../EditableTable';

const defaultData = Mock.mock({
  'list|5': [
    {
      'id|+1': 11,
      'age|1-99': 20,
      name: '@cname',
      // birthday: '@date',
    },
  ],
}).list;

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框1" />,
  <LFormItemInput key="1" name="input5" label="输入框2" />,
  <LFormItemInput key="2" name="input6" label="输入框3" />,
];

const Demo1 = () => {
  const tableRef = useRef<LTableInstance>();

  const [editableKeys, setEditableKeys] = useState<string[]>([]);
  const editTableRef = useRef();

  useMount(() => {
    console.log('useMount-tableRef.current', tableRef.current);
  });

  const columns = [
    {
      dataIndex: 'name',
      title: '名字',
      editable: <LFormItemInput required />,
    },
    {
      dataIndex: 'age',
      title: '年龄',
      editable: <LFormItemNumber required />,
    },

    {
      title: '操作',
      width: 120,
      render: (_, record) => {
        return (
          <Space>
            {editableKeys.includes(record.id) ? (
              <>
                <a onClick={() => editTableRef.current?.save(record.id)}>
                  保存
                </a>
                <a onClick={() => editTableRef.current?.cancel(record.id)}>
                  取消
                </a>
              </>
            ) : (
              <>
                <a onClick={() => editTableRef.current?.edit(record)}>编辑</a>
                <a onClick={() => editTableRef.current?.delete(record.id)}>
                  删除
                </a>
              </>
            )}
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <LEditTable
        isSort
        tableRef={tableRef}
        formItems={formItems}
        // size="small"
        toolbarLeft={
          <>
            <Button onClick={() => editTableRef.current?.push()}>push</Button>
            <Button onClick={() => editTableRef.current?.unshift()}>
              unshift
            </Button>
          </>
        }
        // dataSource={defaultData}
        request={async () => {
          await awaitTime();
          return {
            success: true,
            data: defaultData,
            total: defaultData.length,
          };
        }}
        rowKey="id"
        columns={columns}
        editTableOptions={{
          editTableRef,
          editingKeys: editableKeys,
          onEditingKeys: setEditableKeys,
          async onSave(row, isNewRow) {
            console.log('row ', row);
            console.log('isNewRow ', isNewRow);
            return Promise.reject();
          },
        }}
      />
    </div>
  );
};

export default Demo1;
