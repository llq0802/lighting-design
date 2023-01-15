---
title: LStepsForm
order: 2
nav:
  order: 2
  path: /components
---

# LStepsForm

基于 LForm 扩展的步骤条表单

## 代码演示

### 基础代码

<code src='./demos/Demo2.tsx'>

### 与 Modal 配合使用

<code src='./demos/Demo1.tsx'>

## API

```ts
import { LStepsForm } from 'lighting-design';
const { StepForm } = LStepsForm;
```

### LStepsForm

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 组件最外层容器类名 | `string` | `-` |
| contentClassName | 表单外层容器的类名 | `string` | `-` |
| defaultCurrent | 默认步骤 | `number` | `0` |
| current | 设置后变为受控模式。当前表单的步骤数。 | `number` | `-` |
| isMergeValues | 是否将每个表单的值合并后再传入到 `onFinish`的参数中 | `boolean` | `true` |
| isReady | 为 `false` 时，禁止上一步、下一步、提交操作。 | `boolean` | `true` |
| stepsProps | `antd Steps` 的属性，去掉了 `current` 和 `onChange` | [StepsProps](https://4x.ant.design/components/steps-cn/#API) | `-` |
| formProps | `LForm` 的属性，除了没有 `onReset` 和 `submitter` `isReady` | [LFormProps](/components/form) | `-` |
| submitter | 上一步、下一步、提交按钮的配置 | `StepsFormSubmitterProps` | `-` |
| actionRef | 常用操作引用，便于自定义触发 | `MutableRefObject<StepsFormActionType \| undefined>` | `-` |
| onCurrentChange | current 发生改变的事件 | `(current:number) => void` | `-` |
| onFinish | 表单提交成功后调用 , 默认只在最后一步提交之后触发 , 会自动管理`loading` | `(values) => any` | `-` |
| stepsRender | 自定义步骤器 | `(stepsDom: ReactNode,items: StepsProps['item']) => ReactNode` | `-` |
| stepFormRender | 自定义每个表单 | `(formDom: ReactNode,index:number) => ReactNode` | `-` |
| stepsFormRender | 自定义整个组件 | `(stepsDom: ReactNode, formDom: ReactNode, submitterDom: ReactNode) => ReactNode` | `-` |

### LStepsForm.StepForm

基于 LForm 扩展的表单，没有 `onReset` `isReady`， 除了以下参数，其余和 [LForm](/components/form) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 步骤条标题 | `ReactNode` | `-` |
| subTitle | 步骤条子标题，可选 | `ReactNode` | `-` |
| icon | 步骤图标的类型，可选 | `ReactNode` | `-` |
| description | 步骤的详情描述，可选 | `ReactNode` | `-` |
| stepItemProps | 步骤条内的当前步骤配置。与 `antd Steps`的`items`属性相同 | [StepsProps.items](https://4x.ant.design/components/steps-cn/#API) | `-` |
| submitter | 上一步、下一步、提交按钮的配置。会与 LStepsForm 的 submitter 合并，优先级更高。 | `StepsFormSubmitterProps` | `-` |
| onFinish | 当前表单提交成功后调用, 只要不返回`false`或者`Promise.resolve(false)`就触发下一步和提交 , 会自动管理`loading` | `(values) => any` | `-` |

### StepsFormSubmitterProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onPrev | 点击上一步按钮的回调 | `() => void` | `-` |
| prevText | 上一步按钮文本 | `ReactNode` | `上一步` |
| prevButtonProps | 上一步按钮属性，和 antd [Button](https://4x.ant.design/components/button-cn/#API) 一致 | [ButtonProps](https://4x.ant.design/components/button-cn/#API) | `-` |
| showPrev | 不显示上一步按钮 | `boolean` | `true` |
| forceShowPrev | 强制显示上一步按钮，优先级比 `showPrev` 高 | `boolean` | `-` |
| onNext | 点击下一步按钮的回调 | `() => void` | `-` |
| nextText | 下一步按钮文本 | `ReactNode` | `下一步` |
| nextButtonProps | 提交按钮属性，和 antd [Button](https://4x.ant.design/components/button-cn/#API) 一致 | [ButtonProps](https://4x.ant.design/components/button-cn/#API) | - |
| showNext | 不显示下一步按钮 | `boolean` | `true` |
| forceShowNext | 强制显示下一步按钮，优先级比 `showNext` 高 | `boolean` | `-` |
| onSubmit | 点击提交按钮的回调 | `() => void` | - |
| submitText | 提交按钮文本 | `ReactNode` | `提交` |
| submitButtonProps | 提交按钮属性，和 antd [Button](https://4x.ant.design/components/button-cn/#API) 一致 | [ButtonProps](https://4x.ant.design/components/button-cn/#API) | - |
| forceShowSubmit | 强制显示提交按钮 | `boolean` | `-` |
| wrapperCol | 效果和[ Form 的 wrapperCol](https://4x.ant.design/components/form-cn/#API)一致 | `ColProps` | `-` |
| buttonAlign | 按钮位置 , 为`number`类型时与`LForm`的`labelWidth`效果一致 | `'left' \| 'right' \| 'center'\| number` | `-` |
| render | 自定义操作的渲染 | ` (dom:ReactElement[],props) => ReactNode[] \| false` | `-` |

### actionRef

```typescript
interface StepsFormActionType {
  prev: () => void; // 返回上一步
  next: (submitted?: boolean) => void; // 跳转下一步，当submitted为true时，触发当前表单校验，校验成功则跳转下一步；当submitted为false时，不触发当前表单校验直接进入下一步。默认submitted为true
  submit: () => void; // 触发当前表单校验，并提交所有表单值
  reset: () => void; // 重置所有表单和值，将步骤恢复初始步骤
}
```
