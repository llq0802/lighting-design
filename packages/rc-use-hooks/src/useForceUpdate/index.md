---
title: useForceUpdate
order: 3
group:
  path: /lifecycle
nav:
  order: 3
  path: /hooks
---

# useForceUpdate

强制更新组件的 Hook。

## 代码演示

### 基础用法

<code src='./demos/demo1.tsx' />

## API

```ts
const forceUpdate = useForceUpdate();
```

### Result

| 参数        | 说明       | 类型                                      |
| ----------- | ---------- | ----------------------------------------- |
| forceUpdate | 更新的函数 | `React.Dispatch<React.SetStateAction<T>>` |
