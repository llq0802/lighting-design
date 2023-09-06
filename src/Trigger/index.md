---
title: LTrigger
toc: content
---

# LTrigger

选择弹出框、弹出任意内容、用于复杂的选择组件。

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### Tag 模式

<code src='./demos/Demo3.tsx' ></code>

### 与 LTable 结合

<code src='./demos/Demo4.tsx' ></code>

### 在 LForm 中使用

<code src='./demos/Demo2.tsx' ></code>

## API

```ts
import { LTrigger } from 'lighting-design';
```

:::warning{title=注意}
2.1.18 版本已重构该组件：

- 弹出层的宽度由 `children` 组件控制

- `mode = tag` 下 `value` 配置对象下的 `value` , `label` 属性必须都是数组

- 如果在 `LForm`或 `Form`中使用，默认接收到的值必须是`{ label: string; value: string; }` ,`fieldNames` 可配置为其他字段名

- `children` 组件会接受到 `open`，`setOpen`，`value`，`onChange` 必须在 `children` 组件中绑定 `value，onChange` 表单才会收集到数据

- `children`接受到的`value`为`value.value` `onChange`传的值必须是`{ label: xxx; value: xxx }` ,`fieldNames` 可配置为其他字段名

- 当屏幕空间足够时，会按照 `placement` 的设置进行弹层。当空间不足时则会取反向位置进行弹层`（例如 top 不够时，会改为 bottom，topLeft 不够时会改为 bottomLeft）`。单一方向如 `top bottom left right`当贴边时进行自动位移

  :::

|       参数        |                             说明                             |                                         类型                                          |               默认值                |
| :---------------: | :----------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :---------------------------------: |
|       mode        |                          显示的模式                          |                                 `'default' \| 'tag'`                                  |             `'default'`             |
|       width       |                          选择框宽度                          |                                   `number\|string`                                    |                `250`                |
|    fieldNames     |            配置字段 label 字段名，value 字段的名             |                          `{ label: string; value: string; }`                          | `{ label: 'label',value: 'value' }` |
|       size        |                          选择框大小                          |                            `'small' \| 'middle'\|'large'`                             |             `'middle'`              |
|   overlayArrow    |  修改弹出层的箭头的显示状态以及修改箭头是否指向目标元素中心  |                       `boolean` \| `{ pointAtCenter: boolean }`                       |               `false`               |
|    allowClear     |                           支持清除                           |                                       `boolean`                                       |               `true`                |
|     placement     |                       弹出层弹出的位置                       |                                      `Placement`                                      |           `'bottomLeft'`            |
|   destroyOnHide   |             弹出层关闭时是否销毁 `children` 组件             |                                       `boolean`                                       |              `'false'`              |
|     bordered      |                       组件是否需要边框                       |                                       `boolean`                                       |               `true`                |
|     disabled      |                           是否禁用                           |                                       `boolean`                                       |               `false`               |
|    placeholder    |                         placeholder                          |                                       `string`                                        |             `'请选择'`              |
|   overlayStyle    |                          弹出层样式                          |                                    `CSSProperties`                                    |                 `-`                 |
|     className     |                           组件类名                           |                                       `string`                                        |                 `-`                 |
| overlayClassName  |                         弹出层的类名                         |                                       `string`                                        |                 `-`                 |
|       style       |                           组件样式                           |                                    `CSSProperties`                                    |                 `-`                 |
|       open        |                     受控, 是否打开弹出层                     |                                       `boolean`                                       |                 `-`                 |
|    suffixIcon     |                    自定义的选择框后缀图标                    |                                      `ReactNode`                                      |                 `-`                 |
|     clearIcon     |                        自定义清除图标                        |                                      `ReactNode`                                      |                 `-`                 |
|   defaultValue    |                            默认值                            | 默认为`{ label: string\| string[]; value: string\| string[] }` 与`fieldNames`配置有关 |                 `-`                 |
|    defaultOpen    |                      默认是否打开弹出层                      |                                       `boolean`                                       |               `false`               |
|       value       |                  受控值, 配合`onChange`使用                  | 默认为`{ label: string\| string[]; value: string\| string[] }` 与`fieldNames`配置有关 |                 `-`                 |
|   onOpenChange    |                   受控, 打开弹出层的的回调                   |                                 `function(open):void`                                 |                 `-`                 |
|     tagRender     |             自定义渲染 tag `mode=tag`模式下生效              |                  `(props) => ReactElement \| JSXElementConstructor`                   |                 `-`                 |
|     onChange      |                受控, value 变化时，调用此函数                |                                   `function(value)`                                   |                 `-`                 |
| getPopupContainer |             控制渲染到的节点。默认渲染到 body 上             |                      `(triggerNode: HTMLElement) => HTMLElement`                      |        `() => document.body`        |
|     children      | children 组件会接受到 `open`，`setOpen`，`value`，`onChange` |                                    `ReactElement`                                     |                 `-`                 |

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
