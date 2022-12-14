import { Form, Input, Table } from 'antd';
import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { getTableRowKey } from '../../utils';

const EditableCell: FC<any> = ({
  rowKey,
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
          name={[rowKey, dataIndex]}
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
const EditTable = (props) => {
  const { columns, rowKey, ...restProps } = props;

  const [form] = Form.useForm();
  const [tableData, setTableData] = useState<Record<string, any>[]>([]);
  const [editingKeys, setEditingKeys] = useState<(string | number)[]>([]);

  // 是否正在编辑
  const isEditing = useCallback(
    (record: Record<string, any>, index: number) =>
      editingKeys.includes(getTableRowKey(rowKey)(record, index)),
    [editingKeys, rowKey],
  );

  const mergedColumns = useMemo(() => {
    const newColumns = columns.map((col: Record<string, any>) => {
      if (!col.editable && col.editable !== true) return col;
      return {
        ...col,
        onCell: (record: Record<string, any>, index: number) => ({
          record,
          rowKey: getTableRowKey(rowKey)(record, index),
          editable: col.editable,
          dataIndex: col.dataIndex || index,
          title: col.title,
          editing: isEditing(record, index),
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
      keyName = rowKey;
    }
    return keyName;
  }, [rowKey]);

  // 取消
  const onCancel = (key: string | number) => {
    setEditingKeys((prevKeys) => {
      const newKeys = prevKeys.filter((itemKey) => itemKey !== key);
      return newKeys;
    });
  };
  // 保存
  const onSave = async (key: string | number) => {
    try {
      const rowFormValues = await form.validateFields();
      console.log(' rowFormValues', rowFormValues);
      const newData: Record<string, any>[] = [...tableData];
      const currentRow = newData.find((item) => key === item[outRowKey]);

      if (currentRow) {
        setTableData((prevItemData: Record<string, any>[]) => {
          return prevItemData.map((item) => {
            if (item[outRowKey] === key) {
              return {
                ...item,
                ...rowFormValues[outRowKey],
              };
            } else {
              return item;
            }
          });
        });
        setEditingKeys((prevItemKeys) => {
          return prevItemKeys.filter((itemKey) => itemKey !== key);
        });
      } else {
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  // 编辑
  const onEdit = (record: Record<string, any>) => {
    const { [outRowKey]: keyValue, ...restFromValues } = record;
    form.setFieldsValue({
      [keyValue]: {
        ...restFromValues,
      },
    });
    setEditingKeys((itemKey) => {
      return [...itemKey, keyValue];
    });
  };

  return (
    <Form form={form} component={false}>
      <Table
        rowKey={rowKey}
        components={{
          body: { cell: EditableCell },
        }}
        columns={mergedColumns}
        rowClassName="editable-row"
        {...restProps}
      />
    </Form>
  );
};

export default EditTable;
