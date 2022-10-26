---
title: useIsMounted
order: 3
group:
  path: /lifecycle
nav:
  order: 3
  path: /hooks
---

# useIsMounted

dom 操作判断时当前组件是否挂载，如果装载再去更新，避免因组件卸载后更新状态而导致的内存泄漏。

**<mark>注意：组件未加载完成时，useIsMounted 的值也为 false 。</mark>**

大多数场景中，你需要的可能是 [`useIsUnmounted`](/hooks/lifecycle/use-is-unmounted) 。

## 代码演示

### 基础用法

<code src="./demos/basic1.tsx" />

## API

```typescript
const isMounted = useIsMounted();
```

### Result

| 参数 | 说明                     | 类型                              |
| ---- | ------------------------ | --------------------------------- |
| -    | ref 值为当前组件是否挂载 | `React.MutableRefObject<boolean>` |
