---
title: useLatest
order: 3
group:
  path: /state
nav:
  order: 3
  path: /hooks
---

# useLatest

返回最新的 state 或 props

## 代码演示

<code src='./demos/demo1.tsx' />

## API

```ts
const latestValue = useLatest(value);
```

### Result

| 参数        | 说明                         | 类型                        |
| ----------- | ---------------------------- | --------------------------- |
| state/props | 返回永远是最新的 state/props | `React.MutableRefObject<T>` |
