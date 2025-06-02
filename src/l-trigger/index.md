---
title: LTrigger
toc: content
demo:
  cols: 2
---

# LTrigger

一个灵活的触发器组件，支持多种选择模式和自定义内容。

## 代码演示

### 基础用法

<code src='./demos/demo1.tsx'></code>

### 普通多选模式

<code src='./demos/demo7.tsx'></code>

### Tag 模式

<code src='./demos/demo3.tsx' ></code>

<!-- ### 与 LCardGroup 结合

<code src='./demos/demo5.tsx' ></code>

### 与 LTagGroup 结合

<code src='./demos/demo6.tsx' ></code>

### 与 LTable 结合

<code src='./demos/demo4.tsx' ></code>

### 在 LForm 中使用


<code src='./demos/demo2.tsx' ></code>  -->

### children 为函数

<code src='./demos/demo8.tsx' ></code>

## API

```ts
import { LTrigger } from 'lighting-design';
```

:::warning{title=注意}

- 弹出层的宽度由 `children` 组件控制

- `children` 组件会接受到 `mode` ,`labelInValue`,`open`，`setOpen`，`value`，`onChange` 必须在 `children` 组件中绑定 `value，onChange`

- 默认`children`接受的`value`为`value.value`, 如果`labelInValue`为`true`, `children`接受的`value`为 `{ label: xxx; value: xxx }` , `onChange`传的值必须是`{ label: xxx; value: xxx }`

- 与表格结合时 `rowSelection` 中的 `preserveSelectedRowKeys` 属性建议设置为 `true` 即当数据被删除时仍然保留选项的 key

- 当屏幕空间足够时，会按照 `placement` 的设置进行弹层。当空间不足时则会取反向位置进行弹层`（例如 top 不够时，会改为 bottom，topLeft 不够时会改为 bottomLeft）`。单一方向如 `top bottom left right`当贴边时进行自动位移

  :::

组件还支持 antd Select 组件的其他属性 **部分属性内部已经重写**。

| 参数              | 说明                                                                         | 类型                                                            | 默认值         |
| ----------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------- |
| defaultValue      | 默认值                                                                       | `LTriggerValue`                                                 | `-`            |
| value             | 受控值                                                                       | `LTriggerValue`                                                 | `-`            |
| labelInValue      | 是否将传入子组件的 value 值转换为{ value: xxx, label: xxx }格式              | `boolean`                                                       | `false`        |
| mode              | 选择回显的模式，可选值：`radio` \| `checkbox` \| `radioTag` \| `checkboxTag` | `string`                                                        | `'radio'`      |
| split             | checkbox 模式下的分隔符                                                      | `string`                                                        | `' / '`        |
| open              | 是否打开弹出层                                                               | `boolean`                                                       | -              |
| defaultOpen       | 默认是否打开弹出层                                                           | `boolean`                                                       | `false`        |
| width             | 触发器宽度                                                                   | `number` \| `string`                                            | `250`          |
| placement         | 弹出层方向                                                                   | `PopoverProps['placement']`                                     | `'bottomLeft'` |
| destroyOnHide     | 关闭时是否销毁弹出层内容                                                     | `boolean`                                                       | `false`        |
| popupArrow        | 是否显示弹出层箭头                                                           | `boolean` \| `{ pointAtCenter: boolean }`                       | `false`        |
| getPopupContainer | 自定义弹出层的挂载节点                                                       | `(triggerNode: HTMLElement) => HTMLElement`                     | -              |
| popoverProps      | 弹出层的额外属性                                                             | [PopoverProps](https://ant.design/components/popover-cn#api)    | -              |
| onOpenChange      | 弹出层开关状态变化回调                                                       | `(open: boolean) => void`                                       | -              |
| onChange          | value 变化的回调                                                             | `(v: LTriggerValue) => void`                                    | -              |
| children          | 子组件                                                                       | `ReactNode` \| `(props: LTriggerChildrenProps) => ReactElement` | -              |

### LTriggerChildrenProps

当 children 为函数时的参数类型：

| 参数         | 说明                       | 类型                             | 默认值 |
| ------------ | -------------------------- | -------------------------------- | ------ |
| value        | 当前值                     | `LTriggerValue \| LValueType`    | -      |
| onChange     | 值改变回调                 | `(value: LTriggerValue) => void` | -      |
| open         | 当前弹出层是否打开         | `boolean`                        | -      |
| setOpen      | 设置弹出层开关状态         | `(open: boolean) => void`        | -      |
| labelInValue | 是否启用 labelInValue 模式 | `boolean`                        | -      |
| mode         | 当前选择模式               | `LTriggerMode`                   | -      |

### mode 模式说明

- `radio`: 单选模式

  - 子组件 onChange 调用方式：`onChange({ label: string, value: string|number })`

- `checkbox`: 多选模式

  - 子组件 onChange 调用方式：`onChange({ label: string, value: (string|number)[] })`
  - 建议 label 的值用 `-` 或 `/` 或 `,` 分隔

- `radioTag`: 单选标签模式

  - 子组件 onChange 调用方式：`onChange({ label: string, value: string|number })`

- `checkboxTag`: 多选标签模式
  - 子组件 onChange 调用方式：`onChange({ label: string[], value: (string|number)[] })`

### LValueType

```ts
export type LValueType = string | number | (string | number)[];
```

### LTriggerValue

```ts
export type LTriggerValue<T = LValueType> = {
  label: T; // 显示文本
  value: T; // 实际值
};
```
