---
title: LFormItemNumber
toc: content
nav:
  path: /components
---

# LFormItemNumber

数字输入框

**特点**

- 返回的值为类型数字

## 代码演示

### 基础用法

<code src='./demos/demo.tsx'></code>

## API

```ts
import { LFormItemNumber } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数        | 说明                         | 类型                                                                   | 默认值  |
| ----------- | ---------------------------- | ---------------------------------------------------------------------- | ------- |
| precision   | 保留小数点后几位             | `number`                                                               | `-`     |
| min         | 最小值                       | `number`                                                               | `0`     |
| max         | 最大值                       | `number`                                                               | `99999` |
| variant     | `InputNumber['variant']`     | `InputNumber['variant']`                                               | `-`     |
| prefix      | `InputNumber['prefix']`      | `InputNumber['prefix']`                                                | `-`     |
| addonAfter  | `InputNumber['addonAfter']`  | `InputNumber['addonAfter']`                                            | `-`     |
| addonBefore | `InputNumber['addonBefore']` | `InputNumber['addonBefore']`                                           | `-`     |
| numberProps | `InputNumber`的属性          | [InputNumberProps](https://ant.design/components/input-number-cn/#api) | `-`     |
