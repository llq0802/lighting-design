import { useControllableValue } from 'ahooks';
import { Form } from 'antd';
import type { Key } from 'react';
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

const getRowKey = (rowKey: Function | string | number | undefined) => {
  if (typeof rowKey === 'function') {
    return rowKey;
  }
  return (record: Record<string, any>, index?: number) =>
    typeof rowKey === 'string' ? record[rowKey] : record.key ?? index;
};

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
  const { columns, rowKey: outRowKey, editTableOptions } = props;
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);

  const [editingKey, setEditingKey] = useControllableValue(editTableOptions, {
    defaultValue: '',
    valuePropName: 'editingKey',
    trigger: 'onEditingKey',
  });

  const getCurentRowKey = React.useCallback(
    (record: any) => getRowKey(outRowKey)(record) as Key,
    [outRowKey],
  );

  const isEditing = (record: Record<string, any>) =>
    getCurentRowKey(record) === editingKey;

  const onEdit = (record: Record<string, any>) => {
    form.setFieldsValue({ ...record });
    const key = getCurentRowKey(record) as Key;
    setEditingKey(key);
    editTableOptions?.onEdit?.();
  };

  const onCancel = () => {
    setEditingKey('');
    editTableOptions?.onCancel?.();
  };

  const onSave = async (key: React.Key) => {
    const row = await form.validateFields();
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
      onCell: (record: Record<string, any>, index: number) => {
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

  const onDelete = (key) => {};

  // 暴露外部方法
  useImperativeHandle(editTableOptions.editTableRef, () => ({
    /** 编辑 */
    edit: onEdit,
    /** 取消 */
    cancel: onCancel,
    /** 保存 */
    save: onSave,
    /** 删除 */
    delete: onDelete,
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
        rowKey={outRowKey}
        columns={mergedColumns}
        bordered
        dataSource={data}
        rowClassName="light-editable-row"
      />
    </Form>
  );
};

export default LEditTable;
