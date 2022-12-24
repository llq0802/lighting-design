---
title: LForm
order: 2
nav:
  order: 2
  path: /components
---

# LForm-表单

## 代码演示

<code src='./demos/Demo1.tsx'>

## API

### LForm

除了以下参数，其余和 antd [Form](https://ant-design.gitee.io/components/form-cn/#Form) 组件一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFinish | 提交数据时触发，和 antd Form 一样。如果返回异步，会自动管理 loading 。 | `(values) => any` | - |
| onReset | 点击重置按钮的回调 | `(e) => void` | - |
| submitter | 提交、重置按钮相关配置 | `false \| LFormSubmitterProps` | - |
| isEnterSubmit | 是否开启回车键提交，注意不要与自定义的 `htmlType='submit'` 的按钮冲突。 | `boolean` | `true` |
| loading | 设置提交、重置的加载/禁止状态。<br/>如果 `onFinish` 返回异步则无需设置，内部会自动更新。 | `boolean` | `false` |
| isReady | 为 `false` 时，禁止提交/重置表单。<br/>为 `true` 时，会重新设置表单初始值。 | `boolean` | `true` |

### LFormSubmitterProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onSubmit | 点击提交按钮的回调 | `(e) => void` | - |
| onReset | 点击重置按钮的回调 | `(e) => void` | - |
| submitText | 提交按钮文本 | `ReactNode` | `提交` |
| resetText | 重置按钮文本 | `ReactNode` | `重置` |
| submitButtonProps | 提交按钮属性，和 antd [Button](https://4x.ant.design/components/button-cn/#API) 一致 | [ButtonProps](https://4x.ant.design/components/button-cn/#API) | - |
| resetButtonProps | 重置按钮属性，和 antd [Button](https://4x.ant.design/components/button-cn/#API) 一致 | [ButtonProps](https://4x.ant.design/components/button-cn/#API) | - |
| showReset | 是否渲染重置按钮 | `boolean` | `true` |
| buttonAlign | 按钮位置 | `'left' \| 'right' \| 'center'` | `-` |
| render | 自定义操作的渲染 | `false \| (dom: ReactElement[], props: LFormSubmitterProps) => ReactNode[] \| ReactNode` | `-` |

`submitButtonProps` `resetButtonProps` 额外支持 `preventDefault` 配置项，如果设置为 `true` ，则不触发预置行为(重置或提交事件)。
