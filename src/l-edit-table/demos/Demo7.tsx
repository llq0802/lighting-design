import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Mock from 'better-mock';
import type { LEditTableInstance, LTableActionRef } from 'lighting-design';
import { LEditTable, LForm, LFormItem, LFormItemInput, LFormItemNumber } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import { useRef, useState } from 'react';

const defaultData = Mock.mock({
  'list|5': [
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
  const [editableKeys, setEditableKeys] = useState<string[]>(defaultData?.map((item) => item.id));

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
      render: (_, record, index) => {
        return (
          <Space>
            <a
              onClick={() =>
                editTableRef.current?.insert(index + 1, {
                  id: Date.now(),
                  name: `李岚清${index}`,
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
        submitter={{ position: 'center' }}
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
          list: {
            '11': {
              name: '李岚清',
              age: 25,
            },
            '12': {
              name: '吴彦祖',
              age: 45,
            },
            '13': {
              name: '陈冠希',
              age: 40,
            },
            '14': {
              name: '彭于晏',
              age: 41,
            },
            '15': {
              name: '李真帅',
              age: 34,
            },
          },
        }}
      >
        <LFormItemInput name="name" label="名字" required />

        <LFormItem
          label="列表项"
          name="list"
          required
          trigger="onValuesChange"
          validateTrigger="onValuesValidate"
          rules={[
            {
              async validator(_: any, value: any) {
                // console.log('validator-value', value);
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
            onValuesChange={(a, b, c, i) => {
              console.log('a,b,cLEditTable===', a, b, c, i);
            }}
            rowKey="id"
            actionRef={actionRef}
            toolbar={
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
              </>
            }
            request={async () => {
              await sleep();
              return {
                list: defaultData,
                total: defaultData.length,
              };
            }}
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
