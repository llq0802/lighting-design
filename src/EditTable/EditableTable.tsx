import { useControllableValue, useDynamicList, useMemoizedFn } from 'ahooks';
import type { TableProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import LForm from 'lighting-design/Form';
import BaseTable from 'lighting-design/Table/base/BaseTable';
import React, { useImperativeHandle, useMemo } from 'react';

const getRowKey = (
  rowKey: (row: Record<string, any>) => string | undefined,
) => {
  if (typeof rowKey === 'function') {
    return rowKey;
  }
  return (record: Record<string, any>, index?: number) =>
    typeof rowKey === 'string' ? record[rowKey] : record.key ?? `${index}`;
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
  editingKeys: React.Key;
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    contentRender,
    rowClassName,

    request,
    columns,
    dataSource,
    rowKey: outRowKey,

    editTableOptions,

    ...restprops
  } = props;
  const [form] = Form.useForm();

  const { list, remove, getKey, move, push, sortList, resetList } =
    useDynamicList(dataSource);

  console.log('list', list);

  const [editingKeys, setEditingKeys] = useControllableValue<string[]>(
    editTableOptions,
    {
      defaultValue: [],
      valuePropName: 'editingKeys',
      trigger: 'onEditingKeysChange',
    },
  );

  const getCurentRowKey = useMemoizedFn(
    (record: Record<string, any>) => getRowKey(outRowKey)(record) as string,
  );

  const onEdit = (record: Record<string, any>) => {
    // form.setFieldsValue({ ...record });
    const keyId = getCurentRowKey(record);
    setEditingKeys((prev) => [...prev, keyId]);
    editTableOptions?.onEdit?.(record);
  };

  // ====================暴露方法区-开始====================
  const onCancel = () => {
    setEditingKeys((prev) => [...prev]);
    editTableOptions?.onCancel?.();
  };

  const onSave = async (key: string) => {
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
      setEditingKeys('');
    } else {
      newData.push(row);
      // setData(newData);
      setEditingKeys('');
    }
    editTableOptions?.onSave?.();
  };

  const onDelete = (key: string) => {
    console.log('key', key);
    setEditingKeys(editingKeys.filter((itemKey) => itemKey !== key));
    editTableOptions?.onDelete?.(key);
  };

  const mergedColumns = useMemo(() => {
    return columns?.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      const render = (value, record, index) => {
        return col.editable;
      };
      return {
        ...col,
        render,
      };
    });
  }, [columns]);

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
  // ====================暴露方法区-结束====================

  console.log('dataSource ', dataSource);
  return (
    <LForm form={form} submitter={false} component={false}>
      <BaseTable
        contentRender={void 0}
        // dataSource={dataSource}
        rowKey={outRowKey}
        columns={mergedColumns}
        rowClassName={classnames('light-editable-row', rowClassName)}
        request={async (...args) => {
          if (dataSource?.length) {
            return {
              success: true,
              data: dataSource,
              total: dataSource.length,
            };
          }
          const res = request(...args);
          return res;
        }}
        {...restprops}
      />
    </LForm>
  );
};

export default LEditTable;
