---
title: useConcurrentRequest
order: 3
group:
  path: /other
nav:
  order: 3
  path: /hooks
---

# useConcurrentRequest

并发请求函数,支持设置最大并发数, 请求结果数组顺序同参数数组顺序一致

## 代码演示

<code src='./demos/demo1.tsx' />

## API

```ts
const arr = [
  async () => '请求1结果',
  async () => '请求2结果',
  async () => '请求3结果',
  async () => '请求4结果',
];
const { run, loading } = useConcurrentRequest(arr, 3);
```

### Params

| 参数     | 说明                    | 类型                                  | 默认值 |
| -------- | ----------------------- | ------------------------------------- | ------ |
| asyncFns | 返回 Promise 的函数数组 | `(...args: any[]) => Promise<any>[];` | `[]`   |
| max      | 请求的并发数量          | `number`                              | `3 `   |

### Result

| 参数    | 说明                   | 类型                       |
| ------- | ---------------------- | -------------------------- |
| loading | 是否正在请求           | `boolean`                  |
| run     | 执行并发请求的异步函数 | `async ()=>Promise<any[]>` |
