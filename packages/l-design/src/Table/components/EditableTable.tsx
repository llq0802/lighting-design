import { Form, Input, Table } from 'antd';
import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';

function geTableRowKey(
  rowKey: string,
): (record: Record<string, any>, index?: number) => string | number;
function geTableRowKey(
  rowKey: (record: Record<string, any>, index: number) => string | number,
): (record: Record<string, any>, index: number) => string | number;
function geTableRowKey(rowKey: unknown) {
  if (typeof rowKey === 'function') {
    return rowKey;
  }
  return (record: Record<string, any>, index: number) =>
    typeof rowKey === 'string' ? record[rowKey] : record.key ?? index;
}

const EditableCell: FC<any> = ({
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
          name={dataIndex}
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
  const { columns, rowKey } = props;

  const [form] = Form.useForm();

  const [editingKey, setEditingKey] = useState('');

  const isEditing = useCallback(
    (record: Record<string, any>, index: number) =>
      geTableRowKey(rowKey)(record, index) === editingKey,
    [editingKey, rowKey],
  );

  const mergedColumns = useMemo(() => {
    const newColumns = columns.map((col: Record<string, any>) => {
      if (!col.editable && col.editable !== true) return col;
      return {
        ...col,
        onCell: (record: Record<string, any>, index: number) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex || index,
          title: col.title,
          editing: isEditing(record, index),
        }),
      };
    });
    return newColumns;
  }, [columns, isEditing]);

  const cancel = () => {
    setEditingKey('');
  };

  return (
    <Form form={form} component={false}>
      <Table
        rowKey={rowKey}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={[]}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default EditTable;
