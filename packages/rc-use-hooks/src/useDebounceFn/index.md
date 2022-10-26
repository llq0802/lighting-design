---
title: useDebounceFn
order: 3
group:
  path: /effect
nav:
  order: 3
  path: /hooks
---

# useDebounceFn

用来处理防抖函数的 Hook。

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx" />

### 对比

<code src="./demos/Demo2.tsx" />

## API

```typescript
const { run, cancel, flush } = useDebounceFn(
  fn: (...args: any[]) => any,
  wait?: number,
  options?: DebounceSettings
);
```

### Result

| 参数   | 说明                           | 类型                      |
| ------ | ------------------------------ | ------------------------- |
| run    | 触发执行 fn，参数也会传递给 fn | `(...args: any[]) => any` |
| cancel | 取消当前防抖                   | `() => void`              |
| flush  | 立即调用防抖函数               | `() => void`              |

### Params

| 参数    | 说明                     | 类型               | 默认值     |
| ------- | ------------------------ | ------------------ | ---------- |
| fn      | 需要防抖的函数           | `function`         | `() => {}` |
| wait    | 防抖等待时间，单位为毫秒 | `number`           | `300ms`    |
| options | 防抖配置                 | `DebounceSettings` | -          |

### DebounceSettings

| 参数     | 说明                     | 类型      | 默认值  |
| -------- | ------------------------ | --------- | ------- |
| leading  | 延迟开始前调用           | `boolean` | `false` |
| maxWait  | 调用前允许延迟的最大时间 | `number`  | -       |
| trailing | 延迟结束后调用           | `boolean` | `true`  |
