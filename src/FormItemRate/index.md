---
title: LFormItemRate
toc: content
nav:
  path: /components
---

# LFormItemRate

评分选择

## 代码演示

### 基础使用

<code src='./demos/Demo1.tsx'></code>

### 禁用

<code src='./demos/Demo2.tsx'></code>

### 其他字符

<code src='./demos/Demo4.tsx'></code>

### 自定义字符

<code src='./demos/Demo5.tsx'></code>

## API

```ts
import { LFormItemRate } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数      | 说明                 | 类型                                                    | 默认值  |
| --------- | -------------------- | ------------------------------------------------------- | ------- |
| count     | 总共的星数           | `number`                                                | `5`     |
| allowHalf | 是否需要半心         | `boolean`                                               | `false` |
| rateProps | `antd`评分组件 Props | [RateProps](https://ant.design/components/rate-cn/#api) | `-`     |
