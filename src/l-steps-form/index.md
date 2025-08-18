---
title: LStepsForm
toc: content
nav:
  path: /components
---

# LStepsForm

基于 `LForm` 扩展的步骤条表单

## 代码演示

### 基础用法

<code src='./demos/demo.tsx'></code>

### 高级用法

<code src='./demos/demo1.tsx'></code>

### 自定义

<code src='./demos/demo2.tsx'></code>

## API

```ts
import { LStepsForm } from 'lighting-design';
const { StepForm } = LStepsForm;
```

### LStepsForm

:::warning{title=注意}

- `isMergeValues` 为 `false` 收集到的值将不合并 此时如果 `LStepsForm.StepForm` 设置了 `name` 属性则以 `name` 作为键 , 注意此时每 `LStepsForm.StepForm 的 name`不能相同 , 如果 `LStepsForm.StepForm` 没有设置 `name` 属性则以每个 `LStepsForm.StepForm` 的索引作为键,

- `isMergeValues` 为 `true` 将每个`LStepsForm.StepForm`表单的值合并一个对象 , 此时务必保证每个表单中的表单项的`name`不相同

- `LStepsForm` 内容的最外层只能是 `LStepsForm.StepForm`，如果 `LStepsForm.StepForm` 外层有其他元素包裹，将其整体子项封装成一个组件并在 `props` 中将`_stepNum`属性传递给 `LStepsForm.StepForm`

- 某些情况你需要在提交成功时调用`form.resetFields()`手动控制恢复到默认值 , 请将`isResetFields={false}`

:::

