---
title: LScrollBar
toc: content
---

# LScrollBar

用于美化原生滚动条。
使用`content-visibility` `contain-intrinsic-size`优化性能 并对低版本浏览器做了降级处理。

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx" ></code>

### 隐藏滚动条

<code src="./demos/Demo2.tsx" ></code>

### 鼠标移入才显示滚动条

<code src="./demos/Demo3.tsx" ></code>

### 修改样式

<code src="./demos/Demo4.tsx" ></code>

## API

> - `height` 与 `maxHeight` 必须设置其中一个属性
>
> - `LScrollBar` 的宽度为等于 `LScrollBar` 的根 `div` 的宽度 + 滚动条的宽度 `(默认 13px)`

```ts
import { LScrollBar } from 'lighting-design';
```

除了以下属性 其余跟原生 `div` 属性方法一样

|   参数    |                说明                |           类型            |  默认值  |
| :-------: | :--------------------------------: | :-----------------------: | :------: |
|    tag    | 将组件根标签渲染为对应的 html 标签 |       `HTML标签名`        | `'div'`  |
|   mode    |          滚动条显示的模式          | `'show'\|'hide'\|'hover'` | `'show'` |
| className |              容器类名              |         `string`          |   `-`    |
|   style   |              容器样式              |      `CSSProperties`      |   `-`    |
|  height   |                高度                |     `number\|string`      |  `100%`  |
| maxHeight |              最大高度              |     `number\|string`      |   `-`    |

## CSS 变量

```css
/* 在组件内部定义 可传入style覆盖样式 */
--lightd-scrollbar-bg-color: #dddee0;
--lightd-scrollbar-bg-hover-color: #a8a8a8;
--lightd-scrollbar-width: 13px;
--lightd-scrollbar-border-radius: 7px;
```
