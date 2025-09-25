---
title: LIframe
toc: content
---

# LIframe

二次封装的 iframe 组件，简化 iframe 的通信使用。

- LIframe
  - 用户嵌套子页面
- useLIframeParent
  - 在子页面中与父页面进行通信

## 代码演示

<code src='./demos/demo.tsx' background="#f5f5f5"></code>

## API

```ts
import { LIframe, useLIframeParent } from 'lighting-design';
```

### LIframe

| 属性名          | 说明                                   | 类型                                          | 默认值 | 版本 |
| --------------- | -------------------------------------- | --------------------------------------------- | ------ | ---- |
| src             | iframe 的源地址                        | string                                        | -      | -    |
| width           | iframe 宽度                            | string \| number                              | '100%' | -    |
| height          | iframe 高度                            | string \| number                              | '100%' | -    |
| methods         | 父页面提供给子页面调用的方法集合       | object                                        | -      | -    |
| setChildMethods | 设置子页面方法的，必须是 useState 创建 | React.Dispatch\<React.SetStateAction\<any\>\> | -      | -    |
| allowedOrigins  | 允许通信的源列表                       | string[]                                      | -      | -    |
| timeout         | 通信超时时间（毫秒）                   | number                                        | -      | -    |
| onError         | 错误处理回调函数                       | Function                                      | -      | -    |

### useLIframeParent

```ts
export declare function useLIframeParent<ParentMethods extends Methods>(
  connectOptions: ConnectOptions,
  allowedOrigins?: string[],
): {
  connection: Connection<Methods>;
  parentMethods: RemoteProxy<ParentMethods>;
};
```
