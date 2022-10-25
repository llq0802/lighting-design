---
title: useCallbackState
order: 3
group:
  path: /state
nav:
  order: 3
  path: /hooks
---

# useCallbackState

与 useState 效果一致, 可在 setState 中的回调函数中接受实时的 state

## 代码演示

<code src='./demos/Demo1.tsx' />

### API

```ts
const [state, setState] = useCallbackState(initialState?);
```

### state

| 参数  | 说明       | 类型 | 默认值 |
| ----- | ---------- | ---- | ------ |
| state | state 的值 | -    | -      |

### setState

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| setState | 第一个参数传入新的 state,第二个参数为回调函数接受最新传入的 state | (newState: SetStateAction<T>, cb: (newState: T) => void) => void; | - |
