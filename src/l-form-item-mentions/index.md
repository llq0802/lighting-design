---
title: LFormItemMentions
toc: content
nav:
  path: /components
---

# LFormItemMentions

提及输入框

## 代码演示

### 基础用法

<code src='./demos/demo.tsx'></code>

<!-- <code src='./demos/Demo1.tsx'></code>

### 异步请求

<code src='./demos/Demo3.tsx'></code>

### 依赖请求

<code src='./demos/Demo2.tsx'></code> -->

## API

```ts
import { LFormItemMentions } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

除了以下参数， 还包含 [LFormItemSelect](/components/form-item-select#api) 的 `autoRequest` `request` `requestOptions` `refreshDeps` `spin` `actionRef` `variant`
用法与 [LFormItemSelect](/components/form-item-select#api) 一致

| 参数          | 说明                     | 类型             | 默认值 |
| ------------- | ------------------------ | ---------------- | ------ |
| options       | 数据源                   | `MentionProps[]` | `-`    |
| mentionsProps | antd.Mentions 的其他属性 | `MentionProps`   | `-`    |
