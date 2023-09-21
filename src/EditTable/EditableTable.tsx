import {
  useControllableValue,
  useDeepCompareEffect,
  useMemoizedFn,
} from 'ahooks';
import type { TableProps } from 'antd';
import classnames from 'classnames';
import LForm from 'lighting-design/Form';
import BaseTable from 'lighting-design/Table/base/BaseTable';
import type {
  LTableInstance,
  LTableProps,
} from 'lighting-design/Table/base/types';
import { isFunction, uniqueId } from 'lighting-design/_utils';
import type { Dispatch, Key, SetStateAction } from 'react';
import React, { useImperativeHandle, useMemo, useRef } from 'react';

const getRowKey = (rowKey: any) => {
  if (isFunction(rowKey)) {
    return rowKey;
  }
  return (record: Record<string, any>, index?: number) =>
    typeof rowKey === 'string' ? record[rowKey] : record.key ?? `${index}`;
};

export type LEditTableInstance = {
  /** 调用编辑方法 */
  push: (record?: Record<string, any>) => void;
  unshift: (record?: Record<string, any>) => void;
  edit: (record: Record<string, any>) => void;
  /** 调用保存方法 */
  save: (key: Key) => void;
  /** 调用取消方法*/
  cancel: (key: Key) => void;
  /** 调用删除方法*/
  delete: (key: Key) => void;
};

export type EditTableOptions = {
  /** 表格表格的实例 */
  editTableRef: React.MutableRefObject<LEditTableInstance | undefined>;
  /** 正在编辑项的key值(唯一id) */
  editingKeys: Key[];
  /** 受控 编辑的key改变时触发 */
  onEditingKeys: Dispatch<SetStateAction<string[]>>;

  /**
   * 保存更新的回调
   * @param row 当前行的数据
   * @param isNewRow 是否是新增的数据行
   *
   */
  onSave?: (row: Record<string, any>, isNewRow: boolean) => void;

  /**
   * 删除的回调
   * @param key 当前行的数据的key
   * @param isNewRow 是否是新增的数据行
   */
  onDelete?: (key: Key, isNewRow: boolean) => void;
};

