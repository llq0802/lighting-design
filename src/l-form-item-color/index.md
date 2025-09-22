---
title: LFormItemColor
toc: content
nav:
  path: /components
---

# LFormItemColor

颜色选择

**特点**

- 支持多种模式的颜色选择

## 代码演示

<code src='./demos/Demo1.tsx'></code>

## API

```ts
import { LFormItemColor } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数        | 说明                    | 类型                                                                         | 默认值 |
| ----------- | ----------------------- | ---------------------------------------------------------------------------- | ------ |
| showText    | 显示颜色文本            | `boolean \| (color: Color) => React.ReactNode`                               | `-`    |
| colorFormat | 颜色格式                | `rgb \| hex \| hsb`                                                          | `hex`  |
| colorProps  | `ColorPicker`组件 Props | [ColorProps](https://ant-design.antgroup.com/components/color-picker-cn#api) | `-`    |
