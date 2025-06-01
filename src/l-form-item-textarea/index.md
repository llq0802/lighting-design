---
title: LFormItemTextArea
toc: content
nav:
  path: /components
---

# LFormItemTextArea

多行输入框

**特点**

- 支持禁用空格

## 代码演示

### 基础用法

<code src='./demos/Demo4.tsx'></code>

## API

```ts
import { LFormItemTextArea } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数               | 说明                              | 类型                                                                                     | 默认值  |
| ------------------ | --------------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| textAreaProps      | `Input.TextArea`或者`Input`的属性 | [InputProps \| InputTextAreaProps](https://ant.design/components/input-cn#inputtextarea) | `-`     |
| disabledWhiteSpace | 是否禁用输入空格                  | `boolean`                                                                                | `false` |
| autoSize           | `InputTextAreaProps['autoSize']`  | `InputTextAreaProps['autoSize']`                                                         | `-`     |
| variant            | `InputTextAreaProps['variant']`   | `InputTextAreaProps['variant']`                                                          | `-`     |
| showCount          | `InputTextAreaProps['showCount']` | `InputTextAreaProps['showCount']`                                                        | `-`     |
