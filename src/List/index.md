---
title: LList
toc: content
---

# LList

封装无限滚动，虚拟列表。

## 代码演示

### 虚拟列表

<code src='./demos/Demo3.tsx' ></code>

### 异步加载虚拟列表

<code src='./demos/Demo1.tsx' ></code>

### 滚动加载

<code src='./demos/Demo4.tsx' ></code>

### 卡片列表

<code src='./demos/Demo2.tsx' ></code>

## API

```ts
import { LTrigger } from 'lighting-design';
```

除了以下参数，其余和 antd [List](https://ant.design/components/list-cn#list) 组件一样。

| 参数           | 说明                                       | 类型       | 默认值 |
| -------------- | ------------------------------------------ | ---------- | ------ |
| height         | 组件高度, 开启后将会启用虚拟列表           | `number`   | `-`    |
| itemMinHeight  | 在虚拟列表下每一项最小高度                 | `number`   | `-`    |
| onScrollBottom | 虚拟滚动开启时，容器滚动触底事件的处理函数 | `()=>void` | `-`    |
