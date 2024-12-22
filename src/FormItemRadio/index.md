---
title: LFormItemRadio
toc: content
nav:
  path: /components
---

## LFormItemRadio

单选框

**特点**

- 支持请求数据获得 `options`
- 支持配置`全部`选项

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 异步请求

<code src='./demos/Demo2.tsx'></code>

### 依赖项自动请求

<code src='./demos/Demo3.tsx'></code>

## API

```ts
import { LFormItemRadio } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。
除了以下参数， 还包含 [LFormItemSelect](/components/form-item-select#api) 的 `autoRequest` `request` `requestOptions` `refreshDeps` `spin` `actionRef` `options` `all` `allValue` `allLabel` `fieldNames`
用法与 [LFormItemSelect](/components/form-item-select#api) 一致

| 参数        | 说明                        | 类型                                                           | 默认值 |
| ----------- | --------------------------- | -------------------------------------------------------------- | ------ |
| optionType  | 用于设置 Radio options 类型 | `RadioGroupProps['optionType']`                                | `-`    |
| buttonStyle | RadioButton 的风格样式      | `RadioGroupProps['buttonStyle']`                               | `-`    |
| radioProps  | 单选组 Props                | [RadioGroupProps](https://ant.design/components/radio-cn/#api) | `-`    |
