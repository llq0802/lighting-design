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

<code src='./demos/demo1.tsx' />

<!-- <API></API> -->

### setState

` const setState: (newState: SetStateAction<T>, cb: (val: T) => void) => void`

<!-- | 参数    | 说明                     | 类型               | 默认值 |
| ------- | ------------------------ | ------------------ | ------ |
| value   | 需要防抖的值             | `any`              | -      |
| wait    | 防抖等待时间，单位为毫秒 | `number`           | `0`    |
| options | 防抖配置                 | `DebounceSettings` | -      | -->
