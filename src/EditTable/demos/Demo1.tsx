import { Space } from 'antd';
import Mock from 'mockjs';
import { useState } from 'react';
import LEditTable from '../EditableTable';

const defaultData = Mock.mock({
  'list|5': [
    {
      'id|+1': 1,
      'age|1-99': 20,
      name: '@cname',
      // birthday: '@date',
    },
  ],
}).list;

const Demo1 = () => {
  const [editableKeys, setEditableKeys] = useState<string[]>([]);

  const columns = [
    {
      dataIndex: 'name',
      title: '名字',
      editable: false,
    },
    {
      dataIndex: 'age',
      title: '年龄',
    },

    {
      title: '操作',
      width: 120,
      render: (_, record) => {
        return (
          <Space>
            {editableKeys.includes(record.id) ? (
              <>
                <a>保存</a>
                <a>取消</a>
              </>
            ) : (
              <>
                <a>编辑</a>
                <a>删除</a>
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
        dataSource={defaultData}
        rowKey="id"
        columns={columns}
        editTableOptions={{
          editableKeys,
          onEditingKeysChange: setEditableKeys,
        }}
      />
    </div>
  );
};

export default Demo1;
