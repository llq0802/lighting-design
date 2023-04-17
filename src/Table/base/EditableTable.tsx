import { Form, Input } from 'antd';
import type { FC } from 'react';
import { useCallback, useImperativeHandle, useMemo } from 'react';
import { getTableRowKey } from '../../utils';
import BaseTable from './BaseTable';

// 测试
const EditableCell: FC<any> = ({
  rowKeyValue,
  editable,
  editing,
  dataIndex,
  title,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={[rowKeyValue, dataIndex]}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

/**
 * 可编辑的表格
 * @param props
 * @returns
 */
const LEditTable = (props) => {
  const {
    columns,
    rowKey,
    size,
    editTableRef,
    editTableProps,

    ...restProps
  } = props;

  const {
    editKeys = [],
    editKeysChange,

    onSave: outOnSave,
    onDelete: outOnDelete,
  } = editTableProps;

  const [form] = Form.useForm();

  // 当前行是否正在编辑
  const isEditing = useCallback(
    (record: Record<string, any>, index: number) =>
      editKeys.includes(getTableRowKey(rowKey)(record, index)),
    [editKeys, rowKey],
  );

  // 重新处理列
  const mergedColumns = useMemo(() => {
    const newColumns = columns.map((col: Record<string, any>) => {
      if (!col.editable && col.editable !== true) return col;
      return {
        ...col,
        onCell: (record: Record<string, any>, index: number) => ({
          record,
          rowKeyValue: getTableRowKey(rowKey)(record, index),
          title: col.title,
          editable: col.editable,
          editing: isEditing(record, index),
          dataIndex: col.dataIndex || index,
        }),
      };
    });
    return newColumns;
  }, [columns, isEditing, rowKey]);

  const outRowKey = useMemo(() => {
    let keyName = '';
    if (typeof rowKey === 'function') {
      keyName = rowKey();
    } else {
      keyName = rowKey || 'key';
    }
    return keyName;
  }, [rowKey]);

  // 取消
  const handleCancel = (key: string) => {
    const newKeys = editKeys.filter((itemKey) => itemKey !== key);
    editKeysChange(newKeys);
  };
  // 编辑
  const handleEdit = (record: Record<string, any>) => {
    const { [outRowKey]: keyValue, ...restFromValues } = record;
    form.setFieldsValue({
      [keyValue]: {
        ...restFromValues,
      },
    });
    editKeysChange([...(editKeys || []), keyValue]);
  };

  // 保存
  const handleSave = async (key: string) => {
    await form.validateFields();
    const fieldsValue = form.getFieldValue(key);
    await outOnSave?.(key, fieldsValue);

    handleCancel(key);
  };

  // 删除
  const handleDelete = async (key: string) => {
    const fieldsValue = form.getFieldValue(key);
    await outOnDelete?.(key, fieldsValue);
    handleCancel(key);
  };

  // 重置表单数据
  const handleFormReset = (key?: string) => {
    if (key) {
      const nameKey = [key];
      form.resetFields([nameKey]);
    } else {
      form.resetFields();
    }
  };

  // 暴露外部方法
  useImperativeHandle(editTableRef, () => ({
    // 点击每一行保存的时候触发
    onSave: handleSave,
    onCancel: handleCancel,
    onEdit: handleEdit,
    onDelete: handleDelete,
    onFormReset: handleFormReset,
  }));

  return (
    <Form form={form} component={false} size={size}>
      <BaseTable
        rowKey={rowKey}
        size={size}
        components={{
          body: { cell: EditableCell },
        }}
        columns={mergedColumns}
        rowClassName="lightd-editable-row"
        {...restProps}
      />
    </Form>
  );
};

export default LEditTable;
