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

## API

```ts
import { LFormItemMentions } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

包含 [LFormItemSelect](/components/form-item-select#api) 的 `request` `requestOptions` `spin` `actionRef` `options` `fieldNames` `placeholder` `disabled` `variant` `size`

用法与 [LFormItemSelect](/components/form-item-select#api) 一致

| 参数          | 说明                     | 类型                       | 默认值 |
| ------------- | ------------------------ | -------------------------- | ------ |
| options       | 数据源                   | `MentionProps[]`           | `-`    |
| autoSize      | 自适应内容高度           | `MentionProps['autoSize']` | `-`    |
| mentionsProps | antd.Mentions 的其他属性 | `MentionProps`             | `-`    |
