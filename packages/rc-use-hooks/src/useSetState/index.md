---
title: useSetSate
order: 3
group:
  path: /other
nav:
  order: 3
  path: /hooks
---

# useSetState

管理 object 类型 state 的 Hooks，可合并更新。

> **注意:**`设置非对象数据，将不处理。 如： null, undefined, number, string, boolean 等`

## 代码演示

### 基础用法

<code src="./demos/basic.tsx" />

## API

```typescript
const [state, setState] = useSetState(initialState);
```
