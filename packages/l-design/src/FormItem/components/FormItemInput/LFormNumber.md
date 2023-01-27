---
title: LFormItemNumber
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemNumber

数字输入框

**特点**

- 失焦校验
- 返回的值为类型数字
- 自动补零两位 可修改配置

## 代码演示

### 基础用法

<code src='./demos/Demo2.tsx'>

## API

```ts
import { LFormItemNumber } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| numberProps | `InputNumber`的属性 | [InputNumberProps](https://4x.ant.design/components/input-number-cn/#API) | `-` |
