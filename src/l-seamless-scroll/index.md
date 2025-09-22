---
title: LSeamlessScroll
toc: content
---

# LSeamlessScroll

基于`requestAnimationFrame`实现的无缝滚动

## 代码演示

### 基础代码

<code src='./demos/Demo1.tsx' ></code>

### 移入暂停

<code src='./demos/Demo2.tsx' ></code>

### 单步滚动

<code src='./demos/Demo3.tsx' ></code>

### 动态数据

<code src='./demos/Demo4.tsx' ></code>

## API

```ts
import { LSeamlessScroll } from 'lighting-design';
```

### LSeamlessScroll API

| 属性             | 说明                                              | 类型                                                                | 默认值        | 版本 |
| ---------------- | ------------------------------------------------- | ------------------------------------------------------------------- | ------------- | ---- |
| autoScroll       | 是否自动开始滚动                                  | boolean                                                             | true          | -    |
| list             | 原始数据列表                                      | T[]                                                                 | -             | -    |
| step             | 步进速度，也是单步大小的约数                      | number                                                              | 1             | -    |
| hover            | 是否开启鼠标悬停暂停功能                          | boolean                                                             | false         | -    |
| direction        | 控制滚动方向                                      | 'up' \| 'down'                                                      | 'up'          | -    |
| singleHeight     | 单步运动停止的高度(每一项的高度)                  | number                                                              | 0             | -    |
| singleWaitTime   | 单步停止等待时间                                  | number                                                              | 1000          | -    |
| ease             | CSS 过渡效果                                      | string                                                              | 'ease-in-out' | -    |
| copyNum          | 拷贝几份滚动列表                                  | number                                                              | 2             | -    |
| wheel            | 开启鼠标悬停时支持滚轮滚动（必须配合 hover 使用） | boolean                                                             | false         | -    |
| className        | 滚动盒子的类名                                    | string                                                              | -             | -    |
| style            | 滚动盒子的样式                                    | React.CSSProperties                                                 | -             | -    |
| contentClassName | 内容区域的类名                                    | string                                                              | -             | -    |
| contentStyle     | 内容区域的样式                                    | React.CSSProperties                                                 | -             | -    |
| height           | 滚动区域高度                                      | number \| string                                                    | -             | -    |
| wheelDistance    | 鼠标滚轮滚动距离                                  | number                                                              | -             | -    |
| actionRef        | 组件操作引用，可用于控制组件行为                  | React.MutableRefObject&lt;LSeamlessScrollActionRef \| undefined&gt; | -             | -    |
| rowKey           | 数据项的唯一标识字段名                            | string                                                              | 'key'         | -    |
| renderItem       | 渲染每项数据的函数                                | (item: T, index: number) => React.ReactNode                         | -             | -    |

### LSeamlessScrollActionRef API

通过 [actionRef](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-seamless-scroll/interface.ts#L60-L60) 可以调用组件的以下方法：

| 方法名 | 说明         | 类型       | 版本 |
| ------ | ------------ | ---------- | ---- |
| reset  | 重置滚动状态 | () => void | -    |
| start  | 开始滚动     | () => void | -    |
| stop   | 停止滚动     | () => void | -    |

### 注意事项

1. 当设置 [singleHeight](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-seamless-scroll/interface.ts#L26-L26) 大于 0 时，组件将启用单步滚动模式，每滚动一个项目高度会暂停 [singleWaitTime](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-seamless-scroll/interface.ts#L30-L30) 毫秒
2. [hover](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-seamless-scroll/interface.ts#L18-L18) 属性设为 `true` 时，鼠标悬停会暂停滚动
3. 当 [hover](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-seamless-scroll/interface.ts#L18-L18) 和 [wheel](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-seamless-scroll/interface.ts#L46-L46) 同时为 `true` 时，鼠标悬停状态下可以通过滚轮控制滚动
4. [step](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-seamless-scroll/interface.ts#L14-L14) 属性控制每次滚动的像素距离，值越大滚动越快
5. [copyNum](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-seamless-scroll/interface.ts#L41-L41) 控制复制几份列表用于无缝滚动效果，默认为 2 份
