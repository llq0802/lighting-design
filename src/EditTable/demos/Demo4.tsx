import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag } from 'antd';
import Mock from 'better-mock';
import type { LEditTableInstance, LTableInstance } from 'lighting-design';
import {
  LEditTable,
  LFormItemDatePicker,
  LFormItemInput,
  LFormItemNumber,
  LFormItemSelect,
} from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import { useRef, useState } from 'react';

const defaultData = Mock.mock({
  'list|5': [
    {
      id: '@guid',
      'age|1-99': 20,
      name: '@cname',
      birthday: '@date',
      'sex|1': ['1', '0'],
    },
  ],
}).list;

const SEX_MAP = {
  0: '女',
  1: '男',
};

const Demo3 = () => {
  const editTableRef = useRef<LEditTableInstance>();
  const tableRef = useRef<LTableInstance>();
  const [editingKeys, setEditingKeys] = useState<string[]>([]);
  const [loadings, setLoadings] = useState<string[]>([]);

  const columns = [
    {
      dataIndex: 'name',
      title: '名字',
      align: 'center',
      disabledEdit: true,
      editable: <LFormItemInput disabled={!!loadings.length} />,
      getEditable(text, row, index) {
        return {
          disabledEdit: index === 0, // 只有第一行的名字被禁用编辑
          required: true,
        };
      },
      render(val: string) {
        return <Tag color="#3e9bed">{val ?? '李岚清'}</Tag>;
      },
    },
    {
      dataIndex: 'age',
      title: '年龄',
      editable: <LFormItemNumber />,
      getEditable() {
        return {
          disabled: true,
          require: false,
          placeholder: '此项被禁用',
        };
      },
      render(val: string) {
        return <Tag color="#16c264">{val ?? '--'}</Tag>;
      },
    },
    {
      dataIndex: 'sex',
      title: '性别',
      editable: (
        <LFormItemSelect
          options={[
            { value: '0', label: '女' },
            { value: '1', label: '男' },
          ]}
          disabled={!!loadings.length}
          required
        />
      ),
      render(val: 0 | 1) {
        return <Tag color="#a8a8a8">{SEX_MAP[val]}</Tag>;
      },
    },
    {
      dataIndex: 'birthday',
      title: '出生年月',
      editable: <LFormItemDatePicker disabled={!!loadings.length} required />,
      render(val: string) {
        return <Tag color="#2c5687">{val}</Tag>;
      },
    },
    {
      title: '操作',
      width: 180,
      render: (_, record, index) => {
        return (
          <Space size={0}>
            {editingKeys.includes(record.id) ? (
              <>
                <Button
                  loading={loadings.includes(record.id)}
                  type="link"
                  onClick={() => {
                    editTableRef.current?.save(record.id);
                  }}
                >
                  保存
                </Button>
                <Button
                  disabled={loadings.includes(record.id)}
                  type="link"
                  onClick={() => editTableRef.current?.cancel(record.id)}
                >
                  取消
                </Button>
              </>
            ) : (
              <>
                <Button
                  disabled={loadings.includes(record.id)}
                  type="link"
                  onClick={() =>
                    editTableRef.current?.insert(index + 1, {
                      id: Date.now(),
                      name: index > 2 ? '李岚清' : '吴彦祖',
                      age: index > 2 ? 26 : 40,
                      birthday: index > 2 ? '1997-08-02' : '1986-02-23',
                      sex: '1',
                    })
                  }
                >
                  插入
                </Button>
                <Button
                  disabled={loadings.includes(record.id)}
                  type="link"
                  onClick={() => editTableRef.current?.edit(record)}
                >
                  编辑
                </Button>
                <Button
                  loading={loadings.includes(record.id)}
                  type="link"
                  onClick={() => editTableRef.current?.delete(record.id)}
                >
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
        rowKey="id"
        tableRef={tableRef}
        toolbarActionConfig={{
          showColumnSetting: true,
          showReload: true,
          showFullscreen: true,
          showDensity: true,
        }}
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
          </>
        }
        request={async () => {
          await awaitTime();
          return {
            success: true,
            data: defaultData,
            total: defaultData.length,
          };
        }}
        columns={columns}
        editTableOptions={{
          editTableRef,
          editingKeys: editingKeys,
          onEditingKeys: setEditingKeys,
          async onDelete(key, isNewRow, i) {
            setLoadings((prev) => [...prev, key]);
            await awaitTime();
            setLoadings((prev) => prev.filter((item) => item !== key));
            message.success('删除成功');
            //  如果返回 Promise.reject() 就终止内部实时修改, 就算 isTimelyModified = true 也不会触发实时修改
          },
          async onSave(row, isNewRow, i) {
            setLoadings((prev) => [...prev, row.id]);
            await awaitTime();
            setLoadings((prev) => prev.filter((item) => item !== row.id));
            message.success('保存成功');
            //  如果返回 Promise.reject() 就终止内部实时修改, 就算 isTimelyModified = true 也不会触发实时修改
          },
        }}
      />
    </div>
  );
};

export default Demo3;
