---
title: LTrigger
toc: content
demo:
  cols: 2
---

# LTrigger

选择弹出框、弹出任意内容、用于复杂的选择组件。

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 普通多选模式

<code src='./demos/Demo7.tsx'></code>

### Tag 模式

<code src='./demos/Demo3.tsx' ></code>

### 与 LCardGroup 结合

<code src='./demos/Demo5.tsx' ></code>

### 与 LTagGroup 结合

<code src='./demos/Demo6.tsx' ></code>

### 与 LTable 结合

<code src='./demos/Demo4.tsx' ></code>

### 在 LForm 中使用

<code src='./demos/Demo2.tsx' ></code>

### children 为函数

<code src='./demos/Demo8.tsx' ></code>

## API

```ts
import { LTrigger } from 'lighting-design';
```

:::warning{title=注意}
2.1.15 版本已重构该组件：

- 弹出层的宽度由 `children` 组件控制

- `children` 组件会接受到 `mode` `labelInValue` `fieldNames` `open`，`setOpen`，`value`，`onChange` 必须在 `children` 组件中绑定 `value，onChange`

- 默认`children`接受的`value`为`value.value`, 如果`labelInValue`为`true`, `children`接受的`value`为 `{ label: xxx; value: xxx }` , `onChange`传的值必须是`{ label: xxx; value: xxx }`, `fieldNames`可配置为其他字段名

- 如果在 `LForm`或 `Form`中使用，默认接收到的值必须是`{ label: string; value: string; }` ,`fieldNames` 可配置为其他字段名

- 与表格结合时 `rowSelection` 中的 `preserveSelectedRowKeys` 属性建议设置为 `true` 即当数据被删除时仍然保留选项的 key

- 当屏幕空间足够时，会按照 `placement` 的设置进行弹层。当空间不足时则会取反向位置进行弹层`（例如 top 不够时，会改为 bottom，topLeft 不够时会改为 bottomLeft）`。单一方向如 `top bottom left right`当贴边时进行自动位移

  :::

| 参数              | 说明                                                                                            | 类型                                                                                  | 默认值                              |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------- |
| mode              | 选择回显的模式, **会透传给子组件**                                                              | `LTriggerMode`                                                                        | `radio`                             |
| width             | 选择框宽度                                                                                      | `number\|string`                                                                      | `250`                               |
| split             | mode 为 `checkbox` 回显分割的字符, 建议使用`' - '`或`' / '`或`' , '`                            | `string`                                                                              | `' / '`                             |
| maxTagCount       | mode 为 `checkboxTag` 最多显示多少个 tag，响应式模式会对性能产生损耗                            | `'responsive' \| number`                                                              | `-`                                 |
| fieldNames        | 配置字段 label 字段名，value 字段的名, **会透传给子组件**                                       | `{ label: string; value: string; }`                                                   | `{ label: 'label',value: 'value' }` |
| size              | 选择框大小                                                                                      | `'small' \| 'middle'\|'large'`                                                        | `'middle'`                          |
| overlayArrow      | 修改弹出层的箭头的显示状态以及修改箭头是否指向目标元素中心                                      | `boolean` \| `{ pointAtCenter: boolean }`                                             | `false`                             |
| allowClear        | 清除图标                                                                                        | `boolean\| { clearIcon :ReactNode}`                                                   | `true`                              |
| placement         | 弹出层弹出的位置                                                                                | `Placement`                                                                           | `'bottomLeft'`                      |
| destroyOnHide     | 弹出层关闭时是否销毁 `children` 组件                                                            | `boolean`                                                                             | `false`                             |
| variant           | 形态变体                                                                                        | `outlined \| borderless \| filled`                                                    | `outlined`                          |
| labelInValue      | 把传入子组件`value 的值从 value.value 变为{ value: xxx, label: xxx }`的格式, **会透传给子组件** | `boolean`                                                                             | `false`                             |
| disabled          | 是否禁用                                                                                        | `boolean`                                                                             | `false`                             |
| placeholder       | placeholder                                                                                     | `string`                                                                              | `'请选择'`                          |
| overlayStyle      | 弹出层样式                                                                                      | `CSSProperties`                                                                       | `-`                                 |
| className         | 组件类名                                                                                        | `string`                                                                              | `-`                                 |
| overlayClassName  | 弹出层的类名                                                                                    | `string`                                                                              | `-`                                 |
| style             | 组件样式                                                                                        | `CSSProperties`                                                                       | `-`                                 |
| open              | 受控, 是否打开弹出层, **会透传给子组件**                                                        | `boolean`                                                                             | `-`                                 |
| suffixIcon        | 自定义的选择框后缀图标                                                                          | `ReactNode`                                                                           | `-`                                 |
| defaultValue      | 默认值                                                                                          | 默认为`{ label: string\| string[]; value: string\| string[] }` 与`fieldNames`配置有关 | `-`                                 |
| defaultOpen       | 默认是否打开弹出层                                                                              | `boolean`                                                                             | `false`                             |
| value             | 受控值, 配合`onChange`使用, **会透传给子组件**                                                  | 默认为`{ label: string\| string[]; value: string\| string[] }` 与`fieldNames`配置有关 | `-`                                 |
| onOpenChange      | 受控, 打开弹出层的的回调                                                                        | `function(open):void`                                                                 | `-`                                 |
| tagRender         | 自定义渲染 tag `mode=tag`模式下生效                                                             | `(props) => ReactElement \| JSXElementConstructor`                                    | `-`                                 |
| onChange          | 受控, value 变化时，调用此函数 , **会透传给子组件**                                             | `function(value)`                                                                     | `-`                                 |
| getPopupContainer | 控制渲染到的节点。默认渲染到 body 上                                                            | `(triggerNode: HTMLElement) => HTMLElement`                                           | `() => document.body`               |
| children          | children 组件或函数会接受到 `open`，`setOpen`，`value`，`onChange` 等参数                       | `ReactNode \| (props) => ReactNode`                                                   | `-`                                 |

### mode 在子组件中使用时, 子组件 onChange 的调用方式：

- 为`radio`时子组件 `onChange` 调用方式为

```ts
onChange(values: {label: string, value: string | number });
```

- 为`checkbox`时子组件 `onChange` 调用方式为

```ts
onChange(values: {label: string[], value: (string | number)[] });
```

- 为`radioTag`时子组件 `onChange` 调用方式为

```ts
onChange(values: {label: string, value: string | number });
```

- 为`checkboxTag`时子组件 `onChange` 调用方式为

```ts
onChange(values: {label: string[], value: (string | number)[] });
```

其中的 `label` 与 `value` 键名与 `fieldNames` 的配置有关

### LTriggerMode

```ts
export type LTriggerMode = 'checkboxTag' | 'radioTag' | 'checkbox' | 'radio';
```

### Placement

```ts
type Placement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';
```
