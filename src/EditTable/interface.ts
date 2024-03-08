import type { FormInstance } from 'antd';
import type { LFormProps } from 'lighting-design/Form';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { LTableProps } from 'lighting-design/Table';
import type { Dispatch, Key, MutableRefObject, ReactElement, SetStateAction } from 'react';

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
  /** 获取某一行的表单数据 */
  getFieldValue: (key: Key) => Record<string, any>;
  /** 获取表单所有数据 */
  getFieldsValue: () => Record<string, any>;
  /** 验证内置表单的所有表单值, 如果传 key 则验证该行的值  */
  validateFields: (key?: Key) => Promise<Record<string, any>>;
  /**
   * 重置表格数据到初始状态
   * @param keys  初始状态下正在编辑的 editingKeys 如果不传则为 []
   *
   */
  resetTableData: (keys?: Key[]) => void;
  /** 内置表单实例 */
  form: FormInstance;
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
   * @param key key 当前行的唯一id
   * @param value 当前行的表单值
   * @param index  索引
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  onValuesChange?: (
    allVal: Record<string, Record<string, any>>,
    key: string,
    value: Record<string, any>,
    index: number,
  ) => void;
  /**
   * 主键 id 必须是字符串类型
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  rowKey: string;
  /**
   * 编辑表格的配置项
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  editTableOptions?: EditTableOptions;
  /**
   * 编辑表格的列配置 多了 editable属性  getEditable方法  用于配置每一项表单项
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  columns: LTableProps<any>['columns'] &
    {
      /** 为false此项不能编辑 ,  只能为 LFormItemXXX 或 Form.Item */
      editable?: ReactElement;
      /** 自定义配置每一项 LFormItemXXX 的配置 */
      getEditable?: (val: any, row: Record<string, any>, i: number) => Omit<LFormItemProps, 'name'>;
    }[];
} & Partial<Omit<LTableProps, 'columns' | 'contentRender'>>;
