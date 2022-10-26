---
title: usePrevious
order: 3
group:
  path: /state
nav:
  order: 3
  path: /hooks
---

# usePrevious

保存上一次状态的 Hook。

## 代码演示

### 基础用法

<code src="./demos/demo1.tsx"/>

### 不受其他状态更新影响

<code src="./demos/demo2.tsx"/>

## API

```ts
const prevState = usePrevious(state: any);
```

### Result

| 参数      | 说明            | 类型 |
| --------- | --------------- | ---- |
| prevState | 上次 state 的值 | -    |

### Params

| 参数  | 说明             | 类型 | 默认值 |
| ----- | ---------------- | ---- | ------ |
| state | 需要记录变化的值 | -    | -      |
