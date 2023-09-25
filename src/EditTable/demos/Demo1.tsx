import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import type { LEditTableInstance, LTableInstance } from 'lighting-design';
import { LEditTable, LFormItemInput, LFormItemNumber } from 'lighting-design';
import Mock from 'mockjs';
import { useRef, useState } from 'react';

const defaultData = Mock.mock({
  'list|5': [
    {
      'id|+1': 11,
      'age|1-99': 20,
      name: '@cname',
    },
  ],
}).list;

const Demo1 = () => {
  const tableRef = useRef<LTableInstance>();
  const [editingKeys, setEditingKeys] = useState<string[]>([]);
  const editTableRef = useRef<LEditTableInstance>();

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
      width: 180,
      align: 'center',
      render: (_, record, index) => {
        return (
          <Space>
            {editingKeys.includes(record.id) ? (
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
                <a
                  onClick={() =>
                    editTableRef.current?.insert(index + 1, {
                      id: Date.now(),
                      name: '李岚清',
                      age: 26,
                    })
                  }
                >
                  插入
                </a>
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
        toolbarLeft={
          <>
            <Button
              icon={<PlusOutlined />}
              type="dashed"
              onClick={() => editTableRef.current?.push()}
            >
              底部新增
            </Button>
            <Button
              icon={<PlusOutlined />}
              type="dashed"
              onClick={() => editTableRef.current?.unshift()}
            >
              头部新增
            </Button>
            <Button onClick={() => editTableRef.current?.resetTableData()}>
              重置表格数据到初始状态
            </Button>
          </>
        }
        dataSource={defaultData}
        rowKey="id"
        columns={columns}
        editTableOptions={{
          editTableRef,
          editingKeys: editingKeys,
          onEditingKeys: setEditingKeys,
          onDelete(key, isNewRow, i) {},
          onSave(row, isNewRow, i) {
            console.log('isNewRow', isNewRow);
          },
        }}
      />
    </div>
  );
};

export default Demo1;
