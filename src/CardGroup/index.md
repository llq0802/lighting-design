---
title: LTagGroup
toc: content
---

# LCardGroup

卡片选择 / 支持取消

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 受控

<code src='./demos/Demo3.tsx'></code>

### 多选

<code src='./demos/Demo2.tsx'></code>

## API

```ts
import { LCardGroup } from 'lighting-design';
```

|     参数     |                  说明                  |                              类型                              | 默认值  |
| :----------: | :------------------------------------: | :------------------------------------------------------------: | :-----: |
|   options    |                  数据                  | [LCardGroupOptions](/components/card-group/#lcardgroupoptions) |   `-`   |
|    value     |                   值                   |                       `string\|string[]`                       |   `-`   |
| defaultValue |                 默认值                 |                       `string\|string[]`                       |   `-`   |
|     gap      |                卡片间隔                |                            `number`                            |   `8`   |
|  className   |                容器类名                |                            `string`                            |   `-`   |
|    style     |                容器样式                |                        `CSSProperties`                         |   `-`   |
|   multiple   |                是否多选                |                           `boolean`                            | `false` |
|   disabled   |                是否禁用                |                           `boolean`                            | `false` |
|  cancelable  | 单选时，是否可以点击选中的元素取消选中 |                           `boolean`                            | `false` |
|   onChange   |        受控时 value 值变化事件         |               `(val:string \| string[]) => void`               |  `- `   |

### LCardGroupOptions

```ts
export type LCardGroupOptions = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  /** antd Card组件属性 */
  cardProps?: CardProps;
}[];
```