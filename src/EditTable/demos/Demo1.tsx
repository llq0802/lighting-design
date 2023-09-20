import { Button, Space } from 'antd';
import { LFormItemInput, LFormItemNumber } from 'lighting-design';
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

const Demo1 = () => {
  const [editableKeys, setEditableKeys] = useState<string[]>([]);
  const editTableRef = useRef();

  const columns = [
    {
      dataIndex: 'name',
      title: '名字',
      editable: <LFormItemInput />,
    },
    {
      dataIndex: 'age',
      title: '年龄',
      editable: <LFormItemNumber />,
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
        // size="middle"
        toolbarLeft={
          <Button onClick={() => editTableRef.current?.push()}>push</Button>
        }
        dataSource={defaultData}
        rowKey="id"
        columns={columns}
        editTableOptions={{
          editTableRef,
          editingKeys: editableKeys,
          onEditingKeysChange: setEditableKeys,
        }}
      />
    </div>
  );
};

export default Demo1;
