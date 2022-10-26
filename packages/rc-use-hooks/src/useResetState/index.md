---
title: useResetState
order: 3
group:
  path: /state
nav:
  order: 3
  path: /hooks
---

# useResetState

提供重置 state 方法的 Hooks，用法与 React.useState 基本一致。

## 代码演示

<code src='./demos/demo1.tsx' />

## API

```ts
const [state, setState, resetState] = useResetState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, () => void]
```
