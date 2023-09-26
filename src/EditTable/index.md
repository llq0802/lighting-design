---
title: LEditTable
toc: content
---

# LEditTable

基于 `LTable` `LForm` 封装的高级编辑表格, 默认关闭了 `pagination` 且不支持 `contentRender`

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'  background="#f5f5f5"></code>

### 不是实时修改

保存或者删除后通过调用查询接口来修改表格数据

<code src='./demos/Demo5.tsx'  background="#f5f5f5"></code>

### 异步加载

<code src='./demos/Demo3.tsx'  background="#f5f5f5"></code>

### 每个表单项的单独配置

只有第一行的名字被禁用编辑

<code src='./demos/Demo4.tsx'  background="#f5f5f5"></code>

### 与分页和表单查询结合

<code src='./demos/Demo6.tsx'  background="#f5f5f5"></code>

### 与 LFrom 结合 1

<code src='./demos/Demo2.tsx'  background="#f5f5f5"></code>

### 与 LFrom 结合 2

<code src='./demos/Demo7.tsx'  background="#f5f5f5"></code>

## API

:::warning{title=注意}
自 2.1.20 起新增此组件

- 在 `LForm` 中使用时 或者 有动态新增 删除一行数据时不建议配置 `pagination`

- 调用 `editTableRef.current?.save(id)` 或者 `editTableRef.current?.delete(id)` 时内部默认会直接修改数据 可通过 `editTableOptions.isTimelyModified=false`阻止,然后可通过调用查询接口修改

- 在`LForm`中使用时, 必须在 `LFormItem` 上设置`trigger="onValuesChange"    validateTrigger="onValuesValidate" `

- `LForm` 内置的重置或者校验数据对 `LEditTable` 不可用, 需要调用 `editTableRef.current?.resetFields()` 或者 `editTableRef.current?.validateFields()`来操作

- 在 `LFormItem` 的 `rules.validator` 可自定义验证编辑表格在表单中收集到的数据

- 在 `columns.editable` 必须为 `LFormItem` `LFormItemXXX` `Form.Item` 直接在上面配置的属性会对整个列生效 , `columns.getEditable`方法返回的对象通过对`参数的判断`可对每一项单独设置

  ```
  // 下面是在 LForm 中收集到的数据结构, 假设 LFormItem 的 name 为 list
  list:{
    key1:{
      name:xxx,
      age:xxx
      // 或者其他字段属性
    },
    key2:{
      name:xxx,
      age:xxx
        // 或者其他字段属性
    },
    // 有多少行数据就有多少个上面类似的对象结构

  }
  ```

:::

```ts
import { LEditTable } from 'lighting-design';
```

除了以下属性 [LTable](/components/table) 一致, 属性`(contentRender 除外)`

|       参数       |                                     说明                                     |                 类型                  | 默认值  |
| :--------------: | :--------------------------------------------------------------------------: | :-----------------------------------: | :-----: |
|      value       | 配合`LForm`时内置的表单值 `(一般不设置而是通过 LFrom 的 initialValues 设置)` | `Record<string, Record<string, any>>` |   `-`   |
|  onValuesChange  |                      配合`LForm`时内置表单值变化的回调                       |           `OnValuesChange`            |   `-`   |
|     columns      |       与 `LTable` 的 `columns` 一致但多了 `editable` 与 `getEditable`        |        `Record<string,any>[]`         |   `-`   |
|      rowKey      |                              唯一的主键的字段名                              |               `string`                | `'key'` |
| editTableOptions |                               编辑表格的配置项                               |          `EditTableOptions`           |  `- `   |

### OnValuesChange

```ts
  /**
   * 内部表单值变化后的回调
   * @param allVal  所有行的表单值
   * @param key 当前行的唯一id
   * @param value 当前行的表单值
   * @param index  索引
   */
 type OnValuesChange = onValuesChange: (
    allVal: Record<string, Record<string, any>>,
    key: string,
    value: Record<string, any>,
    index: number,
  ) => void;
```

### columns

```ts
  columns: TableProps<any>['columns'] & {
    /**不配置此项则此列不能编辑 ,  只能为 LFormItemXXX 或 Form.Item */
    editable?: ReactElement;
    /** 自定义配置每一项 LFormItemXXX 的配置 */
    getEditable?: (
      val: any,
      row: Record<string, any>,
      i: number,
    ) => Omit<LFormItemProps, 'name'> & {
      /** 单独配置该列的具体每一行是否能编辑 (新增一行数据时不影响)*/
      disabledEdit?:boolean
      //  自定义配置每一项 LFormItemXXX 的配置
      //...其他 LFormItemXXX  配置 , 可单独给每一行的 LFormItemXXX 配置属性

    };
  };
```

### EditTableOptions

```ts
type Key = React.Key;

export type EditTableOptions = {
  /** 内置表单 LForm 的 Props 部分 API 不可用 */
  formProps?: Omit<LFormProps, 'submitter' | 'component'>;
  /** 在保存或删除某一行数据时是否需要实时修改 默认为 true*/
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
```

### LEditTableInstance

```ts
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
   */
  resetTableData: (keys?: Key[]) => void;
};
```
