---
title: LTagGroup
toc: content
---

# LCardGroup

卡片选择 / 支持取消，比起复选框每个卡片可承载更多的展示内容

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 自定义字段名

<code src='./demos/Demo7.tsx'></code>

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

| 参数          | 说明                                                                    | 类型                                                                                                                                    | 默认值                               |
| ------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| options       | 数据选项，每个选项可以配置单独的卡片属性                                | `(SelectProps['options'] & { cardProps?: CardProps }[]) \| Record<string, any>[]`                                                       | `-`                                  |
| value         | 受控值                                                                  | [LValueType](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-card-group\interface.ts#L3-L3)                                            | `-`                                  |
| defaultValue  | 默认值                                                                  | [LValueType](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-card-group\interface.ts#L3-L3)                                            | `-`                                  |
| multiple      | 是否支持多选                                                            | `boolean`                                                                                                                               | `false`                              |
| disabled      | 是否禁用                                                                | `boolean`                                                                                                                               | `false`                              |
| cancelable    | 单选时再次点击是否可以取消                                              | `boolean`                                                                                                                               | `false`                              |
| gap           | 每个卡片之间的间隔                                                      | `number`                                                                                                                                | `10`                                 |
| className     | 根类名                                                                  | `string`                                                                                                                                | `-`                                  |
| style         | 根样式                                                                  | `CSSProperties`                                                                                                                         | `-`                                  |
| cardBodyStyle | 统一设置每个卡片`body`的样式，比每一项中的 cardProps.bodyStyle 优先级低 | `(state: { isActive: boolean; isDisabled: boolean; item: Record<string, any> }) => (CSSProperties & Record<string, any>) \| undefined`  | `-`                                  |
| cardStyle     | 统一设置每个卡片的样式，比每一项中的 cardProps.style 优先级低           | `(state: { isActive: boolean; isDisabled: boolean; item: Record<string, any> }) => (CSSProperties & Record<string, any>) \| undefined`  | `-`                                  |
| cardClassName | 统一设置每个卡片的类名                                                  | `(state: { isActive: boolean; isDisabled: boolean; item: Record<string, any> }) => string \| undefined`                                 | `-`                                  |
| fieldNames    | 自定义 options 中 label 和 value 的字段名                               | `SelectProps['fieldNames']`                                                                                                             | `{ label: 'label', value: 'value' }` |
| renderItem    | 完全自定义渲染 item，不会被 Card 包裹                                   | `(item: Record<string, any>, state: { isActive: boolean; isDisabled: boolean; onClick: () => void }, index: number) => React.ReactNode` | `-`                                  |
| onChange      | value 改变时触发                                                        | `(...args: any[]) => void`                                                                                                              | `-`                                  |
