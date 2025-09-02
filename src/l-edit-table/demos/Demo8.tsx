import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Mock from 'better-mock';
import type { LEditTableInstance, LTableActionRef } from 'lighting-design';
import { LEditTable, LForm, LFormItem, LFormItemInput, LFormItemNumber } from 'lighting-design';
import { useRef, useState } from 'react';

const defaultData = Mock.mock({
  'list|3': [
    {
      'id|+1': 11,
      'age|1-99': 20,
      name: '@cname',
    },
  ],
}).list.map((item: any) => ({ ...item, id: item.id.toString() }));

const Demo1 = () => {
  const [form] = LForm.useForm();
  const editTableRef = useRef<LEditTableInstance>();
  const actionRef = useRef<LTableActionRef>();
  const [editableKeys, setEditableKeys] = useState<string[]>([]);

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
      render: (_, record, index) => {
        return (
          <Space>
            <a
              onClick={() =>
                editTableRef.current?.insert(index + 1, {
                  id: `${Date.now()}`,
                  name: `李岚清-${index + 1}`,
                  age: 26,
                })
              }
            >
              向下插入
            </a>
            <a onClick={() => editTableRef.current?.resetFields(record.id)}>重置此行</a>
            <a onClick={() => editTableRef.current?.validateFields(record.id)}>校验此行</a>
            <a onClick={() => editTableRef.current?.delete(record.id)}>删除此行</a>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <LForm
        form={form}
        labelWidth={100}
        onFinish={async (val) => {
          await editTableRef.current?.validateFields();
          console.log(' val ', val);
        }}
        // onValuesChange={(a, b, c) => {
        //   console.log('a,b,c===', a, b, c);
        // }}
        initialValues={{
          name: '李彦祖',
          num: 3,
        }}
      >
        <LFormItemInput name="name" label="名字" required />

        <LFormItem
          label="列表项"
          name="list"
          trigger="onValuesChange"
          initialValue={{
            '11': { name: '彭于晏', age: 25 },
            '12': { name: '吴彦祖', age: 45 },
            '13': { name: '陈冠希', age: 40 },
          }}
          required
          validateTrigger="onValuesChange"
          rules={[
            {
              async validator(_: any, value: any) {
                if (!value) return Promise.reject('请填写!');
                if (!Object.values(value)?.length) {
                  return Promise.reject('请填写!');
                }
                const isNot = Object.values(value)?.some((items) => {
                  if (!Object.values(items)?.length) {
                    return true;
                  }
                  return Object.values(items)?.some((item) => !!item === false);
                });

                if (isNot) {
                  return Promise.reject('请填写!');
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <LEditTable
            rowKey="id"
            onValuesChange={(a, b, c, i) => {
              console.log('==a====>', a);
              console.log('==b====>', b);
              console.log('==c====>', c);
              console.log('==i====>', i);
            }}
            actionRef={actionRef}
            toolbarLeft={
              <>
                <Button icon={<PlusOutlined />} type="dashed" onClick={() => editTableRef.current?.unshift()}>
                  头部新增
                </Button>
                <Button type="dashed" onClick={() => editTableRef.current?.resetFields()}>
                  重置全部
                </Button>
                <Button type="dashed" onClick={() => editTableRef.current?.validateFields()}>
                  校验全部
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    const res = editTableRef.current?.getFieldValue('11');
                    console.log('==res====>', res);
                  }}
                >
                  获取某一行的表单值
                </Button>
              </>
            }
            dataSource={defaultData}
            columns={columns}
            editTableOptions={{
              editTableRef,
              editingKeys: editableKeys,
              onEditingKeys: setEditableKeys,
            }}
            footer={() => (
              <Button icon={<PlusOutlined />} type="dashed" block onClick={() => editTableRef.current?.push()}>
                底部新增
              </Button>
            )}
          />
        </LFormItem>
      </LForm>
    </div>
  );
};

export default Demo1;