除了以下参数，其余和 [LForm](/components/form#api) 一样。

### 基础属性

| 属性名          | 描述                                                                                     | 类型                                                                                                                                                            | 默认值 |
| --------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| items           | 步骤配置项列表，每个步骤包含表单项                                                       | [LStepsFormProps['items']](#lstepsformitem-属性)                                                                                                                | `[]`   |
| defaultCurrent  | 默认当前步骤                                                                             | [number](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L45-L45)  | `0`    |
| current         | 设置后变为受控模式，当前表单的步骤数                                                     | [number](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L45-L45)  | -      |
| onCurrentChange | current 发生改变的事件                                                                   | `(current: number) => void`                                                                                                                                     | -      |
| isReady         | 组件是否准备好，false 时不能进行`上一步`、`下一步`、`提交`等操作                         | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `true` |
| forceRender     | 初始化时强制渲染所有 dom                                                                 | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -      |
| destroyOnHidden | 被隐藏时是否销毁 DOM 结构                                                                | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -      |
| isMergeValues   | 是否将每个步骤表单的 onFinish 得到的表单数据合并成一个对象到最后提交的 onFinish 的参数中 | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -      |
| submitStepNum   | 在哪一步为最终的提交操作，用于触发 onFinish，默认为表单最后一步                          | [number](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L45-L45)  | -      |
| actionRef       | 实例包含一些方法和属性，可以通过它调用组件内部方法                                       | `MutableRefObject<LStepsFormActionRef>`                                                                                                                         | -      |

### 表单方法相关属性

| 属性名   | 描述                                                                                                 | 类型                          | 默认值 |
| -------- | ---------------------------------------------------------------------------------------------------- | ----------------------------- | ------ |
| onFinish | 默认表单最后一步提交成功触发，如果返回 true 或者 Promise.Resolved(true) 就会自动重置所有表单到初始值 | `(values: T) => Promise<any>` | -      |

### 自定义渲染属性

| 属性名           | 描述                                    | 类型                                                                                                                                                         | 默认值 |
| ---------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| renderChildren   | 重新渲染 LStepsForm 组件的所有 children | `(doms: { stepsDom: ReactNode; contentDom: ReactNode; submitterDom: ReactNode }, props: LStepsFormProps) => ReactNode`                                       | -      |
| renderLStepsForm | 重新渲染整个 LStepsForm                 | `(doms: { dom: ReactNode; stepsDom: ReactNode; contentDom: ReactNode; submitterDom: ReactNode }, props: LStepsFormProps) => ReactNode`                       | -      |
| contentClassName | 步骤内容区域的类名                      | [string](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts#L407-L407) | -      |
| contentStyle     | 步骤内容区域的样式                      | `React.CSSProperties`                                                                                                                                        | -      |

### Steps 组件相关属性

| 属性名     | 描述                  | 类型                                                  | 默认值 |
| ---------- | --------------------- | ----------------------------------------------------- | ------ |
| stepsProps | antd Steps 组件的属性 | `Omit<StepsProps, 'current' \| 'items' \| 'initial'>` | -      |

### 提交按钮配置 (submitter)

可以通过 `submitter` 属性配置步骤表单的提交按钮：

| 属性名            | 描述                                     | 类型                                                                                                                                                            | 默认值     |
| ----------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| position          | 按钮的排列方式                           | `'flex-start' \| 'center' \| 'flex-end'`                                                                                                                        | `'center'` |
| gap               | 按钮之间的间距                           | `number \| string`                                                                                                                                              | `8`        |
| prevText          | 上一步按钮的文字                         | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495) | `'上一步'` |
| nextText          | 下一步按钮的文字                         | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495) | `'下一步'` |
| submitText        | 提交按钮的文字                           | [string](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts#L407-L407)    | `'提交'`   |
| prevButtonProps   | 上一步按钮的 Props                       | `ButtonProps`                                                                                                                                                   | -          |
| nextButtonProps   | 下一步按钮的 Props                       | `ButtonProps`                                                                                                                                                   | -          |
| submitButtonProps | 提交按钮的 Props                         | `ButtonProps`                                                                                                                                                   | -          |
| onPrev            | 点击上一步按钮的回调                     | `(event?: FormEvent<HTMLFormElement>) => void`                                                                                                                  | -          |
| onNext            | 点击下一步按钮的回调                     | `(event?: FormEvent<HTMLFormElement>) => void`                                                                                                                  | -          |
| onSubmit          | 点击提交按钮的回调                       | `(event?: FormEvent<HTMLFormElement>) => void`                                                                                                                  | -          |
| showPrev          | 是否显示上一步按钮                       | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `true`     |
| showNext          | 是否显示下一步按钮                       | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `true`     |
| forceShowPrev     | 强制显示上一步按钮，优先级比 showPrev 高 | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -          |
| forceShowNext     | 强制显示下一步按钮，优先级比 showNext 高 | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -          |
| forceShowSubmit   | 强制显示提交按钮                         | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -          |
| renderSubmitter   | 自定义渲染提交按钮区域                   | `(doms: { prevDom: ReactNode; nextDom: ReactNode; submitDom: ReactNode }, props: StepsSubmitterProps) => ReactNode`                                             | -          |

### LStepsFormItem 属性

items 中每个步骤项的配置：

| 属性名          | 描述                      | 类型                                                                                                                                                            | 默认值 |
| --------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| formName        | 当前步骤收集的表单名      | [string](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts#L407-L407)    | -      |
| formItems       | 当前步骤的表单项          | `Array<ReactNode \| { name: string \| string[]; content: ReactNode }>`                                                                                          | -      |
| destroyOnHidden | 被隐藏时是否销毁 DOM 结构 | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -      |
| onFinish        | 当前步骤完成时的回调      | `(values: T) => Promise<any>`                                                                                                                                   | -      |

### ActionRef 方法

通过 actionRef 可以调用 LStepsForm 内部的方法：

| 方法名 | 描述                         | 类型                                  |
| ------ | ---------------------------- | ------------------------------------- |
| toStep | 跳转到指定步骤               | `(num: number) => void`               |
| toLast | 跳转到最后一步               | `() => void`                          |
| prev   | 上一步                       | `() => void`                          |
| next   | 下一步                       | `() => void`                          |
| submit | 提交表单                     | `(isFinallySubmit?: boolean) => void` |
| reset  | 重置所有表单项并跳到默认步骤 | `() => void`                          |
