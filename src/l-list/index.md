---
title: LList
toc: content
---

# LList

封装无限滚动，虚拟列表。

## 代码演示

### 卡片列表

<code src='./demos/Demo2.tsx' ></code>

### 虚拟列表

<code src='./demos/Demo3.tsx' ></code>

### 异步加载虚拟列表

<code src='./demos/Demo1.tsx' ></code>

### 无线滚动加载

<code src='./demos/Demo4.tsx' ></code>

## API

```ts
import { LList } from 'lighting-design';
```

除了以下参数，其余和 antd [List](https://ant.design/components/list-cn#list) 组件一样。

| 属性名           | 说明                                                                                                         | 类型                    | 默认值 | 版本 |
| ---------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------- | ------ | ---- |
| height           | 虚拟滚动容器的高度，设置后将自动开启虚拟滚动                                                                 | `number`                | `0`    |      |
| itemHeight       | 每一项的高度                                                                                                 | `number`                | `-`    |      |
| onScrollBottom   | 虚拟滚动开启时，容器滚动触底事件的处理函数                                                                   | `() => void`            | `-`    |      |
| virtualListProps | rc-virtual-list 组件的其他属性，参考 [rc-virtual-list 文档](https://github.com/react-component/virtual-list) | `RcVirtualListProps<T>` | `-`    |      |
