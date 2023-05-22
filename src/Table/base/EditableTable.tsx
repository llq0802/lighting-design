import { useControllableValue } from 'ahooks';
import { Form } from 'antd';
import React, { useImperativeHandle, useState } from 'react';
import type { LTableProps } from './BaseTable';
import BaseTable from './BaseTable';

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
  });
}

const EditableCell: React.FC<Record<string, any>> = (eProps) => {
  const {
    editing,
    editable,
    dataIndex,
    record,
    index,
    children,
    ...restProps
  } = eProps;
  console.log('eProps', eProps);
  return (
    <td {...restProps}>
      {editing ? (
        <>
          {React.cloneElement(editable, {
            name: dataIndex,
          })}
        </>
      ) : (
        children
      )}
    </td>
  );
};

type EditTableOptions = {
  editTableRef: any;
  editingKey: React.Key;
  onEditingKey: (key: React.Key) => void;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
};

type LEditTableProps = {
  editTableOptions: EditTableOptions;
} & Partial<LTableProps>;

const LEditTable: React.FC<LEditTableProps> = (props) => {
  const { columns, editTableOptions = {} } = props;
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);

  const [editingKey, setEditingKey] = useControllableValue(editTableOptions, {
    defaultValue: '',
    valuePropName: 'editingKey',
    trigger: 'onEditingKey',
  });

  const isEditing = (record: Record<string, any>) =>
    record[props?.rowKey || 'key'] === editingKey;

  const onEdit = (record) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record[props?.rowKey || 'key']);
    editTableOptions?.onEdit?.();
  };

  const onCancel = () => {
    setEditingKey('');
    editTableOptions?.onCancel?.();
  };

  const onSave = async (key: React.Key) => {
    const row = (await form.validateFields()) as Item;
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      setData(newData);
      setEditingKey('');
    } else {
      newData.push(row);
      setData(newData);
      setEditingKey('');
    }
    editTableOptions?.onSave?.();
  };

  const mergedColumns = columns?.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      // editing: isEditing(col),
      onCell: (record: Item, index: number) => {
        record.editing = isEditing(record);

        return {
          index,
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          editing: isEditing(record),
        };
      },
    };
  });

  // 暴露外部方法
  useImperativeHandle(editTableOptions.editTableRef, () => ({
    /** 编辑 */
    edit: onEdit,
    /** 取消 */
    cancel: onCancel,
    /** 保存 */
    save: onSave,
  }));

  return (
    <Form form={form} component={false}>
      <BaseTable
        {...props}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        columns={mergedColumns}
        bordered
        dataSource={data}
        rowClassName="light-editable-row"
      />
    </Form>
  );
};

export default LEditTable;
