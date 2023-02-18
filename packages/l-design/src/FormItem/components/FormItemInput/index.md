---
title: LFormItemInput
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemInput

输入框

**特点**

- 默认失焦校验
- 默认自动过滤空格
- 内置常见正则校验
  - `phone` 类型 只能输入以 1 开头的 11 位手机号
  - `idCard`类型 支持 1/2 代(15 位/18 位数字)最后一位可为数字或字符大小写`X`
  - `bankCard`类型 只能输入 10 到 30 位数字，覆盖对公/私账户
  - `email`类型 覆盖绝大多数邮箱校验
  - `url`类型 覆盖绝大多数 URL 校验

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'>

## API

```ts
import { LFormItemInput } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| inputProps | `Input`的属性 | [InputProps](https://4x.ant.design/components/input-cn/#API) | `-` |
| disabledWhiteSpace | 是否禁用输入空格 | `boolean` | `true` |
| type | `内置输入框类型` | `InputProps['type'] \| 'bankCard' \| 'idCard' \| 'phone' \| 'url' \| 'email'` | `text` |
