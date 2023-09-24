import { Button, message, Space, Tag } from 'antd';
import type { LTableInstance } from 'lighting-design';
import {
  LFormItemDatePicker,
  LFormItemInput,
  LFormItemNumber,
  LFormItemSelect,
} from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import Mock from 'mockjs';
import { useRef, useState } from 'react';
import type { LEditTableInstance } from '../EditableTable';
import LEditTable from '../EditableTable';

const defaultData = Mock.mock({
  'list|25': [
    {
      'id|+1': 11,
      'age|1-99': 20,
      name: '@cname',
      birthday: '@date',
      'sex|1': ['1', '0'],
    },
  ],
}).list;

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框1" />,
  <LFormItemInput key="1" name="input5" label="输入框2" />,
  <LFormItemInput key="2" name="input6" label="输入框3" />,
];

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
          placeholder: '请输入姓名',
          required: true,
        };
      },
      render(val: string) {
        return <Tag color="#3e9bed">{val}</Tag>;
      },
    },
    {
      dataIndex: 'age',
      title: '年龄',
      editable: <LFormItemNumber />,
      getEditable(text, row, index) {
        return {
          disabledEdit: true,
          placeholder: '请输入年龄',
          disabled: !!loadings.length,
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
        isSort
        rowKey="id"
        formItems={formItems}
        pagination={{
          pageSize: 5,
        }}
        tableRef={tableRef}
        toolbarActionConfig={{
          showColumnSetting: true,
          showReload: true,
          showFullscreen: true,
          showDensity: true,
        }}
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
