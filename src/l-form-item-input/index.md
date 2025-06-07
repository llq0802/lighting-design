---
title: LFormItemInput
toc: content
nav:
  path: /components
---

# LFormItemInput

输入框

**特点**

- 默认不能输入空格
- 内置常见正则校验
  - `phone` 类型 根据工信部 2019 年最新公布的手机号段
  - `idCard`类型 支持 1/2 代(15 位/18 位数字)最后一位可为数字或字符大小写`X`
  - `bankCard`类型 只能输入 10 到 30 位数字，覆盖对公/私账户
  - `email`类型 覆盖绝大多数邮箱校验
  - `url`类型 覆盖绝大多数 URL 校验
  - `chinese`类型 只能是中文汉字，不能包含其他

## 代码演示

### 基础用法

<code src='./demos/demo.tsx'></code>

## API

:::warning{title=注意}

- `'bankCard' | 'idCard' | 'phone' | 'url' | 'email' | 'chinese'`类型的输入框会自动校验输入的值 , `required`只充当是否展示必填的(`*`)星号

  :::

```ts
import { LFormItemInput } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。
| 参数 | 说明 | 类型 | 默认值 |
| ------------------ | ---------------- | ------------------------------------------------------------------------------------------ | ------- |
| inputProps | `Input`的属性 | [InputProps](https://ant.design/components/input-cn/#api) | `-` |
| disabledWhiteSpace | 是否禁用输入空格 | `boolean` | `false` |
| type | `内置输入框类型` | `InputProps['type'] \| 'bankCard' \| 'idCard' \| 'phone' \| 'url' \| 'email' \| 'chinese'` | `text` |
| variant | `InputProps['variant']` | `InputProps['variant']` | `-` |
| prefix | `InputProps['prefix']` | `InputProps['prefix']` | `-` |
| suffix | `InputProps['suffix']` | `InputProps['suffix']` | `-` |
| addonAfter | `InputProps['addonAfter']` | `InputProps['addonAfter']` | `-` |
| addonBefore | `InputProps['addonBefore']` | `InputProps['addonBefore']` | `-` |
| maxLength | `InputProps['maxLength']` | `InputProps['maxLength']` | `-` |
