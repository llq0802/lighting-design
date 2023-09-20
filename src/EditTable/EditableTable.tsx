import { useControllableValue, useDynamicList, useMemoizedFn } from 'ahooks';
import type { TableProps } from 'antd';
import classnames from 'classnames';
import LForm from 'lighting-design/Form';
import BaseTable from 'lighting-design/Table/base/BaseTable';
import type { LTableProps } from 'lighting-design/Table/base/types';
import { isFunction } from 'lighting-design/_utils';
import React, { useImperativeHandle, useMemo } from 'react';

const getRowKey = (rowKey: any) => {
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
} & Partial<Omit<LTableProps, 'columns'>> &
  Record<string, any>;

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
    size,
    dataSource,
    rowKey: outRowKey,

    editTableOptions,

    ...restprops
  } = props;
  const [form] = LForm.useForm();

  const { list, remove, getKey, getIndex, move, push, sortList, resetList } =
    useDynamicList(dataSource ?? []);
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
  const mergedColumns = useMemo(() => {
    return columns?.map((col: any) => {
      const render = (
        text: any,
        record: Record<string, any>,
        index: number,
      ) => {
        const keyId = getCurentRowKey(record);
        if (editingKeys.length && editingKeys.includes(keyId) && col.editable) {
          return React.cloneElement(col.editable, {
            // noStyle: true,
            size: size,
            name: [keyId, col.dataIndex],
            style: {
              marginBottom: 0,
              ...col.editable?.props?.style,
            },
          });
        }

        if (isFunction(col.render)) {
          return col.render(text, record, index);
        }

        return text;
      };

      return {
        ...col,
        render,
      };
    });
  }, [columns, editingKeys.join('')]);

  // ====================暴露方法区-开始====================
  /** 编辑 */
  const onEdit = (record: Record<string, any>) => {
    console.log('record', record);
    const keyId = getCurentRowKey(record);
    form.setFieldValue(keyId, record);
    setEditingKeys((prev) => [...prev, keyId]);
    editTableOptions?.onEdit?.(record);
  };
  /** 取消 */
  const onCancel = (key: string) => {
    setEditingKeys((prev) => prev.filter((item) => item !== key));
    editTableOptions?.onCancel?.(key);
  };

  /** 保存 */
  const onSave = async (key: string) => {
    const cur = form.getFieldValue(key);
    setEditingKeys((prev) => prev.filter((item) => item !== key));
    console.log('cur', cur);

    editTableOptions?.onSave?.();
  };

  /** 删除 */
  const onDelete = (key: string) => {
    setEditingKeys(editingKeys.filter((itemKey) => itemKey !== key));
    const cueIndex = getIndex(key);
    console.log('cueIndex', cueIndex);
    editTableOptions?.onDelete?.(key);
  };

  const onPush = () => {
    console.log(' onPush');
    push({});
  };

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
    push: onPush,
  }));
  // ====================暴露方法区-结束====================

  return (
    <LForm form={form} submitter={false} component={false} size={size}>
      <BaseTable
        contentRender={void 0}
        toolbarActionConfig={false}
        pagination={false}
        dataSource={list}
        rowKey={outRowKey}
        columns={mergedColumns}
        rowClassName={classnames('light-editable-row', rowClassName)}
        // request={async (...args) => {
        //   if (dataSource?.length) {
        //     return {
        //       success: true,
        //       data: dataSource,
        //       total: dataSource.length,
        //     };
        //   }
        //   const res = request(...args);
        //   return res;
        // }}
        size={size}
        {...restprops}
      />
    </LForm>
  );
};

export default LEditTable;
