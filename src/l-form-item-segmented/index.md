---
title: LFormItemSegment
toc: content
nav:
  path: /components
---

## LFormItemSegmented

分段控制器

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 自定义渲染

<code src='./demos/Demo3.tsx'></code>

### API

```ts
import { LFormItemSegmented } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

除了以下参数， 还包含 [LFormItemSelect](/components/form-item-select#api) 的 `autoRequest` `request` `requestOptions` `refreshDeps` `spin` `actionRef` `fieldNames`
用法与 [LFormItemSelect](/components/form-item-select#api) 一致

| 参数             | 说明                                       | 类型                                                              | 默认值  |
| ---------------- | ------------------------------------------ | ----------------------------------------------------------------- | ------- |
| options          | 数据化配置选项内容                         | `SegmentedProps['options]`                                        | `-`     |
| block            | 是否占满父元素                             | `SegmentedProps['block]`                                          | `-`     |
| isDefaultChecked | 是否默高亮第一个选项 `(只高亮,不代表有值)` | `boolean`                                                         | `false` |
| segmentedProps   | `antd`分段组件 Props                       | [SegmentedProps](https://ant.design/components/segmented-cn/#api) | `-`     |
