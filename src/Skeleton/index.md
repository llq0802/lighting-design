---
title: LSkeleton
toc: content
---

# LSkeleton

文字高亮组件

## 代码演示

### 基础用法

<code src="./demos/demo1.tsx" ></code>

### 区分大小写以及自定义样式

<!-- <code src="./demos/demo2.tsx" ></code> -->

## API

```ts
import { LEllipsisText } from 'lighting-design';
```

除了以下属性 其余跟原生 `span` 标签属性方法一样

|   参数    |            说明             |                                                        类型                                                        | 默认值 |
| :-------: | :-------------------------: | :----------------------------------------------------------------------------------------------------------------: | :----: |
| className |          容器类名           |                                                      `string`                                                      |  `-`   |
|   style   |          容器样式           |                                                  `CSSProperties`                                                   |  `-`   |
| maxLength |       最大字符串长度        |                                                      `number`                                                      |  `-`   |
| maxWidth  |        最大元素宽度         |                                                  `number\|string`                                                  |  `-`   |
| emptyText |     自定义空文本的节点      |                                                    `ReactNode`                                                     |  `-`   |
|  tooltip  | 提示属性 默认开启为原始文本 | `boolean` \| [TooltipProps](https://ant-design.antgroup.com/components/tooltip-cn#%E5%85%B1%E5%90%8C%E7%9A%84-api) | `true` |
|  chilren  |            文本             |                                                      `string`                                                      |  `-`   |
