import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import type { LTableInstance } from 'lighting-design';
import {
  LForm,
  LFormItem,
  LFormItemInput,
  LFormItemNumber,
} from 'lighting-design';
import Mock from 'mockjs';
import { useRef, useState } from 'react';
import type { LEditTableInstance } from '../EditableTable';
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
  const [form] = LForm.useForm();

  const editTableRef = useRef<LEditTableInstance>();
  const tableRef = useRef<LTableInstance>();
  const [editableKeys, setEditableKeys] = useState<string[]>(
    defaultData?.map((item) => item.id),
  );

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
              向下插入
            </Button>
            <Button
              type="link"
              onClick={() => editTableRef.current?.resetFields(record.id)}
            >
              重置此行
            </Button>
            <Button
              type="link"
              onClick={() => editTableRef.current?.delete(record.id)}
            >
              删除此行
            </Button>
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
        submitter={{ buttonAlign: 'center' }}
        onFinish={async (val) => {
          await editTableRef.current?.validateFields();
          console.log(' val ', val);
        }}
        // onValuesChange={(a, b, c) => {
        //   console.log('a,b,c===', a, b, c);
        // }}
        // initialValues={{
        //   list: {
        //     '11': {
        //       name: '李岚清',
        //       age: 25,
        //     },
        //     '12': {},
        //     '13': {},
        //     '14': {},
        //     '15': {},
        //   },
        // }}
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
              // console.log('a,b,cLEditTable', a, b, c, i);
            }}
            isSort
            rowKey="id"
            tableRef={tableRef}
            toolbarLeft={
              <>
                <Button
                  type="dashed"
                  onClick={() => editTableRef.current?.validateFields()}
                >
                  校验
                </Button>
                <Button
                  icon={<PlusOutlined />}
                  type="dashed"
                  onClick={() => editTableRef.current?.unshift()}
                >
                  头部新增
                </Button>
                <Button
                  type="dashed"
                  onClick={() => editTableRef.current?.resetFields()}
                >
                  重置全部
                </Button>
              </>
            }
            // dataSource={defaultData}
            columns={columns}
            editTableOptions={{
              editTableRef,
              editingKeys: editableKeys,
              onEditingKeys: setEditableKeys,
            }}
            footer={() => (
              <Button
                icon={<PlusOutlined />}
                type="dashed"
                block
                onClick={() => editTableRef.current?.push()}
              >
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
