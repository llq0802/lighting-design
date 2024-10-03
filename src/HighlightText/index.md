---
title: LHighlightText
toc: content
---

# LHighlightText

高性能的文字高亮组件

- 支持自定义渲染
- 内置防抖优化

## 代码演示

### 基础用法

<code src="./demos/demo1.tsx" ></code>

### 区分大小写以及自定义样式

<code src="./demos/demo2.tsx" ></code>

### 与输入框结合

<code src="./demos/demo3.tsx" ></code>

## API

```ts
import { LEllipsisText } from 'lighting-design';
```

除了以下属性 其余跟原生 `span` 标签属性方法一样

| 参数               | 说明                                           | 类型                          | 默认值   |
| :----------------- | :--------------------------------------------- | :---------------------------- | :------- |
| className          | 容器类名                                       | `string`                      | `-`      |
| style              | 容器样式                                       | `CSSProperties`               | `-`      |
| autoEscape         | 是否自动转义                                   | `boolean`                     | `true`   |
| caseSensitive      | 是否区分大小写                                 | `boolean`                     | `false`  |
| highlightClassName | 自定义高亮类名                                 | `string`                      | `-`      |
| highlightStyle     | 自定义高亮样式                                 | `CSSProperties`               | `-`      |
| highlightTag       | 自定义高亮标签, 例如: span                     | `string`                      | `'mark'` |
| highlightWords     | 要高亮的文本数组, 例如: ['lighting', 'design'] | `string[]`                    | `-`      |
| renderHighlight    | 重新渲染高亮的文本内容                         | `(text: string) => ReactNode` | `-`      |
