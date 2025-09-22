---
title: LTagGroup
toc: content
---

# LTagGroup

标签选择 / 支持取消

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 自定义字段名

<code src='./demos/Demo7.tsx'></code>

### 受控

<code src='./demos/Demo4.tsx'></code>

### 多选

<code src='./demos/Demo2.tsx'></code>

### 单选时可取消

<code src='./demos/Demo6.tsx'></code>

### 修改样式

<code src='./demos/Demo3.tsx'></code>

### 在 LForm 中使用

<code src='./demos/Demo5.tsx'></code>

## API

```ts
import { LTagGroup } from 'lighting-design';
```

我需要查看 LTagGroup 组件的源码和相关文件，以生成完整的 API 表格。

```toolCall::read_file::call_3db79e720a974ca194b7b478::INIT

```

查看 LTagGroup 组件的样式文件

```toolCall::read_file::call_0d09b01f9d854d6ea187fe85::INIT

```

查看 LTagGroup 组件的文档说明文件

```toolCall::read_file::call_099c58c3a789458ba6ef08cf::INIT

```

查看 LTagGroup 组件的 demo 文件以了解使用示例

```toolCall::read_file::call_2f9d08b4ac814ba89d0c1541::INIT

```

# LTagGroup API

| 参数         | 说明                                      | 类型                                                                                                                                    | 默认值                               |
| ------------ | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| options      | 数据选项，每个选项可以配置单独的标签属性  | `(SelectProps['options'] & { tagProps?: TagProps }[]) \| Record<string, any>[]`                                                         | `-`                                  |
| value        | 受控值                                    | [LValueType](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\interface.ts#L2-L2)                                                         | `-`                                  |
| defaultValue | 默认值                                    | [LValueType](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\interface.ts#L2-L2)                                                         | `-`                                  |
| multiple     | 是否支持多选                              | `boolean`                                                                                                                               | `false`                              |
| disabled     | 是否禁用                                  | `boolean`                                                                                                                               | `false`                              |
| cancelable   | 单选时再次点击是否可以取消                | `boolean`                                                                                                                               | `false`                              |
| fieldNames   | 自定义 options 中 label 和 value 的字段名 | `SelectProps['fieldNames']`                                                                                                             | `{ label: 'label', value: 'value' }` |
| className    | 根类名                                    | `string`                                                                                                                                | `-`                                  |
| style        | 根样式                                    | `CSSProperties`                                                                                                                         | `-`                                  |
| tagStyle     | 统一设置每个标签的样式                    | `(state: { isActive: boolean; isDisabled: boolean; item: Record<string, any> }) => (CSSProperties & Record<string, any>) \| undefined`  | `-`                                  |
| tagClassName | 统一设置每个标签的类名                    | `(state: { isActive: boolean; isDisabled: boolean; item: Record<string, any> }) => string \| undefined`                                 | `-`                                  |
| renderItem   | 完全自定义渲染 item                       | `(item: Record<string, any>, state: { isActive: boolean; isDisabled: boolean; onClick: () => void }, index: number) => React.ReactNode` | `-`                                  |
| onChange     | value 改变时触发                          | `(...args: any[]) => void`                                                                                                              | `-`                                  |