export type LEditTableProps = {
  rowKey?: string;
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

    request: outRequest,
    columns,
    size,
    dataSource,
    rowKey: outRowKey = 'key',
    tableRef: outTableRef,

    editTableOptions,

    ...restprops
  } = props;
  const [form] = LForm.useForm();
  const tableRef = useRef<LTableInstance>();
  const alreadyKeysRef = useRef<Key[]>([]);
  const allFromValues = useRef<Record<string, any>>({});
  const [editingKeys, setEditingKeys] = useControllableValue<string[]>(
    editTableOptions,
    {
      defaultValue: [],
      valuePropName: 'editingKeys',
      trigger: 'onEditingKeys',
    },
  );
  /** 获取每一行主键id的值 */
  const getRowKeyValue = useMemoizedFn(
    (record: Record<string, any>) => getRowKey(outRowKey)(record) as string,
  );

  /** 处理列 */
  const { mergedColumns, itemFieldObj } = useMemo(() => {
    const itemDataIndexObj: Record<string, any> = {};
    const mergedColumns = columns?.map((col: any) => {
      if (col.dataIndex && col.editable) {
        itemDataIndexObj[col.dataIndex] = void 0;
      }
      const render = (
        text: any,
        record: Record<string, any>,
        index: number,
      ) => {
        const keyId = getRowKeyValue(record);
        if (editingKeys.length && editingKeys.includes(keyId) && col.editable) {
          return React.cloneElement(col.editable, {
            // noStyle: true,
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
    return {
      mergedColumns,
      itemFieldObj: itemDataIndexObj,
    };
  }, [columns, editingKeys.join('')]);

  /** 判断表格某一行是否是新增的数据*/
  const isAddNewRowData = useMemoizedFn(
    (key) => !alreadyKeysRef.current?.includes(key),
  );

  // ====================暴露方法区-开始====================
  /** 编辑 */
  const onEdit = (record: Record<string, any>) => {
    const keyId = getRowKeyValue(record);
    form.setFieldValue(keyId, record);
    setEditingKeys((prev) => [...prev, keyId]);
  };

  /** 保存 */
  const onSave = async (key: Key) => {
    await form.validateFields();
    const curRow = form.getFieldValue(key);

    await editTableOptions?.onSave?.(
      { [outRowKey]: key, ...curRow },
      isAddNewRowData(key),
    );

    tableRef.current?.setTableData((prev) => {
      const newList = prev.list?.map((item) => {
        if (item[outRowKey] === key) {
          return { [outRowKey]: key, ...curRow };
        }
        return { ...item };
      });
      return { total: newList.length, list: newList };
    });

    setEditingKeys((prev) => prev.filter((item) => item !== key));
  };

  /** 删除 */
  const onDelete = async (key: Key) => {
    await editTableOptions?.onDelete?.(key, isAddNewRowData(key));
    tableRef.current?.setTableData((prev) => {
      const newList = prev.list.filter((item) => item[outRowKey] !== key);
      return {
        total: newList.length,
        list: newList,
      };
    });

    setEditingKeys(editingKeys.filter((itemKey) => itemKey !== key));
  };

  /** 取消 */
  const onCancel = (key: Key) => {
    if (isAddNewRowData(key)) {
      tableRef.current?.setTableData((prev) => {
        const newList = prev.list.filter((item) => item[outRowKey] !== key);
        return {
          total: newList.length,
          list: newList,
        };
      });
    }
    setEditingKeys((prev) => prev.filter((item) => item !== key));
  };

  /** 从尾部或者头部添加一行 */
  const onPushAndUnshift = (type: 'push' | 'unshift' = 'push') => {
    return (row?: Record<string, any>) => {
      const uid = (row && row?.[outRowKey]) || uniqueId('row-key');
      setEditingKeys((prev) => [...prev, uid]);
      tableRef.current?.setTableData((prev) => {
        const newList = [...prev.list];
        newList?.[type](
          row ? { ...row } : { [outRowKey]: uid, ...itemFieldObj },
        );
        return {
          total: newList.length,
          list: newList,
        };
      });
    };
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
    push: onPushAndUnshift('push'),
    unshift: onPushAndUnshift('unshift'),
  }));
  // ====================暴露方法区-结束====================

  const request = async (...args: any[]) => {
    if (dataSource?.length) {
      alreadyKeysRef.current = dataSource?.map((item) => item[outRowKey]);
      allFromValues.current = res?.data.reduce((prev, cur) => {
        return {
          ...prev,
          [cur[outRowKey]]: cur,
        };
      }, {});
      return {
        success: true,
        data: dataSource,
        total: dataSource.length,
      };
    }
    const res = await outRequest?.(...args);
    alreadyKeysRef.current = res?.data?.map((item) => item[outRowKey]) ?? [];
    allFromValues.current = res?.data.reduce((prev, cur) => {
      return {
        ...prev,
        [cur[outRowKey]]: cur,
      };
    }, {});
    return (
      res ?? {
        success: true,
        data: [],
        total: 0,
      }
    );
  };

  useDeepCompareEffect(() => {
    if (dataSource?.length) {
      tableRef.current?.setTableData({
        total: dataSource.length,
        list: dataSource,
      });
    }
  }, [dataSource]);

  return (
    <LForm form={form} submitter={false} component={false} size={size}>
      <BaseTable
        // @ts-ignore
        tableRef={(info) => {
          tableRef.current = info;
          if (outTableRef) {
            if (isFunction(outTableRef)) {
              outTableRef?.(info);
            } else {
              outTableRef.current = info;
            }
          }
        }}
        contentRender={void 0}
        toolbarActionConfig={false}
        pagination={false}
        // dataSource={list}
        rowKey={outRowKey}
        columns={mergedColumns}
        rowClassName={classnames('light-editable-row', rowClassName)}
        request={request}
        size={size}
        {...restprops}
      />
    </LForm>
  );
};

export default LEditTable;
