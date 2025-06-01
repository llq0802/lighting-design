---
title: LFormItemPassword
toc: content
nav:
  path: /components
---

# LFormItemPassword

密码输入框

**特点**

- 支持密码位数校验
- 支持禁用粘贴复制操作
- 支持禁用空格

## 代码演示

### 基础用法

<!-- <code src='./demos/Demo3.tsx'></code> -->

### 密码强度检测

也可以配合 `renderField`方法 与 `Popover`组件聚焦显示密码强度。

<code src='./demos/Demo1.tsx'></code>

## API

```ts
import { LFormItemPassword } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数                 | 说明                                                                                                                          | 类型                                                                                       | 默认值                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| passwordProps        | `Input.Password`或者`Input`的属性                                                                                             | [InputProps \| InputPasswordProps](https://ant.design/components/input-cn/#Input.Password) | `-`                                                        |
| disabledWhiteSpace   | 是否禁用输入空格                                                                                                              | `boolean`                                                                                  | `false`                                                    |
| disabledPaste        | 是否禁用粘贴                                                                                                                  | `boolean`                                                                                  | `true`                                                     |
| disabledCopy         | 是否禁用复制                                                                                                                  | `boolean`                                                                                  | `true`                                                     |
| variant              | `InputProps['variant']`                                                                                                       | `InputProps['variant']`                                                                    | `-`                                                        |
| min                  | 密码最小位数                                                                                                                  | `number`                                                                                   | `8`                                                        |
| max                  | 密码最大位数                                                                                                                  | `number`                                                                                   | `16`                                                       |
| highPassWord         | 是否开启验证高强度密码 <br>(包括至少 1 个大写字母，1 个小写字母，1 个数字，1 个特殊字符(`+-.~!@#$%^&*?`)的 不小于 8 位数密码) | `boolean`                                                                                  | `false`                                                    |
| highPassWordErrorMsg | 开启高强度密码验证错误后的提示 <br>也可使用 `messageVariables.label` 设置                                                     | `string`                                                                                   | `'必须同时包含大小写字母 , 数字 , 特殊字符且位数至少8位!'` |
