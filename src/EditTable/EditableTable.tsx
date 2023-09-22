import {
  useControllableValue,
  useDeepCompareEffect,
  useMemoizedFn,
} from 'ahooks';
import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import LForm from 'lighting-design/Form';
import BaseTable from 'lighting-design/Table/base/BaseTable';
import type {
  LTableInstance,
  LTableProps,
} from 'lighting-design/Table/base/types';
import { isFunction, uniqueId } from 'lighting-design/_utils';
import type {
  Dispatch,
  Key,
  MutableRefObject,
  ReactNode,
  SetStateAction,
} from 'react';
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

/** 编辑表格实例 */
export type LEditTableInstance = {
  /** 调用指定索引插入方法 */
  insert: (index: number, record?: Record<string, any>) => void;
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
  /** 在保存或删除的一行数据时是否需要实时修改 */
  isTimelyModified?: boolean;
  /** 表格表格的实例 */
  editTableRef: MutableRefObject<LEditTableInstance | undefined>;
  /** 正在编辑项的key值(唯一id) */
  editingKeys: Key[];
  /** 受控 正在编辑的key改变时触发 */
  onEditingKeys: Dispatch<SetStateAction<string[]>>;
  /**
   * 保存更新的回调
   * @param row 当前行的所有数据 ( 包括主键 id )
   * @param isNewRow 是否是新增的数据行
   * @param i 当前行的索引
   *
   */
  onSave?: (row: Record<string, any>, isNewRow: boolean, i: number) => any;
  /**
   * 删除的回调
   * @param key 当前行的数据的key
   * @param isNewRow 是否是新增的数据行
   * @param i 当前行的索引
   */
  onDelete?: (key: Key, isNewRow: boolean, i: number) => any;
};

export type LEditTableProps = {
  rowKey: string;
  editTableOptions?: EditTableOptions;
  /** 列配置 多了 editable 用于配置表单项 */
  columns: LTableProps['columns'] & {
    /** 为false此项不能编辑 ,  只能为 LFormItemXXX 或 Form.Item */
    editable?: ReactNode;
  };
} & Partial<Omit<LTableProps, 'columns' | 'contentRender'>> &
  Record<string, any>;

/**
 * 编辑表格
 */
const LEditTable: React.FC<LEditTableProps> = (props) => {
  const {
    // 配合表格使用
    value: fromValue,
    onValuesChange: formOnValuesChange,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    contentRender,
    rowClassName,

    request: outRequest,
    columns,
    size,
    dataSource,
    rowKey: outRowKey = 'key',
    tableRef: outTableRef,

    editTableOptions = emptyObject,

    ...restprops
  } = props;

  const { isTimelyModified = true, formProps = emptyObject } = editTableOptions;
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
    const mergedColumns = columns?.map((col: Record<string, any>) => {
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
              rowKey: keyId,
              nameList: [], // 当前行所有的表单字段
              dataIndexs: [],
              record,
              index,
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

  /** 添加表格一行 如果有值则表单赋值 */
  const addItemRow = useMemoizedFn((row) => {
    const uid = (row && row?.[outRowKey]) || uniqueId('row-key');
    formOnValuesChange?.({
      ...fromValue,
      [uid]: itemFieldObj,
    });
    const rowItem = row ? { ...row } : { [outRowKey]: uid, ...itemFieldObj };
    form.setFieldValue(uid, rowItem);
    setEditingKeys((prevKeys) => [...prevKeys, uid]);
    return rowItem;
  });

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
    // 只验证当前正在编辑的行
    await form.validateFields(editableKeyMap.current[key].nameList);
    const curRow = form.getFieldValue(key);
    const { index } = editableKeyMap.current[key];
    // 如果返回 Promise.reject() 就终止
    await editTableOptions?.onSave?.(
      { [outRowKey]: key, ...curRow },
      isAddNewRowData(key),
      index as number,
    );

    if (isTimelyModified) {
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
    }
  };

  /** 删除 */
  const onDelete = async (key: Key) => {
    const { index } = editableKeyMap.current[key];
    if (fromValue) {
      delete fromValue[key];
    }
    formOnValuesChange?.({
      ...fromValue,
    });
    // 如果返回 Promise.reject() 就终止
    await editTableOptions?.onDelete?.(key, isAddNewRowData(key), index);

    if (isTimelyModified) {
      tableRef.current?.setTableData((prev) => {
        const newList = prev.list.filter((item) => item[outRowKey] !== key);
        return {
          total: newList.length,
          list: newList,
        };
      });
      setEditingKeys(editingKeys.filter((itemKey) => itemKey !== key));
    }
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
  const onInsert = (index: number, row?: Record<string, any>) => {
    // eslint-disable-next-line no-param-reassign
    if (!index) index = 0;
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

  /** 重置表单数据 */
  const resetFields = (key?: Key) => {
    if (!key) {
      form.resetFields();
      return;
    }
    form.resetFields(editableKeyMap.current[key].nameList);
  };
  /** 设置某一行的表单数据 */
  const setFieldValue = (key: Key, row: Record<string, any>) => {
    form.setFieldValue(key, row);
  };
  const setFieldsValue = (row: Record<string, any>) => {
    form.setFieldsValue({ ...row });
  };
  /** 验证表单数据 */
  const validateFields = async (key: Key) => {
    if (key) {
      return await form.validateFields(editableKeyMap.current[key].nameList);
    }
    return form.validateFields();
  };

  // 暴露外部方法
  useImperativeHandle(editTableOptions?.editTableRef, () => ({
    /** 编辑 */
    edit: onEdit,
    /** 取消 */
    cancel: onCancel,
    /** 保存 */
    save: onSave,
    /** 删除 */
    delete: onDelete,
    /** 插入 */
    insert: onInsert,
    /** 后面新增 */
    push: onPushAndUnshift('push'),
    /** 前面新增 */
    unshift: onPushAndUnshift('unshift'),
    resetFields,
    setFieldsValue,
    setFieldValue,
    validateFields,
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

  useDeepCompareEffect(() => {
    if (fromValue) {
      form.setFieldsValue({
        ...fromValue,
      });
    }
  }, [fromValue]);

  return (
    <LForm
      size={size}
      {...formProps}
      form={form}
      submitter={false}
      component={false}
      onValuesChange={(a, b, c) => {
        formProps?.onValuesChange?.(a, b, c);
        formOnValuesChange?.(c);
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
