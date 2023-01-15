---
title: LForm
order: 2
nav:
  order: 2
  path: /components
---

# LForm

基于 antd Form 组件扩展的高级表单

## 代码演示

<code src='./demos/Demo1.tsx'  title='基础代码' description='基础代码' >

## 表单初始值通过异步获取

<code src='./demos/Demo5.tsx' title='表单初始值通过异步获取' description='表单初始值通过异步获取' >

## 提交表单之前转化表单的值

<code src='./demos/Demo2.tsx' title='提交表单之前转化表单的值' description='提交表单之前转化表单的值' >

## 自定义提交/重置按钮

<code src='./demos/Demo3.tsx' title='自定义提交/重置按钮' description='自定义提交/重置按钮' >

## API

### LForm

除了以下参数，其余和 antd [Form](https://ant-design.gitee.io/components/form-cn/#Form) 组件一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| labelWidth | label 宽度 ,为 `number` 时 不建议与 `labelCol` 属性同时设置 | `number \| 'auto'` | `'auto'` |
| transformValues | 在 `onFinish` 调用之前转化表单值 | `(values: Record<string, any>) => Record<string, any>` | `-` |
| submitter | 提交、重置按钮相关配置。为`false`将不会渲染 | `false \| LFormSubmitterProps` | `LFormSubmitterProps` |
| isEnterSubmit | 是否开启回车键提交，注意不要与自定义的 `htmlType='submit'` 的按钮冲突。 | `boolean` | `true` |
| loading | 设置提交、重置的加载/禁止状态。<br/>如果 `onFinish` 返回异步则无需设置，内部会自动更新。 | `boolean` | `false` |
| isReady | 为 `false` 时，禁止提交/重置表单。<br/>为 `true` 时，会重新设置表单初始值。<br/>一般用于异步获取初始值`initialValues` | `boolean` | `true` |
| onFinish | 提交数据时触发，和 `antd Form` 一样。如果返回异步，会自动管理 `loading` 无需再设置 `loading`。 | `(values) => any` | `-` |
| onReset | 点击重置按钮的回调 | `(e) => void` | `-` |

### LFormSubmitterProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| submitText | 提交按钮文本 | `ReactNode` | `提交` |
| resetText | 重置按钮文本 | `ReactNode` | `重置` |
| submitButtonProps | 提交按钮属性，和 antd [Button](https://4x.ant.design/components/button-cn/#API) 一致 | [ButtonProps](https://4x.ant.design/components/button-cn/#API) | `-` |
| resetButtonProps | 重置按钮属性，和 antd [Button](https://4x.ant.design/components/button-cn/#API) 一致 | [ButtonProps](https://4x.ant.design/components/button-cn/#API) | `-` |
| wrapperCol | 只在`LForm`组件中生效 </br>效果和[ Form 的 wrapperCol](https://4x.ant.design/components/form-cn/#API)一致 | `ColProps` | `-` |
| showReset | 是否渲染重置按钮 | `boolean` | `true` |
| buttonAlign | 按钮位置 , 为`number`类型时与`LForm`的`labelWidth`效果一致<br>在 `LMoadlForm` 默认为`right`<br>在 `LDrawerForm` 默认为`center` | `'left' \| 'right' \| 'center'\| number` | `-` |
| onSubmit | 点击提交按钮的回调 | `(e) => void` | `-` |
| onReset | 点击重置按钮的回调 | `(e) => void` | `-` |
| render | 自定义操作的渲染 | ` (dom: ReactElement[], props: LFormSubmitterProps) => ReactNode[] \| ReactNode` | `-` |

<mark>`submitButtonProps` `resetButtonProps`额外支持`preventDefault`配置项，如果设置为`true` ，则不触发预置行为(重置或提交事件)。 <mark>

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
