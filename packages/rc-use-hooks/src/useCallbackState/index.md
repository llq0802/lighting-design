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

返回最新的 state 或 props 。

## 代码演示

<code src='./demos/demo1.tsx' />

<!-- <API></API> -->

### Params

| 参数    | 说明                     | 类型               | 默认值 |
| ------- | ------------------------ | ------------------ | ------ |
| value   | 需要防抖的值             | `any`              | -      |
| wait    | 防抖等待时间，单位为毫秒 | `number`           | `0`    |
| options | 防抖配置                 | `DebounceSettings` | -      |

### DebounceSettings

| 参数     | 说明                     | 类型      | 默认值  |
| -------- | ------------------------ | --------- | ------- |
| leading  | 延迟开始前调用           | `boolean` | `false` |
| maxWait  | 调用前允许延迟的最大时间 | `number`  | -       |
| trailing | 延迟结束后调用           | `boolean` | `true`  |
