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
import React, {
  cloneElement,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';

const getRowKey = (rowKey: any) => {
  if (isFunction(rowKey)) {
    return rowKey;
  }
  return (record: Record<string, any>, index?: number) =>
    typeof rowKey === 'string' ? record[rowKey] : record.key ?? `${index}`;
};

export type LEditTableInstance = {
  /** 调用从底部新增数据方法 */
  push: (record?: Record<string, any>) => void;
  /** 调用从头部新增数据方法 */
  unshift: (record?: Record<string, any>) => void;
  /** 调用编辑方法 */
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
  const isFirstRender = useRef(true);
  const tableRef = useRef<LTableInstance>();
  const alreadyKeysRef = useRef<Key[]>([]);
  const allFromValues = useRef<Record<string, any>>({});
  const editableKeyMap = useRef<Record<string, any>>({});

  const [editingKeys, setEditingKeys] = useControllableValue<string[]>(
    editTableOptions,
    {
      defaultValue: [],
      valuePropName: 'editingKeys',
      trigger: 'onEditingKeys',
    },
  );
  /** 获取每一行主键 id 的值 */
  const getRowKeyValue = useMemoizedFn(
    (record: Record<string, any>) => getRowKey(outRowKey)(record) as string,
  );

  /** 处理列 */
  const { mergedColumns, itemFieldObj } = useMemo(() => {
    const itemDataIndexObj: Record<string, any> = {};
    const mergedColumns = columns?.map((col: any) => {
      const render = (
        text: any,
        record: Record<string, any>,
        index: number,
      ) => {
        const keyId = getRowKeyValue(record);

        const namePath = [keyId, col.dataIndex]; // 把同一行的字段放在一个对象中

        if (col.dataIndex && col.editable) {
          itemDataIndexObj[col.dataIndex] = void 0;

          if (!editableKeyMap.current[keyId]) {
            editableKeyMap.current[keyId] = {
              nameList: [], // 当前行所有的表单字段
              dataIndexs: [],
              record,
              index,
              rowKey: keyId,
            };
          }

          if (
            !editableKeyMap.current[keyId].dataIndexs.includes(col.dataIndex)
          ) {
            editableKeyMap.current[keyId].dataIndexs.push(col.dataIndex);
            editableKeyMap.current[keyId].nameList.push(namePath);
          }
        }

        if (editingKeys?.includes(keyId) && col.editable) {
          return cloneElement(col.editable, {
            name: namePath,
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
    console.log('form', form.getFieldsValue());
    const keyId = getRowKeyValue(record);
    form.setFieldValue(keyId, record);
    setEditingKeys((prev) => [...prev, keyId]);
  };

  /** 保存 */
  const onSave = async (key: Key) => {
    // 只验证当前正在编辑的行
    await form.validateFields(editableKeyMap.current[key].nameList);
    const curRow = form.getFieldValue(key);
    // 如果返回Promise.reject()就终止
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

  const addItemRow = useMemoizedFn((row) => {
    const uid = (row && row?.[outRowKey]) || uniqueId('row-key');
    const rowItem = row ? { ...row } : { [outRowKey]: uid, ...itemFieldObj };
    form.setFieldValue(uid, rowItem);
    setEditingKeys((prevKeys) => [...prevKeys, uid]);
    return rowItem;
  });

  /** 从尾部或者头部添加一行 */
  const onPushAndUnshift = (type: 'push' | 'unshift' = 'push') => {
    return (row?: Record<string, any>) => {
      const rowItem = addItemRow(row);
      tableRef.current?.setTableData((prev) => {
        const newList = [...prev.list];
        newList?.[type](rowItem);
        return {
          total: newList.length,
          list: newList,
        };
      });
    };
  };
  /** 从指定索引添加一行 */
  const onInsert = (index: number = 0, row: Record<string, any>) => {
    const rowItem = addItemRow(row);
    tableRef.current?.setTableData((prev) => {
      const newList = [...prev.list];
      newList.splice(index, 0, rowItem);
      return {
        total: newList.length,
        list: newList,
      };
    });
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
    insert: onInsert,
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
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!isFirstRender.current && dataSource?.length) {
      tableRef.current?.setTableData({
        total: dataSource.length,
        list: dataSource,
      });
    }
  }, [dataSource]);

  return (
    <LForm
      form={form}
      submitter={false}
      component={false}
      size={size}
      onValuesChange={(a, b, c) => {
        console.log('a,b,c', a, b, c);
      }}
    >
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
