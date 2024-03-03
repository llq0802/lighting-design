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

<code src='./demos/Demo6.tsx'></code>

### 表单 initialValues 通过异步动态获取设置

<code src='./demos/Demo5.tsx' ></code>

### 通过 form.setFieldsValue 设置初始值

<code src='./demos/Demo8.tsx' ></code>

### 某一项的值变化后的副作用

<code src='./demos/Demo7.tsx' ></code>

### 提交表单之前转化表单的值

<code src='./demos/Demo2.tsx' ></code>

### 自定义提交 / 重置按钮

<code src='./demos/Demo3.tsx' ></code>

## API

:::warning{title=注意}

- `LForm` 的`children`子项必须包含`LFormItemXXX` 或 `LFormItem` 或 `Form.Item`

- 如果要为组件设置初始值 你应该始终通过 `LForm` 的 `initialValues`属性 , 如果某一字段为动态渲染使用则 `LFormItem` 的`initialValue`, 不要为子项设置 `defaultValue`

- 不要设置 `initialValues`属性为 `{}` , 而是带上字段名 `{ xxx: xxx }`, <mark>支持动态设置 LForm 的 initialValues 初始值 </mark>

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

### LForm

除了以下参数，其余和 antd [Form](https://ant-design.antgroup.com/components/form-cn#api) 组件一样。

| 参数            | 说明                                                                                                                  | 类型                                                                                        | 默认值   |
| --------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------- |
| labelWidth      | 所有表单项 label 宽度 , 同 `labelCol={{ flex: 'xxx px' }}` 不要与 `labelCol` 属性同时设置                             | `string\|number \|'auto'`                                                                   | `'auto'` |
| formItemBottom  | 统一设置 Form.Item 或 LFormItem 或 LFormItemXXX 组件的 style.bottom 属性                                              | `string\|number`                                                                            | `-`      |
| transformValues | 在 `onFinish` 调用之前转化表单值 , 返回值会传给 `onFinish` 的参数                                                     | `(values: Record<string, any>) => Record<string, any>`                                      | `-`      |
| submitter       | 提交、重置按钮相关配置。为`false`将不会渲染                                                                           | `false` \| [LFormSubmitterProps]                                                            | `-`      |
| isEnterSubmit   | 是否开启回车键提交 `如果自定义渲染且不使用内部 dom 则无效`                                                            | `boolean`                                                                                   | `true`   |
| isAntdReset     | 内部的重置否使用 `form.resetFields()` <br> `true`时会每次重置就会重新挂挂载子组件                                     | `boolean`                                                                                   | `true`   |
| loading         | 设置提交、重置的加载/禁止状态。<br/>如果 `onFinish` 返回异步则无需设置，内部会自动更新。                              | `boolean`                                                                                   | `false`  |
| isReady         | 为 `false` 时，禁止提交/重置表单。<br/>为 `true` 时，会重新设置表单初始值。<br/>一般用于异步获取初始值`initialValues` | `boolean`                                                                                   | `true`   |
| onFinish        | 提交数据时触发。如果是`异步函数`，会自动管理`提交丶重置按钮`的 `loading` 外部无需再设置 `loading`。                   | `(values) => any`                                                                           | `-`      |
| onValuesChange  | 字段值更新时触发回调事件。<br> `(不建议设置每一项的 onChange,而是统一在此设置)`                                       | `(currentName: string, currentValue: any, allValues: Record<string, any>) => void`          | `-`      |
| onReset         | 点击重置按钮并且表单重置完成后回调                                                                                    | `(e) => void`                                                                               | `-`      |
| contentRender   | 自定义渲染`children`                                                                                                  | `(formItemsDom: ReactNode[],submitterDom: ReactNode, form: FormInstance<any>) => ReactNode` | `-`      |
| formRender      | 自定义渲染整个组件                                                                                                    | `(formDom: ReactElement, submitterDom: ReactNode) => ReactNode`                             | `-`      |

### LFormSubmitterProps

```ts
<LForm
  submitter={{
    submitButtonProps: {
      preventDefault: true, // 点击提交按钮，不触发表单提交 也不会触发 submitter.onSubmit
      // ...其他 Button 属性
    },
    resetButtonProps: {
      preventDefault: true, // 点击重置按钮，不触发表单重置  也不会触发 onReset 或 submitter.onReset
      // ...其他 Button 属性
    },
  }}
>
  // ...
</LForm>
```

| 参数              | 说明                                                                                                                                                                                                    | 类型                                                                             | 默认值 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------ |
| submitText        | 提交按钮文本                                                                                                                                                                                            | `ReactNode`                                                                      | `提交` |
| resetText         | 重置按钮文本                                                                                                                                                                                            | `ReactNode`                                                                      | `重置` |
| submitButtonProps | 提交按钮属性，和 [Button](https://ant.design/components/button-cn#api) 一致                                                                                                                             | [ButtonProps]                                                                    | `-`    |
| resetButtonProps  | 重置按钮属性，和 [Button](https://ant.design/components/button-cn#api) 一致                                                                                                                             | [ButtonProps]                                                                    | `-`    |
| showReset         | 是否渲染重置按钮                                                                                                                                                                                        | `boolean`                                                                        | `true` |
| onSubmit          | 点击提交按钮的回调                                                                                                                                                                                      | `(e) => void`                                                                    | `-`    |
| onReset           | 点击重置按钮的回调 (优先级比 LForm 的 onReset 高)                                                                                                                                                       | `(e) => void`                                                                    | `-`    |
| render            | 自定义操作的渲染                                                                                                                                                                                        | ` (dom: ReactElement[], props: LFormSubmitterProps) => ReactNode[] \| ReactNode` | `-`    |
| buttonAlign       | 按钮位置 , 为`number`类型时与`LForm`的`labelWidth`效果一致<br>在 `LMoadlForm` 默认为`right`<br>在 `LDrawerForm` 默认为`center` <br> `LDrawerForm` `LMoadlForm` 只能设置 `'left' \| 'right' \| 'center'` | `'left' \| 'right' \| 'center'\| number\|string`                                 | `-`    |
| style             | 按钮外层 LFormItem 的 style, 只在 LForm 与 LQueryForm 中生效                                                                                                                                            | ` CSSProperties`                                                                 | `-`    |
| wrapperCol        | 按钮外层 LFormItem 的 wrapperCol , 只在 LForm 中生效                                                                                                                                                    | `FormProps['wrapperCol']`                                                        | `-`    |

## 常见问题 [FAQ](https://ant-design.antgroup.com/components/form-cn#faq)

[LFormSubmitterProps]: #lformsubmitterprops
[ButtonProps]: https://ant-design.antgroup.com/components/button-cn#api
