---
title: LDescriptions
toc: content
nav:
  path: /components
---

# LDescriptions

用于显示描述信息。

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx' background='#f5f5f5'></code>

### title 与 extra

<code src='./demos/Demo2.tsx' background='#f5f5f5'></code>

### 结合 Card

<code src='./demos/Demo3.tsx' background='#f5f5f5'></code>

### 布局模式

<code src='./demos/Demo4.tsx' background='#f5f5f5'></code>

### 响应式一行展示几列

<code src='./demos/Demo7.tsx' background='#f5f5f5'></code>

### 与 Modal 结合

<code src='./demos/Demo5.tsx' background='#f5f5f5'></code>

### 自定义渲染

<code src='./demos/Demo6.tsx' background='#f5f5f5'></code>

## API

:::warning{title=注意}

- `title`,`extra`, `columns` 里面的 `title` , `record` 里面的`值`都可以值自定义的`ReactNode`

- `colon` 为`string`时可以设置冒号的颜色

:::

```ts
import { LDescriptions } from 'lighting-design';
```

### LDescriptionsProps

| 参数         | 说明                                                                      | 类型                                     | 默认值         |
| ------------ | ------------------------------------------------------------------------- | ---------------------------------------- | -------------- |
| title        | 左上角标题                                                                | `ReactNode`                              | `- `           |
| extra        | 右上角额外元素                                                            | `ReactNode`                              | `true`         |
| className    | 根容器类名                                                                | `string`                                 | `-`            |
| style        | 根容器样式                                                                | `CSSProperties`                          | `-`            |
| headerStyle  | 头部容器样式                                                              | `CSSProperties`                          | `-`            |
| columns      | 列字段配置                                                                | [LDescriptionItem](/LDescriptionItem)[]  | `[]`           |
| column       | 一行展示几列, 或`{ xs: 8, sm: 16, md: 24, ...}`的配置来设置响应式展示几列 | `number\| ColProps`                      | `3`            |
| gutter       | 每一项的间距                                                              | `ColProps['gutter']`                     | `16`           |
| layout       | 布局模式                                                                  | `'horizontal' \| 'inline' \| 'vertical'` | `'horizontal'` |
| titleAlign   | 每一项标题对齐方式                                                        | `'left' \| 'right'`                      | `'right'`      |
| titleWidth   | 每一项标题宽度                                                            | `number \| string`                       | `-`            |
| titleWrap    | 每一项标题过长时是否换行                                                  | `boolean`                                | `false`        |
| colon        | 每一项标题后面是否加上`：`符号, string 时可以自定义颜色                   | `boolean\|string`                        | `true`         |
| isLastBlock  | 最后一项是否占满`包含块`                                                  | `boolean`                                | `true`         |
| marginBottom | 每一项的`marginBottom`值                                                  | `number \| string`                       | `16`           |
| loading      | loading                                                                   | `boolean \| SpinProps`                   | `-`            |
| record       | 字段数据源                                                                | `Record<string, ReactNode>`              | `-`            |
| renderTitle  | 重新渲染每一项的标题                                                      | `FormProps['requiredMark']`              | `-`            |

### LDescriptionsItem

```ts
export type LDescriptionItem = {
  /** 当前项的标题 */
  title?: React.ReactNode;
  /** 当前项的key */
  dataIndex: string;
  /** ColProps['span'] */
  span?: number;
  /** 当前项的样式 */
  style?: React.CSSProperties;
  /** 当前项标题宽 */
  titleWidth?: number | string;
  /**`ColProps`的配置来设置响应式展示几列  { xs: 8, sm: 16, md: 24, ...}*/
  col?: ColProps;
  /** Col的样式 */
  colStyle?: React.CSSProperties;
  tooltip?: FormItemProps['tooltip'];
  /** 是否展示星星 */
  required?: boolean;
  /** 重新渲染当前项 */
  render?: (curVal: ReactNode, record: Record<string, ReactNode>, index: number) => ReactNode;
};
```
