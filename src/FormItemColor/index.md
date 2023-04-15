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

<!-- <code src='./demos/Demo2.tsx'> -->

## API

```ts
import { LFormItemColor } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数       | 说明               | 类型                                                                           | 默认值     |
| ---------- | ------------------ | ------------------------------------------------------------------------------ | ---------- |
| colorType  | 内置组件类型       | `'sketch' \| 'chrome' \| 'photoshop'`                                          | `'sketch'` |
| colorProps | `LColor`组件 Props | [ColorProps](/components/color-pick#lcolorxxx-%E5%85%B1%E5%90%8C%E7%9A%84-api) | `-`        |
