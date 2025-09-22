---
title: LForm
toc: content
nav:
  path: /components
---

# LForm

基于 `Form` 组件扩展的高级表单，

**特点**

- 向下兼容原 `Form` 组件。
- 支持 onFinish 调用之前转化表单值
- 支持 onValuesChange 统一监听字段变化
- 支持自动管理 loading
- 支持异步设置表单默认值
- 支持自定义渲染 任意组合
- 内置提交 重置 可自定义配置

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 表单整体禁用与大小

可通过 `LFormItemXXX` 的 `disabled` 和 `size` 单独设置

<code src='./demos/Demo2.tsx'></code>

### 自定义提交 / 重置按钮

<code src='./demos/Demo3.tsx' ></code>

### 某一项的值变化后的回调

<code src='./demos/Demo7.tsx' ></code>

### 提交表单之前转化表单的值

<code src='./demos/Demo6.tsx' ></code>

### 通过 form.setFieldsValue 设置初始值

<code src='./demos/Demo8.tsx' ></code>

## API

:::warning{title=注意}

- `LForm` 的`children`子项必须包含`LFormItemXXX` 或 `LFormItem` 或 `Form.Item`

- 如果要为组件设置初始值 你应该始终通过 `LForm` 的 `initialValues`属性 , 如果某一字段为动态渲染使用则 `LFormItem` 的`initialValue`, 不要为子项设置 `defaultValue`

- 不要设置 `initialValues`属性为 `{}` , 而是带上字段名 `{ xxx: xxx }`, <mark>配合 isReady , 支持动态设置 LForm 的 initialValues 初始值 </mark>

- 如果要在某一项字段的值变化后做一些操作，你应该始终用`onValuesChange` 而不是给每某一表单项设置 `onChange` 事件

- 在提交表单时如果要处理格式化获取到的表单数据时推荐使用 `transformValues`方法, 而不是在 `onFinish`中进行处理表单值 , `onFinish`只针对调用`接口函数`

- `submitButtonProps` `resetButtonProps`额外支持`preventDefault`配置项，如果设置为`true` ，则不触发预置行为`(表单的重置 onReset 或 提交 onSubmit 事件)`

- `LMoadlForm` `LDrawerForm` 组件内部预设`resetButtonProps.preventDefault = true` 所以不会触发`onReset`事件 , 可通过`resetButtonProps`的`onClick`事件代替

- 动态渲染表单中的某一项请查看示例: [动态渲染表单中的某一项请查看示例](/components/form-item#使用-shouldupdate-动态渲染)
- 动态新增或者删除表单项请查看示例: [动态新增或者删除表单项请查看示例](/components/list-form)

- isAntdReset 内置的重置按钮是否使用 `antd 的 form.resetFields()`

  - isAntdReset `true` 时会每次重置就会重新挂挂载子组件
  - isAntdReset `false` 时不会重新挂挂载子组件 , 根据 LForm 的子组件的实际情况设置, 如 LFormItem 或者 Form.Item 中的数据通过`request`异步获取可设置为`false`

- `LFrom` 的重置方法与`Form`的重置方法行为相同, `LFrom`会重新`mount`子组件 `LFormItem` 或 `Form.Item` , 所以当你校验不通过时无法回到初始状态, 且如果有异步加载数据的方法也会重新请求.

  你可以通过一下方法来改变内置重置行为:

  1.  设置 `isAntdReset 为 false`
  2.  `submitter`自定义按钮渲染(render)后手动设置`form.setFieldsValue()`
  3.  `resetButtonProps`中设置`preventDefault = true`后在`onClick`中绑定`form.setFieldsValue()`

:::

```ts
import { LForm } from 'lighting-design';
```

### 基础属性

| 属性名         | 描述                                                              | 类型                                                                                                                                                            | 默认值 |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| isReady        | 表单是否准备完成，false 时禁止触发提交，true 时会对初始值重新赋值 | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `true` |
| disabled       | 是否禁用整个表单                                                  | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -      |
| size           | 表单尺寸                                                          | `'small' \| 'middle' \| 'large'`                                                                                                                                | -      |
| labelWidth     | label 标签的宽度                                                  | `number \| string`                                                                                                                                              | -      |
| wrapperWidth   | children 组件外层宽度                                             | `number \| string`                                                                                                                                              | -      |
| alignItems     | children 组件与 label 的对齐方式                                  | `'center' \| 'flex-start' \| 'flex-end'`                                                                                                                        | -      |
| formItemBottom | 设置表单项的 style.bottom 属性                                    | `number \| string`                                                                                                                                              | -      |

    onReset?:

### 表单方法相关属性

| 属性名   | 描述                                                      | 类型                                             | 默认值 |
| -------- | --------------------------------------------------------- | ------------------------------------------------ | ------ |
| form     | 表单实例                                                  | `FormInstance`                                   | -      |
| onFinish | 提交数据时触发，如果是异步函数会自动管理按钮 loading 状态 | `(values: T) => any`                             | -      |
| onReset  | 点击内置重置按钮触发                                      | `(event: React.MouseEvent<HTMLElement>) => void` | -      |

| onValuesChange | 字段值更新时触发 | `(currentName: keyof T, currentValue: T[keyof T], allValues: T) => void` | - |
| transformValues | 在 onFinish 调用之前转化表单值 | `(values: T) => T & Record<string, any>` | - |

### 提交按钮配置 (submitter)

可以通过 `submitter` 属性配置表单的提交和重置按钮：

| 属性名            | 描述                                                                     | 类型                                                                                                                                                            | 默认值   |
| ----------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| resetText         | 重置按钮文本                                                             | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495) | `'重置'` |
| submitText        | 提交按钮文本                                                             | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495) | `'提交'` |
| resetButtonProps  | 重置按钮的 Props，如果配置 preventDefault 为 true 则不会触发表单重置事件 | `ButtonProps & { preventDefault?: boolean }`                                                                                                                    | -        |
| submitButtonProps | 提交按钮的 Props，如果配置 preventDefault 为 true 则不会触发表单提交事件 | `ButtonProps & { preventDefault?: boolean }`                                                                                                                    | -        |
| onReset           | 点击重置按钮并且表单重置完成后回调                                       | `(event: React.MouseEvent<HTMLElement>) => void`                                                                                                                | -        |
| onSubmit          | 提交回调                                                                 | `(values: T, event: React.MouseEvent<HTMLElement>) => void`                                                                                                     | -        |
| showReset         | 是否展示重置按钮                                                         | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `true`   |
| isEnterSubmit     | 是否按 Enter 键能提交表单                                                | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -        |
| position          | 按钮的排列方式                                                           | `'flex-start' \| 'flex-end' \| 'center' \| number \| string`                                                                                                    | -        |
| renderSubmitter   | 重新渲染函数                                                             | `(doms: { submitDom: ReactNode; resetDom: ReactNode }, props: LFormSubmitterProps) => ReactNode[] \| ReactNode`                                                 | -        |

### 自定义渲染属性

| 属性名         | 描述                               | 类型                                                                                                                                       | 默认值 |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| renderChildren | 重新渲染 LForm 组件的所有 children | `(params: { formItemsDom: ReactNode; submitterDom: ReactNode; form: FormInstance<T> }, props: LFormProps) => ReactNode`                    | -      |
| renderLFrom    | 重新渲染整个 LForm                 | `(params: { dom: ReactElement; formItemsDom: ReactNode; submitterDom: ReactNode; form: FormInstance<T> }, props: LFormProps) => ReactNode` | -      |
