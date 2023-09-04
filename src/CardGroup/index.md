---
title: LTagGroup
toc: content
---

# LCardGroup

卡片选择 / 支持取消，比起复选框每个卡片可承载更多的展示内容

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 受控

<code src='./demos/Demo3.tsx'></code>

### 多选

<code src='./demos/Demo2.tsx'></code>

### 单选时可取消

<code src='./demos/Demo5.tsx'></code>

### 在 LForm 中使用

<code src='./demos/Demo4.tsx'></code>

### 修改选中样式

<code src='./demos/Demo6.tsx'></code>

## API

:::warning{title=注意}

- 卡片的宽度默认最小为 `200px (min-width:200px)`，可通过 `cardStyle`修改

  :::

```ts
import { LCardGroup } from 'lighting-design';
```

|     参数      |                                说明                                |                类型                | 默认值  |
| :-----------: | :----------------------------------------------------------------: | :--------------------------------: | :-----: |
|    options    |                                数据                                |       `LCardGroupOptions[]`        |   `-`   |
|     value     |                                 值                                 |         `string\|string[]`         |   `-`   |
| defaultValue  |                               默认值                               |         `string\|string[]`         |   `-`   |
|      gap      |                              卡片间隔                              |              `number`              |   `8`   |
|   className   |                              容器类名                              |              `string`              |   `-`   |
|     style     |                              容器样式                              |          `CSSProperties`           |   `-`   |
| cardBodyStyle | 统一设置卡片 body 样式 比每一项中的 `cardProps.bodyStyle` 优先级低 |          `CSSProperties`           |   `-`   |
|   cardStyle   |      统一设置卡片样式 比每一项中的 `cardProps.style` 优先级低      |          `CSSProperties`           |   `-`   |
|  activeStyle  |                          被选中的卡片样式                          |          `CSSProperties`           |   `-`   |
|   multiple    |                              是否多选                              |             `boolean`              | `false` |
|   disabled    |                              是否禁用                              |             `boolean`              | `false` |
|  cancelable   |               单选时，是否可以点击选中的元素取消选中               |             `boolean`              | `false` |
|   onChange    |                      受控时 value 值变化事件                       | `(val:string \| string[]) => void` |  `- `   |

### LCardGroupOptions

```ts
export type LCardGroupOptions = {
  label: ReactNode; // 相当于 Card 的 children
  value: string;
  disabled?: boolean;
  /** antd Card组件属性 */
  cardProps?: CardProps;
};
```
