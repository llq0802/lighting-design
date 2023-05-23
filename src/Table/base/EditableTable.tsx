import { useControllableValue } from 'ahooks';
import type { TableProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import type { Key } from 'react';
import React, { useImperativeHandle } from 'react';
import type { LTableProps } from './BaseTable';
import BaseTable from './BaseTable';

const getRowKey = (rowKey: Function | string | number | undefined) => {
  if (typeof rowKey === 'function') {
    return rowKey;
  }
  return (record: Record<string, any>, index?: number) =>
    typeof rowKey === 'string' ? record[rowKey] : record.key ?? index;
};

const EditableCell: React.FC<Record<string, any>> = (eProps) => {
  const { editing, editable, dataIndex, children, ...restProps } = eProps;

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

export type LEditTableInstance = {
  /** 调用编辑方法 */
  edit: (record: Record<string, any>) => void;
  /** 调用保存方法 */
  save: (key: React.Key) => void;
  /** 调用取消方法*/
  cancel: () => void;
  /** 调用删除方法*/
  delete: (key: React.Key) => void;
};

export type EditTableOptions = {
  /** 表格表格的实例 */
  editTableRef: React.MutableRefObject<LEditTableInstance | undefined>;
  /** 正在编辑项的key值(唯一id) */
  editingKey: React.Key;
  /** 受控 编辑的key改变时触发 */
  onEditingKey: (key: React.Key) => void;
  /** 编辑修改的回调 */
  onEdit?: () => void;
  /** 保存更新的回调 */
  onSave?: () => void;
  /** 取消的回调 */
  onCancel?: () => void;
  /** 删除的回调 */
  onDelete?: () => void;
};

export type LEditTableProps = {
  editTableOptions: EditTableOptions;
  columns: TableProps<any>['columns'] & {
    editable?: React.ReactNode;
  };
} & Partial<Omit<LTableProps, 'columns'>>;

/**
 * 编辑表格
 */
const LEditTable: React.FC<LEditTableProps> = (props) => {
  const {
    columns,
    dataSource,
    rowKey: outRowKey,
    editTableOptions,
    ...restprops
  } = props;
  const [form] = Form.useForm();

  const [editingKey, setEditingKey] = useControllableValue(editTableOptions, {
    defaultValue: '',
    valuePropName: 'editingKey',
    trigger: 'onEditingKey',
  });

  const getCurentRowKey = React.useCallback(
    (record: any) => getRowKey(outRowKey)(record) as Key,
    [outRowKey],
  );

  const isEditing = (record: Record<string, any>) => {
    return getCurentRowKey(record) === editingKey;
  };

  const onEdit = (record: Record<string, any>) => {
    form.setFieldsValue({ ...record });
    const keyId = getCurentRowKey(record) as React.Key;
    setEditingKey(keyId);
    editTableOptions?.onEdit?.();
  };

  const onCancel = () => {
    setEditingKey('');
    editTableOptions?.onCancel?.();
  };

  const onSave = async (key: React.Key) => {
    const row = await form.validateFields();
    console.log('row', row);
    const newData = [...(dataSource || [])];
    const index = newData.findIndex((item) => key === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      // setData(newData);
      setEditingKey('');
    } else {
      newData.push(row);
      // setData(newData);
      setEditingKey('');
    }
    editTableOptions?.onSave?.();
  };

  const onDelete = (key: React.Key) => {
    console.log('key', key);
  };

  const mergedColumns = columns?.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Record<string, any>) => {
        return {
          editing: isEditing(record),
          editable: col.editable,
          dataIndex: col.dataIndex,
        };
      },
    };
  });

  dataSource?.forEach((item) => {
    item.editing = isEditing(item);
  });

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

  console.log('dataSource ', dataSource);
  console.log('editingKey ', editingKey);
  return (
    <Form form={form} component={false}>
      <BaseTable
        showToolbar={false}
        // toolbarActionConfig={{
        //   showReload: false,
        //   showColumnSetting: false,
        //   showFullscreen: false,
        //   ...props.toolbarActionConfig,
        // }}
        components={{
          body: {
            cell: EditableCell,
          },
          ...restprops?.components,
        }}
        dataSource={dataSource}
        rowKey={outRowKey}
        columns={mergedColumns}
        rowClassName={classnames('light-editable-row', restprops?.rowClassName)}
        {...restprops}
      />
    </Form>
  );
};

export default LEditTable;
