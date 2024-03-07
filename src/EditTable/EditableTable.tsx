import { useControllableValue, useDeepCompareEffect, useMemoizedFn } from 'ahooks';
import classnames from 'classnames';
import LForm from 'lighting-design/Form';
import BaseTable from 'lighting-design/Table/base/BaseTable';
import type { LTableInstance } from 'lighting-design/Table/interface';
import { isFunction, uniqueId } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import { useIsFirstRender } from 'lighting-design/hooks';
import type { Key } from 'react';
import React, { cloneElement, isValidElement, useImperativeHandle, useMemo, useRef } from 'react';
import type { LEditTableProps } from './interface';

const getRowKey = (rowKey: any) => {
  if (isFunction(rowKey)) {
    return rowKey;
  }
  return (record: Record<string, any>, index?: number) =>
    typeof rowKey === 'string' ? record[rowKey] : record.key ?? `${index}`;
};

/**
 * 编辑表格
 */
const LEditTable: React.FC<LEditTableProps> = (props) => {
  const {
    // 配合表格使用
    value: formValue,
    onValuesChange: formOnValuesChange,
    request: outRequest,
    columns,
    size,
    dataSource,
    rowKey: outRowKey = 'key',
    tableRef: outTableRef,
    editTableOptions = emptyObject,
    ...restprops
  } = props;

  const {
    isTimelyModified = true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    editingKeys: outEditingKeys,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onEditingKeys: outOnEditingKeys,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultEditingKeys,

    formProps = emptyObject,
  } = editTableOptions;
  const [form] = LForm.useForm();
  const isFirstRender = useIsFirstRender();
  const tableRef = useRef<LTableInstance>();
  const alreadyTableDataRef = useRef<Record<string, any>[]>([]);
  const editableKeyMap = useRef<Record<string, any>>({});
  const [editingKeys, setEditingKeys] = useControllableValue<string[]>(editTableOptions, {
    defaultValue: [],
    defaultValuePropName: 'defaultEditingKeys',
    valuePropName: 'editingKeys',
    trigger: 'onEditingKeys',
  });

  /** 获取每一行主键 id 的值 */
  const getRowKeyValue = useMemoizedFn(
    (record: Record<string, any>) => getRowKey(outRowKey)(record) as string,
  );

  /** 处理列 */
  const { mergedColumns, itemFieldObj } = useMemo(() => {
    const itemDataIndexObj: Record<string, any> = {};

    const mergedColumns = columns?.map((col: Record<string, any>) => {
      // 收集新增一行的新增字段名 , 排除操作列
      if (col.dataIndex && col.editable) {
        itemDataIndexObj[col.dataIndex] = void 0;
      }

      const render = (text: any, record: Record<string, any>, index: number) => {
        const keyId = getRowKeyValue(record);
        const namePath = [keyId, col.dataIndex]; // 把同一行的字段放在一个对象中

        if (col.dataIndex && col.editable) {
          if (!editableKeyMap.current[keyId]) {
            editableKeyMap.current[keyId] = {
              nameList: [], // 当前行所有的表单字段
              rowKey: keyId,
              record,
              index,
              dataIndexs: [],
            };
          } else {
            editableKeyMap.current[keyId] = {
              ...(editableKeyMap?.current?.[keyId] ?? {}),
              index, // 新增删除插入时更新最新的索引
            };
          }

          if (!editableKeyMap.current[keyId].dataIndexs.includes(col.dataIndex)) {
            editableKeyMap.current[keyId].dataIndexs.push(col.dataIndex);
            editableKeyMap.current[keyId].nameList.push(namePath);
          }
        }

        if (isValidElement(col?.editable) && editingKeys?.includes(keyId)) {
          const { disabledEdit = false, ...formItemProps } =
            col?.getEditable?.(text, record, index) ?? {};

          if (!disabledEdit) {
            return cloneElement(col.editable, {
              style: {
                marginBottom: 0,
                ...col.editable?.props?.style,
              },
              ...(formItemProps ?? {}),
              name: namePath,
            });
          }

          if (isFunction(col.render)) {
            return col.render(text, record, index);
          }
          return text;
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
  }, [editingKeys?.join(''), columns]);

  /** 添加表格一行 如果有值则表单赋值 */
  const addItemRow = useMemoizedFn((row) => {
    const uid = (row && row?.[outRowKey]) || uniqueId('row-key');
    const rowItem = row ? { ...row } : { [outRowKey]: uid, ...itemFieldObj };
    form.setFieldValue(uid, rowItem);
    setEditingKeys((prevKeys) => [...prevKeys, uid]);
    return rowItem;
  });

  /** 判断表格某一行是否是新增的数据*/
  const isAddNewRowData = useMemoizedFn(
    (key) => !alreadyTableDataRef.current?.find((item) => item[outRowKey] === key),
  );

  // ====================暴露方法区-开始====================

  const resetTableData = (keys?: string[]) => {
    setEditingKeys(keys ?? []);
    tableRef.current?.setTableData({
      total: [...alreadyTableDataRef.current].length,
      list: [...alreadyTableDataRef.current],
    });
  };
  /** 编辑 */
  const onEdit = (record: Record<string, any>) => {
    const keyId = getRowKeyValue(record);
    form.setFieldValue(keyId, { ...record });
    setEditingKeys((prev) => [...new Set([...prev, keyId])]);
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
  /** 设置全部表单数据 */
  const setFieldsValue = (row: Record<string, any>) => {
    form.setFieldsValue({ ...row });
  };
  /** 验证表单数据 */
  const validateFields = async (key?: Key) => {
    if (key) {
      return await form.validateFields(editableKeyMap.current[key].nameList);
    }
    return await form.validateFields();
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
    /** 重置表单 */
    resetFields,
    /** 设置所有表单项值 */
    setFieldsValue,
    /** 设置某一行表单项值 */
    setFieldValue,
    /** 验证表单项值 */
    validateFields,
    /** 重置表格数据到初始状态 */
    resetTableData,
  }));
  // ====================暴露方法区-结束====================

  const request = async (...args: any[]) => {
    if (dataSource?.length) {
      alreadyTableDataRef.current = [...dataSource];

      return {
        success: true,
        data: dataSource,
        total: dataSource.length,
      };
    }

    const res = await outRequest?.(...args);

    alreadyTableDataRef.current = [...(res?.data ?? [])];

    return (
      res ?? {
        success: true,
        data: [],
        total: 0,
      }
    );
  };

  useDeepCompareEffect(() => {
    if (!isFirstRender && dataSource?.length) {
      tableRef.current?.setTableData({
        total: dataSource.length,
        list: dataSource as any[],
      });
    }
  }, [dataSource]);

  useDeepCompareEffect(() => {
    if (formValue) {
      form.setFieldsValue({
        ...formValue,
      });
    }
  }, [formValue]);

  return (
    <LForm
      size={size}
      {...formProps}
      form={form}
      submitter={false}
      component={false}
      onValuesChange={(curName, curVal, allVal) => {
        const { index } = editableKeyMap.current[curName];
        formProps?.onValuesChange?.(curName, curVal, allVal, index);
        formOnValuesChange?.(allVal, curName, curVal, index);
      }}
    >
      <BaseTable
        // @ts-ignore
        tableRef={(info) => {
          tableRef.current = info;
          if (!outTableRef) return;
          if (isFunction(outTableRef)) {
            (outTableRef as any)?.(info);
          } else {
            outTableRef.current = info;
          }
        }}
        rowKey={outRowKey}
        columns={mergedColumns}
        // @ts-ignore
        request={request}
        size={size}
        toolbarActionConfig={false}
        pagination={false}
        {...restprops}
        rowClassName={(...args: any[]) => {
          const outRowClassName = restprops.rowClassName;
          return classnames(
            'light-editable-row',
            typeof outRowClassName === 'function' ? outRowClassName(...args) : outRowClassName,
          );
        }}
      />
    </LForm>
  );
};

export default LEditTable;

export * from './interface';
