import {
  useControllableValue,
  useDeepCompareEffect,
  useMemoizedFn,
} from 'ahooks';
import type { TableProps } from 'antd';
import classnames from 'classnames';
import type { LFormProps } from 'lighting-design/Form';
import LForm from 'lighting-design/Form';
import type { LFormItemProps } from 'lighting-design/FormItem';
import BaseTable from 'lighting-design/Table/base/BaseTable';
import type {
  LTableInstance,
  LTableProps,
} from 'lighting-design/Table/base/types';
import { isFunction, uniqueId } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type {
  Dispatch,
  Key,
  MutableRefObject,
  ReactElement,
  SetStateAction,
} from 'react';
import React, {
  cloneElement,
  isValidElement,
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
  /** 调用插入到指定索引位置的数据方法 如果第二个参数传值 则新增时会赋值 */
  insert: (index: number, record?: Record<string, any>) => void;
  /** 调用从数组底部新增数据方法 如果第一个参数传值 则新增时会赋值*/
  push: (record?: Record<string, any>) => void;
  /** 调用从数组头部新增数据方法 如果第一个参数传值 则新增时会赋值*/
  unshift: (record?: Record<string, any>) => void;
  /** 某一行进入编辑 */
  edit: (record: Record<string, any>) => void;
  /**
   * 保存某一行数据
   *
   * 会触发 editTableOptions.onSave 事件
   *  * 如果返回 Promise.reject() 就终止实时修改, 即便 isTimelyModified = true
   *  * 如果 isTimelyModified = false 则不会触发实时修改,
   *  * 外部可通过 tableRef 和 editTableOptions.onEditingKeys 修改
   *
   */
  save: (key: Key) => void;
  /**
   * 删除某一行
   *
   * 会触发 editTableOptions.onSave 事件
   *  * 如果返回 Promise.reject() 就终止实时修改, 即便 isTimelyModified = true
   *  * 如果 isTimelyModified = false 则不会触发实时修改,
   *  * 外部可通过 tableRef 和 editTableOptions.onEditingKeys 修改
   */
  delete: (key: Key) => void;
  /** 取消编辑某一行*/
  cancel: (key: Key) => void;
  /** 重置内置表单所有值数据 如果传key 则重置当前行的值*/
  resetFields: (key?: Key) => void;
  /** 设置内置表单全部数据 ( 也可单独设置 )*/
  setFieldsValue: (record: Record<string, any>) => void;
  /** 设置某一行的表单数据 */
  setFieldValue: (key: Key, record: Record<string, any>) => void;
  /** 验证内置表单的所有表单值, 如果传 key 则验证该行的值  */
  validateFields: (key?: Key) => Promise<Record<string, any>>;
  /**
   * 重置表格数据到初始状态
   * @param keys  初始状态下正在编辑的 editingKeys 如果不传则为 []
   *
   */
  resetTableData: (keys?: Key[]) => void;
};

export type EditTableOptions = {
  /** 内置表单 LForm 的 Props 部分 API 不可用 */
  formProps?: Omit<LFormProps, 'submitter' | 'component'>;
  /** 在保存或删除某一行数据时是否需要实时修改 */
  isTimelyModified?: boolean;
  /** 表格表格的实例 */
  editTableRef: MutableRefObject<LEditTableInstance | undefined>;
  /** 初始值 正在编辑项的key值(唯一id) */
  defaultEditingKeys?: Key[];
  /** 受控 正在编辑项的key值(唯一id) */
  editingKeys: Key[];
  /** 受控 正在编辑的key改变时回调 */
  onEditingKeys: Dispatch<SetStateAction<string[]>>;
  /**
   * 调用 editTableRef.current?.save(id)  保存更新的回调
   *
   * 如果返回 Promise.reject() 就终止实时修改
   *
   * 如果 isTimelyModified = false 则不会触发实时修改
   *
   * @param row 当前行的所有数据 ( 包括主键 id )
   * @param isNewRow 是否是通过 push unshift insert 新增的数据行
   * @param i 当前行的索引
   *
   */
  onSave?: (row: Record<string, any>, isNewRow: boolean, i: number) => any;
  /**
   *
   * 调用 editTableRef.current?.delete(id)  删除的回调
   *
   * 如果返回 Promise.reject() 就终止实时修改
   *
   * 如果 isTimelyModified = false 则不会触发实时修改
   *
   * @param key 当前行的数据的key
   * @param isNewRow 是否是通过 push unshift insert  新增的数据行
   * @param i 当前行的索引
   */
  onDelete?: (key: Key, isNewRow: boolean, i: number) => any;
};

