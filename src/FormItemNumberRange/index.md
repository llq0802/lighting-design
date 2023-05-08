---
title: LFormItemNumberRange
toc: content
nav:
  path: /components
---

# LFormItemNumberRange

数字范围输入框

**特点**

- 失焦自动交换数值大小

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

## API

```ts
import { LFormItemNumber } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数             | 说明                    | 类型                                                                   | 默认值 |
| ---------------- | ----------------------- | ---------------------------------------------------------------------- | ------ |
| separator        | 中间连接符号            | `string`                                                               | `~`    |
| separatorWidth   | 中间连接符号的宽度      | `number`                                                               | `30`   |
| leftNumberProps  | 左边`InputNumber`的属性 | [InputNumberProps](https://ant.design/components/input-number-cn/#api) | `-`    |
| rightNumberProps | 右边`InputNumber`的属性 | [InputNumberProps](https://ant.design/components/input-number-cn/#api) | `-`    |
