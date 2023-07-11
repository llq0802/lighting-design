---
title: useBeforeUnload
toc: content
---

# useBeforeUnload

hook 的方式优雅的使用 Web Woker，在处理耗时操作时不会阻塞 UI

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx" ></code>

## API

> - 有同源限制
>
> - 无法访问 DOM 节点
>
> - 运行在另一个上下文中，无法使用 Window 对象
>
> - Web Worker 的运行不会影响主线程，但与主线程交互时仍受到主线程单线程的瓶颈制约。换言之，如果 Worker 线程频繁与主线程进行交互，主线程由于需要处理交互，仍有可能使页面发生阻塞
>
> - 共享线程可以被多个浏览上下文（Browsing context）调用，但所有这些浏览上下文必须同源（相同的协议，主机和端口号）

**更多请看 MDN [Web Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker)**
**其他 Worker 插件 [react-hooks-worker](https://github.com/dai-shi/react-hooks-worker)**

```ts
import { useBeforeUnload } from 'lighting-design';
useBeforeUnload(fn, options);
```
