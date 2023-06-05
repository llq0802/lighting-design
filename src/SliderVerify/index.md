---
title: LSliderVerify
toc: content
---

# LSliderVerify

滑块验证，常用于登录。

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx' ></code>

### 在 LForm 中使用

<!-- <code src='./demos/Demo2.tsx' ></code> -->

## API

> 卡片的宽度默认最小为 `200px (min-width:200px)`，可通过 `cardStyle`修改

```ts
import { LSliderVerify } from 'lighting-design';
```

|       参数       |            说明            |                类型                |           默认值           |
| :--------------: | :------------------------: | :--------------------------------: | :------------------------: |
|    difference    | 距离最右边还剩多少就算成功 |              `number`              |            `0`             |
|   defaultValue   |           默认值           |             `boolean`              |            `-`             |
|      value       |           受控值           |             `boolean`              |            `-`             |
|    className     |          容器类名          |              `string`              |            `-`             |
|      style       |          容器样式          |          `CSSProperties`           |            `-`             |
|     barStyle     |         滑块的样式         |       `React.CSSProperties`        |            `-`             |
|    tipsStyle     |    文字提示 div 的样式     |       `React.CSSProperties`        |            `-`             |
|      width       |          组件宽度          |              `number`              |           `400`            |
|      height      |          组件高度          |              `number`              |            `32`            |
|     bgColor      |      组件初始背景颜色      |              `string`              |         `#F2F3F5`          |
|       tips       |         提示的文字         |         ` React.ReactNode`         | `请按住滑块，拖动到最右边` |
|       bar        |        初始滑块内容        |         ` React.ReactNode`         | `<DoubleRightOutlined />`  |
|    successBar    |       成功后滑块内容       |         ` React.ReactNode`         |    `<CheckOutlined />`     |
|  successShowBar  | 成功后是否还显示 bar(滑块) |             `boolean`              |           `true`           |
|  successBgColor  |      成功后的背景颜色      |             ` string`              |         `#52c41a`          |
|   successTips    |      成功后提示的文字      |         ` React.ReactNode`         |        `验证已通过`        |
| successTipsStyle | 成功后文字提示 div 的样式  |       `React.CSSProperties`        |            `-`             |
|    onSuccess     |       验证成功的回调       |            `() => void`            |            `- `            |
|     onChange     |  受控时 value 值变化事件   | `(val:string \| string[]) => void` |            `- `            |

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
