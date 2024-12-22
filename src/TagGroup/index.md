---
title: LTagGroup
toc: content
---

# LTagGroup

标签选择 / 支持取消

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 自定义字段名

<code src='./demos/Demo7.tsx'></code>

### 受控

<code src='./demos/Demo4.tsx'></code>

### 多选

<code src='./demos/Demo2.tsx'></code>

### 单选时可取消

<code src='./demos/Demo6.tsx'></code>

### 修改样式

<code src='./demos/Demo3.tsx'></code>

### 在 LForm 中使用

<code src='./demos/Demo5.tsx'></code>

## API

```ts
import { LTagGroup } from 'lighting-design';
```

| 参数           | 说明                                                                                                                 | 类型                                                   | 默认值   |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | -------- |
| options        | 数据                                                                                                                 | `(SelectProps['options'] & { tagProps?: TagProps }[])` | `-`      |
| value          | 值                                                                                                                   | `string\|string[]`                                     | `-`      |
| defaultValue   | 默认值                                                                                                               | `string\|string[]`                                     | `-`      |
| className      | 容器类名                                                                                                             | `string`                                               | `-`      |
| style          | 容器样式                                                                                                             | `CSSProperties`                                        | `-`      |
| itemClassName  | 每一项的类名                                                                                                         | `string`                                               | `-`      |
| showAllChecked | 是否展示全部                                                                                                         | `boolean`                                              | `false`  |
| allValue       | 选择全部时的值 `只在单选时生效，多选时为整个数组`                                                                    | `string`                                               | `'all'`  |
| allCheckedText | 选择全部时的文字                                                                                                     | `string`                                               | `'全部'` |
| labelInValue   | 是否把每个选项的 label 包装到 value 中，<br>会把 value 类型从 string 变为 { value: string, label: ReactNode } 的格式 | `boolean`                                              | `false`  |
| multiple       | 是否多选                                                                                                             | `boolean`                                              | `false`  |
| disabled       | 是否禁用                                                                                                             | `boolean`                                              | `false`  |
| cancelable     | 单选时，是否可以点击选中的元素取消选中                                                                               | `boolean`                                              | `false`  |
| onChange       | 受控时 监听 value 值变化事件                                                                                         | `(val:string \| string[]) => void`                     | `- `     |
