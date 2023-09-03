---
title: useWorker
toc: content
---

# useWorker

:::warning{title=警告}
将在下个版本移除该 `HOOK` 请使用 [rc-use-hooks](https://llq0802.github.io/rc-use-hook) 完全兼容原 `HOOK` 并新增许多实用 `HOOK`
:::

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

**更多 Web Worker API 详情查阅 MDN [Web Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker)**
**其他 Worker 插件 [react-hooks-worker](https://github.com/dai-shi/react-hooks-worker)**

```ts
import { useWorker } from 'lighting-design';
const [workerFn, controller] = useWorker(fn, options);
```

### Params

|  参数   |        说明        |           类型           |
| :-----: | :----------------: | :----------------------: |
|   fn    | 需要执行的耗时函数 | `(...args:any[]) => any` |
| options |      配置参数      |        ` Options`        |

### Result

|    参数    |          说明           |               类型               |
| :--------: | :---------------------: | :------------------------------: |
|  workerFn  | 在 web worker 中运行 fn | `(...args:any[])=> Promise<any>` |
| controller |        配置参数         |           `Controller`           |

### Options

```ts
type Options = {
  /*在终止工作线程之前的毫秒数*/
  timeout: number; // undefined
  /*一个数组，其中包含运行工作程序所需的远程依赖项*/
  remoteDependencies: Array; // []
  /*返回一个数组的函数，该数组包含运行工作程序所需的本地依赖项*/
  localDependencies: () => any[]; // () => []
  /*一旦工作线程完成就杀死它(成功或错误)*/
  autoTerminate: boolean; // true
  /*启用Transferable Objects，要禁用它，设置Transferable: 'none'*/
  transferable: string; // 'auto'
};
```

### Controller

```ts
type Controller = {
  /*workerFn的状态*/
  status: WORKER_STATUS; // undefined
  /*允许杀死工作线程的函数*/
  kill: Array; // []
};
```

### WORKER_STATUS

```ts
enum WORKER_STATUS {
  PENDING = 'PENDING', //web worker已初始化，但尚未执行
  SUCCESS = 'SUCCESS', //web worker已被正确执行
  RUNNING = 'RUNNING', // 网络工作者正在运行
  ERROR = 'ERROR', //web worker以一个错误结束
  TIMEOUT_EXPIRED = 'TIMEOUT_EXPIRED', // 由于定义的超时已过期，web工作者被杀死。
}
```