export type LEditTableProps = {
  /**
   * 表单值
   */
  value?: Record<string, Record<string, any>>;
  /**
   * 内部表单值变化后的回调
   * @param allVal  所有行的表单值
   * @param key key
   * @param value 当前行的表单值
   * @param index  索引
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.21
   * @memberof LTableProps
   */
  onValuesChange?: (
    allVal: Record<string, Record<string, any>>,
    key: string,
    value: Record<string, any>,
    index: number,
  ) => void;
  /**
   * 主键 id 必须是字符串类型
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.21
   * @memberof LTableProps
   */
  rowKey: string;
  /**
   * 编辑表格的配置项
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.21
   * @memberof LTableProps
   */
  editTableOptions?: EditTableOptions;
  /**
   * 编辑表格的列配置 多了 editable属性  getEditable方法  用于配置每一项表单项
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.21
   * @memberof LTableProps
   */
  columns: TableProps<any>['columns'] & {
    /** 为false此项不能编辑 ,  只能为 LFormItemXXX 或 Form.Item */
    editable?: ReactElement;
    /** 自定义配置每一项 LFormItemXXX 的配置 */
    getEditable?: (
      val: any,
      row: Record<string, any>,
      i: number,
    ) => Omit<LFormItemProps, 'name'>;
  };
} & Partial<Omit<LTableProps, 'columns' | 'contentRender'>>;

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
    toolbarActionConfig,

    request: outRequest,
    columns,
    size,
    dataSource,
    rowKey: outRowKey = 'key',
    tableRef: outTableRef,

    editTableOptions = emptyObject,

    ...restprops
  } = props;

  // console.log('restprops', restprops);

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
  const isFirstRender = useRef(true);
  const tableRef = useRef<LTableInstance>();
  const alreadyTableDataRef = useRef<Record<string, any>[]>([]);
  const editableKeyMap = useRef<Record<string, any>>({});

  const [editingKeys, setEditingKeys] = useControllableValue<string[]>(
    editTableOptions,
    {
      defaultValue: [],
      defaultValuePropName: 'defaultEditingKeys',
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
      // 收集新增一行的新增字段名 , 排除操作列
      if (col.dataIndex && col.editable) {
        itemDataIndexObj[col.dataIndex] = void 0;
      }

      const render = (
        text: any,
        record: Record<string, any>,
        index: number,
      ) => {
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

          if (
            !editableKeyMap.current[keyId].dataIndexs.includes(col.dataIndex)
          ) {
            editableKeyMap.current[keyId].dataIndexs.push(col.dataIndex);
            editableKeyMap.current[keyId].nameList.push(namePath);
          }
        }

        if (
          col.editable &&
          isValidElement(col?.editable) &&
          editingKeys?.includes(keyId)
        ) {
          const { disabledEdit, ...formItemProps } =
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
  }, [columns, editingKeys.join('')]);

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
    (key) =>
      !alreadyTableDataRef.current?.find((item) => item[outRowKey] === key),
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

  const innerToolbarActionConfig = useMemo(() => {
    if (!toolbarActionConfig) return false;
    return {
      showColumnSetting: false,
      showDensity: false,
      showFullscreen: false,
      showReload: false,
      ...toolbarActionConfig,
    };
  }, [toolbarActionConfig]);

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
          if (outTableRef) {
            if (isFunction(outTableRef)) {
              (outTableRef as any)?.(info);
            } else {
              outTableRef.current = info;
            }
          }
        }}
        contentRender={void 0}
        toolbarActionConfig={innerToolbarActionConfig}
        pagination={false}
        rowKey={outRowKey}
        columns={mergedColumns}
        rowClassName={classnames('light-editable-row', rowClassName)}
        // @ts-ignore
        request={request}
        size={size}
        {...restprops}
      />
    </LForm>
  );
};

export default LEditTable;
