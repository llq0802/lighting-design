---
title: LTagGroup
toc: content
---

# LCardGroup

卡片选择 / 支持取消，比起复选框每个卡片可承载更多的展示内容

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 自定义字段名

<code src='./demos/Demo7.tsx'></code>

### 受控

<code src='./demos/Demo3.tsx'></code>

### 多选

<code src='./demos/Demo2.tsx'></code>

### 单选时可取消

<code src='./demos/Demo5.tsx'></code>

### 在 LForm 中使用

<code src='./demos/Demo4.tsx'></code>

### 修改选中样式

<code src='./demos/Demo6.tsx'></code>

## API

:::warning{title=注意}

- 卡片的宽度默认最小为 `200px (min-width:200px)`，可通过 `cardStyle`修改

- `antd 版本 >= 5.14.0` 之后 `Card` 组件的 `bodyStyle` 属性已废弃，使用 `styles.body` 替代

:::

```ts
import { LCardGroup } from 'lighting-design';
```

| 参数          | 说明                                                                                                                 | 类型                                                 | 默认值  |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------- |
| options       | 数据                                                                                                                 | `SelectProps['options']&{ cardProps?: CardProps }[]` | `-`     |
| value         | 值                                                                                                                   | `LValueType`                                         | `-`     |
| defaultValue  | 默认值                                                                                                               | `LValueType`                                         | `-`     |
| gap           | 卡片间隔                                                                                                             | `number`                                             | `8`     |
| className     | 容器类名                                                                                                             | `string`                                             | `-`     |
| style         | 容器样式                                                                                                             | `CSSProperties`                                      | `-`     |
| cardBodyStyle | 统一设置卡片 body 样式 比每一项中的 `cardProps.bodyStyle` `styles.body` 优先级低                                     | `CSSProperties`                                      | `-`     |
| cardStyle     | 统一设置卡片样式 比每一项中的 `cardProps.style` 优先级低                                                             | `CSSProperties`                                      | `-`     |
| activeStyle   | 被选中的卡片样式                                                                                                     | `CSSProperties`                                      | `-`     |
| labelInValue  | 是否把每个选项的 label 包装到 value 中，<br>会把 value 类型从 string 变为 { value: string, label: ReactNode } 的格式 | `boolean`                                            | `false` |
| fieldNames    | 自定义 options 的字段名                                                                                              | `SelectProps['fieldNames']`                          | `-`     |
| hoverable     | 鼠标移过时可浮起                                                                                                     | `boolean`                                            | `false` |
| multiple      | 是否多选                                                                                                             | `boolean`                                            | `false` |
| disabled      | 是否禁用                                                                                                             | `boolean`                                            | `false` |
| cancelable    | 单选时，是否可以点击选中的元素取消选中                                                                               | `boolean`                                            | `false` |
| onChange      | 受控时 value 值变化事件                                                                                              | `(val:string \| string[]) => void`                   | `- `    |

### LValueType

```ts
export type LValueType =
  | string
  | number
  | (string | number)[]
  | string[]
  | number[]
  | null
  | undefined;
```
