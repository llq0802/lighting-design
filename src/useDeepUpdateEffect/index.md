---
title: useDeepUpdateEffect
toc: content
---

# useDeepUpdateEffect

`useDeepUpdateEffect` 用法等同于 `useEffect`
会忽略首次执行，只在依赖更新时并且**深度**比较依赖项后执行

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx" ></code>

## API

```ts
import { useDeepUpdateEffect } from 'lighting-design';
```

API 与 `React.useEffect` 完全一致。

```ts
useDeepUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
)
```
