---
title: LForm
toc: content
nav:
  path: /components
---

# LForm

基于 antd Form 组件扩展的高级表单，向下兼容原 Form 组件。

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'   ></code>

### 表单禁用

<code src='./demos/Demo6.tsx'  ></code>

### 表单的初始值通过异步获取

<code src='./demos/Demo5.tsx' ></code>

### 某一项的值变化后的副作用

<code src='./demos/Demo7.tsx' ></code>

### 提交表单之前转化表单的值

<code src='./demos/Demo2.tsx' ></code>

### 自定义提交 / 重置按钮

<code src='./demos/Demo3.tsx' ></code>

## API

> - 如果要为组件设置初始值 你应该始终通过 `LFormItem` 的`initialValue`或者 `LForm` 的 `initialValues`属性来设置，而不是设置 `defaultValue`
>
> - 如果要在某一项的值变化后做一些操作，你应该始终用`onValuesChange` 而不是给每某一项设置 `onChange` 事件

```ts
import { LForm } from 'lighting-design';
```

### LForm

除了以下参数，其余和 antd [Form](https://ant.design/components/form-cn#api) 组件一样。

| 参数            | 说明                                                                                                                  | 类型                                                                                        | 默认值   |
| --------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------- |
| labelWidth      | 所有表单项 label 宽度 , 同 `labelCol={{ flex: 'xxx px' }}` , 不要与 `labelCol` 属性同时设置                           | `number \| 'auto'`                                                                          | `'auto'` |
| transformValues | 在 `onFinish` 调用之前转化表单值 , 返回值会传给 `onFinish` 的参数                                                     | `(values: Record<string, any>) => Record<string, any>`                                      | `-`      |
| submitter       | 提交、重置按钮相关配置。为`false`将不会渲染                                                                           | `false` \| [LFormSubmitterProps](/components/form#lformsubmitterprops)                      | `-`      |
| isEnterSubmit   | 是否开启回车键提交，注意不要与 `submitter`中 `submitButtonProps` 的自定义 `htmlType='submit'` 的按钮冲突。            | `boolean`                                                                                   | `true`   |
| loading         | 设置提交、重置的加载/禁止状态。<br/>如果 `onFinish` 返回异步则无需设置，内部会自动更新。                              | `boolean`                                                                                   | `false`  |
| isReady         | 为 `false` 时，禁止提交/重置表单。<br/>为 `true` 时，会重新设置表单初始值。<br/>一般用于异步获取初始值`initialValues` | `boolean`                                                                                   | `true`   |
| onFinish        | 提交数据时触发，和 `antd Form` 一样。如果返回异步，会自动管理 `loading` 无需再设置 `loading`。                        | `(values) => any`                                                                           | `-`      |
| onValuesChange  | 字段值更新时触发回调事件 `(不建议设置每一项的 onChange,而是统一在此设置)`                                             | `(currentName: string, currentValue: any, allValues: Record<string, any>) => void`          | `-`      |
| onReset         | 点击重置按钮的回调                                                                                                    | `(e) => void`                                                                               | `-`      |
| contentRender   | 自定义渲染`children`                                                                                                  | `(formItemsDom: ReactNode[],submitterDom: ReactNode, form: FormInstance<any>) => ReactNode` | `-`      |
| formRender      | 自定义渲染整个组件                                                                                                    | `(formDom: ReactElement, submitterDom: ReactNode) => ReactNode`                             | `-`      |

### LFormSubmitterProps

| 参数              | 说明                                                                                                                           | 类型                                                                             | 默认值 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ------ |
| submitText        | 提交按钮文本                                                                                                                   | `ReactNode`                                                                      | `提交` |
| resetText         | 重置按钮文本                                                                                                                   | `ReactNode`                                                                      | `重置` |
| submitButtonProps | 提交按钮属性，和 [Button](https://ant.design/components/button-cn#api) 一致                                                    | [ButtonProps](https://ant.design/components/button-cn#api)                       | `-`    |
| resetButtonProps  | 重置按钮属性，和 [Button](https://ant.design/components/button-cn#api) 一致                                                    | [ButtonProps](https://ant.design/components/button-cn#api)                       | `-`    |
| wrapperCol        | 只在`LForm`组件中生效 </br>效果和[ Form 的 wrapperCol](https://ant.design/components/form-cn#api)一致                          | `ColProps`                                                                       | `-`    |
| showReset         | 是否渲染重置按钮                                                                                                               | `boolean`                                                                        | `true` |
| buttonAlign       | 按钮位置 , 为`number`类型时与`LForm`的`labelWidth`效果一致<br>在 `LMoadlForm` 默认为`right`<br>在 `LDrawerForm` 默认为`center` | `'left' \| 'right' \| 'center'\| number`                                         | `-`    |
| onSubmit          | 点击提交按钮的回调                                                                                                             | `(e) => void`                                                                    | `-`    |
| onReset           | 点击重置按钮的回调 (优先级比 LForm 的 onReset 高)                                                                              | `(e) => void`                                                                    | `-`    |
| render            | 自定义操作的渲染                                                                                                               | ` (dom: ReactElement[], props: LFormSubmitterProps) => ReactNode[] \| ReactNode` | `-`    |

> `submitButtonProps` `resetButtonProps`额外支持`preventDefault`配置项，如果设置为`true` ，则不触发预置行为`(表单的重置或提交事件)`。

```ts
<LForm
  submitter={{
    submitButtonProps: {
      preventDefault: true, // 点击提交按钮，不触发表单提交
      // ...其他属性
    },
    resetButtonProps: {
      preventDefault: true, // 点击重置按钮，不触发表单重置
      // ...其他属性
    },
  }}
>
  // ...
</LForm>
```
