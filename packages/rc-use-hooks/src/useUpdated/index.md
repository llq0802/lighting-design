---
title: useUpdated
order: 3
group:
  path: /lifecycle
nav:
  order: 3
  path: /hooks
---

# useUpdated

第一次组件加载不触发,组件后续更新才触发

> **注意** `deps如果为空数组或者不传,组件更新完成就会触发. 如果指定依赖项则依赖项变化才触发`

## 代码演示

### 只要组件更新完成就会触发

<code src='./demos/demo2.tsx' />

### 只有在依赖项变化时才触发

<code src='./demos/demo1.tsx' />

## API

```ts
useUpdated(effect: () => any, deps?: any[]);
```

### params

| 参数   | 说明                        | 类型      |
| ------ | --------------------------- | --------- |
| effect | 与 useEffect 第一个参数一致 | () => any |
| deps   | 依赖项                      | any[]     |
