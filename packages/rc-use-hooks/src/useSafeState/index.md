---
title: useSafeState
order: 3
group:
  path: /state
nav:
  order: 3
  path: /hooks
---

# useSafeState

用法与 React.useState 完全一样，但是在组件卸载后异步回调内的 setState 不再执行，避免因组件卸载后更新状态而导致的内存泄漏

## 代码演示

<code src='./demos/demo1.tsx' />

## API

```typescript
const [state, setState] = useSafeState(value);
```
