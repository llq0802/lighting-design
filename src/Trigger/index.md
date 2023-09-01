---
title: LTrigger
toc: content
---

# LTrigger

选择弹出框、弹出任意内容、用于复杂的选择组件。

## 代码演示

<!-- ### 基础用法

<code src='./demos/Demo1.tsx'></code>

### Tag 模式

<code src='./demos/Demo3.tsx' ></code>

### 在 LForm 中使用

<code src='./demos/Demo2.tsx' ></code> -->

### 在 LTable 中使用

<code src='./demos/Demo4.tsx' ></code>

## API

```ts
import { LTrigger } from 'lighting-design';
```

> - `mode = tag` 下 `value` 配置对象下的 `value` , `label` 属性必须都是数组
>
> - 如果在 `LForm`或 `Form`中使用，默认接收到的值必须是`{ label: string; value: string; }` ,`fieldNames` 可配置为其他字段名
>
> - children 组件会接受到 `open`，`setOpen`，`value`，`onChange` 必须在 children 组件中绑定 `value，onChange` 才会收集到数据

|         参数         |                             说明                             |                                         类型                                          |               默认值                |
| :------------------: | :----------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :---------------------------------: |
|         mode         |                          显示的模式                          |                                 `'default' \| 'tag'`                                  |             `'default'`             |
|        width         |                          选择框宽度                          |                                   `number\|string`                                    |                `250`                |
|      fieldNames      |            配置字段 label 字段名，value 字段的名             |                          `{ label: string; value: string; }`                          | `{ label: 'label',value: 'value' }` |
|       children       | children 组件会接受到 `open`，`setOpen`，`value`，`onChange` |                                    `ReactElement`                                     |                 `-`                 |
|         size         |                          选择框大小                          |                            `'small' \| 'middle'\|'large'`                             |             `'middle'`              |
|      allowClear      |                           支持清除                           |                                       `boolean`                                       |               `true`                |
|      placement       |                       选择框弹出的位置                       |                   `'bottomLef't 'bottomRight' 'topLeft' 'topRight'`                   |           `'bottomLeft'`            |
|       disabled       |                             禁用                             |                                       `boolean`                                       |               `false`               |
|     placeholder      |                         placeholder                          |                                       `string`                                        |             `'请选择'`              |
|    popupClassName    |                          弹出层类名                          |                                       `string`                                        |                 `-`                 |
|    dropdownWidth     |           弹出层宽度 当值小于选择框宽度时会被忽略            |                                       `number`                                        |                `500`                |
|    dropdownStyle     |                          弹出层样式                          |                                    `CSSProperties`                                    |                 `-`                 |
|      className       |                           组件类名                           |                                       `string`                                        |                 `-`                 |
|        style         |                           组件样式                           |                                    `CSSProperties`                                    |                 `-`                 |
|         open         |                       是否展开下拉菜单                       |                                       `boolean`                                       |                 `-`                 |
|  getPopupContainer   |              菜单渲染父节点。默认渲染到 body 上              |                                `function(triggerNode)`                                |        `() => document.body`        |
|      suffixIcon      |                    自定义的选择框后缀图标                    |                                      `ReactNode`                                      |                 `-`                 |
|      clearIcon       |                        自定义清除图标                        |                                      `ReactNode`                                      |                 `-`                 |
|     defaultValue     |                            默认值                            | 默认为`{ label: string\| string[]; value: string\| string[] }` 与`fieldNames`配置有关 |                 `-`                 |
|        value         |                  受控值 配合`onChange`使用                   | 默认为`{ label: string\| string[]; value: string\| string[] }` 与`fieldNames`配置有关 |                 `-`                 |
| onDropdownOpenChange |                      展开下拉菜单的回调                      |                                   `function(open)`                                    |                 `-`                 |
|      tagRender       |             自定义渲染 tag `mode=tag`模式下生效              |                                `(props) => ReactNode`                                 |                 `-`                 |
|       onChange       |                   value 变化时，调用此函数                   |                                   `function(value)`                                   |                 `-`                 |
|     selectProps      |                    `antd`选择器组件 Props                    |              [SelectProps](https://ant.design/components/select-cn#api)               |                 `-`                 |
