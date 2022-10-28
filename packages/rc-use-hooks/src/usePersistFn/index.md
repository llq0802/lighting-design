---
title: usePersistFn
order: 3
group:
  path: /other
nav:
  order: 3
  path: /hooks
---

# usePersistFn

持久化 function 的 Hook。

> 参考 [如何从 useCallback 读取一个经常变化的值？](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback)
>
> 在某些场景中，你可能会需要用 useCallback 记住一个回调，但由于内部函数必须经常重新创建，记忆效果不是很好，导致子组件重复 render。对于超级复杂的子组件，重新渲染会对性能造成影响。通过 usePersistFn，可以保证函数地址永远不会变化。

## 代码演示

### 基础用法

<code src="./demos/Demo2.tsx" />

## API

```typescript
const fn = usePersistFn(fn: (...args: any) => any);
```

### Result

| 参数 | 说明                      | 类型                     |
| ---- | ------------------------- | ------------------------ |
| fn   | 引用地址永远不会变化的 fn | `(...args:any[]) => any` |

### Params

| 参数 | 说明             | 类型                     |
| ---- | ---------------- | ------------------------ |
| fn   | 需要持久化的函数 | `(...args:any[]) => any` |
