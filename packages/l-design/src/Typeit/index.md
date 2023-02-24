---
title: LTypeit
order: 2
nav:
  order: 2
  path: /components
---

# LTypeit

打字机

## 代码演示

### 基础用法

## <code src="./demos/base.tsx"/>

### 动态修改

## <code src="./demos/base1.tsx"/>

### 异步插入

## <code src="./demos/base2.tsx"/>

### 异步等待

## <code src="./demos/base3.tsx"/>

```ts
import { LTypeit } from 'lighting-design';
```

## API

以下 API 仅供参考，具体请查阅[TypeIt](https://www.typeitjs.com/)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| .pause() | 停止 | `number` | `-` |
| .delete() | 从当前字符向前删除 | `number` | `-` |
| .type() | 开始打印的字符串。 | `any` | `-` |
| .break() | 插入标签。`<br>` | `any` | `-` |
| .empty() | 立即清除目标元素的内容。 | `any` | `-` |
| .move() | 向后或向前移动光标一定数量的字符。这可以通过传递一个数字来实现 | `number` | `-` |
| .exec() | 在队列中放置任意函数的任何位置触发任意函数。此方法是异步的，因此您可以将其配置为完全暂停队列的执行，直到返回的 Promise 进行解析。 | `Promise ` | `-` |
