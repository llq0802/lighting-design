---
title: LTagGroup
toc: content
---

# LTagGroup

标签选择 / 支持取消

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 多选

<code src='./demos/Demo2.tsx'></code>

### 修改样式

<code src='./demos/Demo3.tsx'></code>

## API

```ts
import { LTagGroup } from 'lighting-design';
```

|      参数      |                       说明                       |                类型                | 默认值  |
| :------------: | :----------------------------------------------: | :--------------------------------: | :-----: |
|     value      |                        值                        |             `boolean`              | `true`  |
|   className    |                     容器类名                     |              `string`              |   `-`   |
| itemClassName  |                   每一项的类名                   |              `string`              |   `-`   |
| showAllChecked |                   是否展示全部                   |             `boolean`              | `true`  |
|    allValue    | 选择全部时的值 `只在单选时生效 多选时为整个数组` |              `string`              | `'all'` |
|    multiple    |                     是否多选                     |             `boolean`              | `false` |
|    readonly    |                     是否只读                     |             `boolean`              | `false` |
|   cancelable   |      单选时，是否可以点击选中的元素取消选中      |             `boolean`              | `false` |
|    onChange    |                  监听值变化事件                  | `(val:string \| string[]) => void` |  `- `   |
