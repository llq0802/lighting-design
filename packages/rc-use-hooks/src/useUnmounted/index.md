---
title: useUnmounted
order: 3
group:
  path: /lifecycle
nav:
  order: 3
  path: /hooks
---

# useUnmounted

只在组件 卸载 时执行的 Hook。

## 代码演示

### 基础用法

<code src="./demos/basic1.tsx" />

## API

```ts
useUnmounted(fn: () => void);
```

### Params

| 参数 | 说明              | 类型       | 默认值 |
| ---- | ----------------- | ---------- | ------ |
| fn   | 卸载 时执行的函数 | `function` | -      |
