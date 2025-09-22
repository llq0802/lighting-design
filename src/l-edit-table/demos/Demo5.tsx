import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Mock from 'better-mock';
import type { LEditTableInstance, LTableActionRef } from 'lighting-design';
import { LEditTable, LFormItemInput, LFormItemNumber } from 'lighting-design';
import { useRef, useState } from 'react';

const defaultData = Mock.mock({
  'list|5': [
    {
      id: '@guid',
      'age|1-99': 20,
      name: '@cname',
    },
  ],
}).list;

const Demo5 = () => {
  const actionRef = useRef<LTableActionRef>();
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
          <Space size={0}>
            {editingKeys.includes(record.id) ? (
              <>
                <Button type="link" onClick={() => editTableRef.current?.save(record.id)}>
                  保存
                </Button>
                <Button type="link" onClick={() => editTableRef.current?.cancel(record.id)}>
                  取消
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="link"
                  onClick={() =>
                    editTableRef.current?.insert(index + 1, {
                      id: Date.now(),
                      name: '李岚清',
                      age: 26,
                    })
                  }
                >
                  插入
                </Button>
                <Button type="link" onClick={() => editTableRef.current?.edit(record)}>
                  编辑
                </Button>
                <Button type="link" onClick={() => editTableRef.current?.delete(record.id)}>
                  删除
                </Button>
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
        sortColumn
        actionRef={actionRef}
        toolbar={
          <>
            <Button icon={<PlusOutlined />} type="dashed" onClick={() => editTableRef.current?.push()}>
              底部新增
            </Button>
            <Button icon={<PlusOutlined />} type="dashed" onClick={() => editTableRef.current?.unshift()}>
              头部新增
            </Button>
          </>
        }
        dataSource={defaultData}
        rowKey="id"
        columns={columns}
        editTableOptions={{
          isTimelyModified: false,
          editTableRef,
          editingKeys: editingKeys,
          onEditingKeys: setEditingKeys,
          onDelete(key, isNewRow, i) {
            // 调用查询接口后更新表格数据
          },
          onSave(row, isNewRow, i) {
            // 调用查询接口后更新表格数据
          },
        }}
      />
    </div>
  );
};

export default Demo5;
