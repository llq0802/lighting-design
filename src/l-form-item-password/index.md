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

<code src='./demos/demo.tsx'></code>

<!-- <code src='./demos/Demo3.tsx'></code> -->

<!-- ### 密码强度检测

也可以配合 `renderField`方法 与 `Popover`组件聚焦显示密码强度。

<code src='./demos/Demo1.tsx'></code> -->

## API

```ts
import { LFormItemPassword } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数                   | 说明                                                                                       | 类型                        | 默认值 |
| ---------------------- | ------------------------------------------------------------------------------------------ | --------------------------- | ------ |
| disabledPaste          | 是否禁用粘贴                                                                               | `boolean`                   | `true` |
| disabledCopy           | 是否禁用复制                                                                               | `boolean`                   | `true` |
| placeholder            | `InputProps['placeholder']`                                                                | `InputProps['placeholder']` | `-`    |
| size                   | `InputProps['size']`                                                                       | `InputProps['size']`        | `-`    |
| disabled               | `InputProps['disabled']`                                                                   | `InputProps['disabled']`    | `-`    |
| variant                | `InputProps['variant']`                                                                    | `InputProps['variant']`     | `-`    |
| prefix                 | `InputProps['prefix']`                                                                     | `InputProps['prefix']`      | `-`    |
| suffix                 | `InputProps['suffix']`                                                                     | `InputProps['suffix']`      | `-`    |
| addonAfter             | `InputProps['addonAfter']`                                                                 | `InputProps['addonAfter']`  | `-`    |
| addonBefore            | `InputProps['addonBefore']`                                                                | `InputProps['addonBefore']` | `-`    |
| min                    | 密码最小位数                                                                               | `number`                    | `8`    |
| max                    | 密码最大位数                                                                               | `number`                    | `16`   |
| strictValidator        | 是否开启严格检验，开启后，密码必须包含大小写字母、数字、特殊字符, 且长度在 min 和 max 之间 | `boolean`                   | `-`    |
| strictValidatorMessage | 严格检查的错误提示                                                                         | `string`                    | `-`    |
| passwordProps          | `Input.Password`或者`Input`的属性                                                          | nputPasswordProps           | `-`    |
