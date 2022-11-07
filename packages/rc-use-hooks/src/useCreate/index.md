---
title: useCreate
order: 3
group:
  path: /dom
nav:
  order: 3
  path: /hooks
---

# useCreate

代替 useRef useMemo 以达到更好的性能和获取最新的值

## 代码演示

### 代替 useRef

<code src="./demos/demo1.tsx" />

### 代替 useMome

<code src="./demos/demo2.tsx" />

## API

```typescript
 const ret =  useCreate<T>(factory: () => T, deps: DependencyList):T;
```

### Params

| 参数 | 说明                 | 类型                    |
| ---- | -------------------- | ----------------------- |
| fn   | 定义数据返回值的函数 | `()=> any`              |
| deps | 数据变化依赖项       | ` React.DependencyList` |

### Result

| 参数 | 说明       | 类型  |
| ---- | ---------- | ----- |
| ret  | 定义的数据 | `any` |
