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

### 异步请求总星数

<code src='./demos/Demo3.tsx'></code>

### 其他字符

<code src='./demos/Demo4.tsx'></code>

### 自定义字符

<code src='./demos/Demo5.tsx'></code>

## API

> - `depends` 为 LFormItem 组件 `dependencies` 属性依赖项的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除

```ts
import { LFormItemRate } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数         | 说明                                 | 类型                                                    | 默认值 |
| ------------ | ------------------------------------ | ------------------------------------------------------- | ------ |
| count        | 总共的星数                           | `number`                                                | `5`    |
| request      | 请求总共的星数的异步函数             | `(...depends: any[]) => Promise<number>`                | `-`    |
| debounceTime | 当依赖项发生变化时重新请求的防抖时间 | `number`                                                | `-`    |
| spin         | 自定义 loading 效果                  | [SpinProps](https://ant.design/components/spin-cn/#api) | `-`    |
| rateProps    | `antd`评分组件 Props                 | [RateProps](https://ant.design/components/rate-cn/#api) | `-`    |
