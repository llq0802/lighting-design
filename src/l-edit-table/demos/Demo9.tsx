import { Button, message } from 'antd';
import type { LEditTableInstance, LTableActionRef } from 'lighting-design';
import { LEditTable, LForm, LFormItem, LFormItemInput, LFormItemNumber, LModalForm } from 'lighting-design';
import { useRef, useState } from 'react';
import { sleep } from '../../test';

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
  ];

  return (
    <div>
      <LModalForm
        form={form}
        title="弹窗"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('提交成功');
          return true;
        }}
        initialValues={{
          name: '刘德华',
          list: {
            '11': { name: '彭于晏', age: 25 },
            '12': { name: '吴彦祖', age: 45 },
            '13': { name: '陈冠希', age: undefined },
          },
        }}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemInput name="name" required label="输入框" />

        <LFormItem
          // wrapperAlignItems="center"

          label="列表项"
          name="list"
          trigger="onValuesChange"
          validateTrigger="onValuesChange"
          required
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
            size="small"
            actionRef={actionRef}
            columns={columns}
            editTableOptions={{
              editTableRef,
              editingKeys: editableKeys,
              onEditingKeys: setEditableKeys,
            }}
          />
        </LFormItem>
      </LModalForm>
    </div>
  );
};

export default Demo1;
