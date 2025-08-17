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

| 参数            | 说明                                                                                                                                      | 类型                         | 默认值         | 版本 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------- | ---- |
| title           | 左上角标题                                                                                                                                | `ReactNode`                  | `-`            |      |
| extra           | 右上角额外元素                                                                                                                            | `ReactNode`                  | `-`            |      |
| className       | 根容器类名                                                                                                                                | `string`                     | `-`            |      |
| style           | 根容器样式                                                                                                                                | `CSSProperties`              | `-`            |      |
| headerClassName | 头部容器类名                                                                                                                              | `string`                     | `-`            |      |
| headerStyle     | 头部容器样式                                                                                                                              | `CSSProperties`              | `-`            |      |
| columns         | 列字段配置                                                                                                                                | `LDescriptionItem[]`         | `[]`           |      |
| column          | 一行展示几列, 或使用 ColProps 配置来设置响应式展示几列                                                                                    | `number \| ColProps`         | `3`            |      |
| gap             | 每一项的间距                                                                                                                              | `RowProps['gutter']`         | `16`           |      |
| justify         | 水平排列方式                                                                                                                              | `RowProps['justify']`        | `-`            |      |
| rowProps        | Row 组件的其他属性                                                                                                                        | `RowProps`                   | `-`            |      |
| colProps        | Col 组件的其他属性                                                                                                                        | `ColProps`                   | `-`            |      |
| layout          | 布局模式                                                                                                                                  | `'horizontal' \| 'vertical'` | `'horizontal'` |      |
| titleAlign      | 每一项标题对齐方式                                                                                                                        | `'left' \| 'right'`          | `'right'`      |      |
| titleWidth      | 每一项标题宽度，只在 layout 为 horizontal 时生效                                                                                          | `number \| string`           | `-`            |      |
| titleWrap       | 每一项标题过长时是否换行                                                                                                                  | `boolean`                    | `false`        |      |
| colon           | 每一项标题后面是否加上`：`符号                                                                                                            | `boolean`                    | `true`         |      |
| itemBottom      | 每一项的[marginBottom](file:///Users/yuehaishan/Documents/web/kaiyuan/lighting-design/src/l-form/components/base-submitter.tsx#L80-L80)值 | `number \| string`           | `16`           |      |
| loading         | loading 状态配置                                                                                                                          | `boolean \| SpinProps`       | `false`        |      |
| record          | 字段数据源                                                                                                                                | `T`                          | `{}`           |      |
| renderTitle     | 重新渲染每一项的标题                                                                                                                      | `FormProps['requiredMark']`  | `-`            |      |
| isLastBlock     | 最后一项是否占满剩余行                                                                                                                    | `boolean`                    | `true`         |      |

### LDescriptionItem

| 参数          | 说明                                  | 类型                                                          | 默认值  | 版本 |
| ------------- | ------------------------------------- | ------------------------------------------------------------- | ------- | ---- |
| title         | 当前项的标题                          | `ReactNode`                                                   | `-`     |      |
| dataIndex     | 当前项的 key                          | `string`                                                      | `-`     |      |
| titleWidth    | 当前项标题宽度                        | `number \| string`                                            | `-`     |      |
| colProps      | 当前项 Col 组件的属性                 | `ColProps`                                                    | `-`     |      |
| formItemProps | 当前项 Form.Item 的属性（除 name 外） | `Omit<LFormItemProps, 'name'>`                                | `-`     |      |
| tooltip       | 提示信息                              | `LFormItemProps['tooltip']`                                   | `-`     |      |
| alignItems    | 对齐方式                              | `LFormItemProps['alignItems']`                                | `-`     |      |
| required      | 是否为必填项（显示红色星号）          | `boolean`                                                     | `false` |      |
| emptyNode     | 空值时显示的内容                      | `ReactNode`                                                   | `-`     |      |
| render        | 自定义渲染函数                        | `(curVal: T[keyof T], record: T, index: number) => ReactNode` | `-`     |      |

## 注意事项

1. [title](file:///Users/yuehaishan/Documents/web/kaiyuan/lighting-design/src/l-echarts/demos/Demo6.tsx#L7-L15)、`extra`、[columns](file:///Users/yuehaishan/Documents/web/kaiyuan/lighting-design/src/l-table/interface.ts#L88-L94) 中的 [title](file:///Users/yuehaishan/Documents/web/kaiyuan/lighting-design/src/l-echarts/demos/Demo6.tsx#L7-L15) 以及 [record](file:///Users/yuehaishan/Documents/web/kaiyuan/lighting-design/src/l-descriptions/demos/Demo1.tsx#L4-L16) 中的值都可以是自定义的 `ReactNode`
2. `colon` 为 `string` 类型时可以设置冒号的颜色
3. 最后一项默认会占满剩余空间（通过 `isLastBlock` 控制）
4. 可以通过 [loading](file:///Users/yuehaishan/Documents/web/kaiyuan/lighting-design/src/l-steps-form/components/steps-submitter.tsx#L16-L16) 属性添加加载状态

## 使用场景

1. **基础信息展示**：展示用户信息、商品详情等结构化数据
2. **卡片信息展示**：结合 Card 组件展示详细信息
3. **弹窗详情展示**：在 Modal 中展示详细信息
4. **响应式布局**：通过 [column](file:///Users/yuehaishan/Documents/web/kaiyuan/lighting-design/src/l-query-form/interface.ts#L42-L42) 属性实现不同屏幕尺寸下的列数自适应
5. **自定义渲染**：通过 [render](file:///Users/yuehaishan/Documents/web/kaiyuan/lighting-design/src/l-captcha-button/interface.ts#L36-L36) 函数自定义展示内容，如格式化日期、添加标签等
