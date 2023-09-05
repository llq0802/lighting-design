---
title: LEllipsisText
toc: content
---

# LEllipsisText

处理单行文本的省略 , 可与 `LTable` 配合

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx" ></code>

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
