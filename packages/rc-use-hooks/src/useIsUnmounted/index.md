---
title: useIsUnmounted
order: 3
group:
  path: /lifecycle
nav:
  order: 3
  path: /hooks
---

useIsUnmounted

判断当前组件是否卸载，如果卸载就不更新状态，避免因组件卸载后更新状态而导致的内存泄漏。

## 代码演示

### 基础用法

<code src="./demos/basic1.tsx" />

## API

```typescript
const isUnmounted = useIsUnmounted();
```

### Result

| 参数 | 说明                     | 类型                              |
| ---- | ------------------------ | --------------------------------- |
| -    | ref 值为当前组件是否卸载 | `React.MutableRefObject<boolean>` |
