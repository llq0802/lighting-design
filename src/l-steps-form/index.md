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

<code src='./demos/Demo2.tsx'></code>

### 竖直模式

<code src='./demos/Demo11.tsx'></code>

### 修改竖直高度

<code src='./demos/Demo12.tsx'></code>

### 受控模式

<code src='./demos/Demo10.tsx'></code>

### 被隐藏时销毁 DOM 结构

<code src='./demos/Demo9.tsx'></code>

### 与 Modal 配合使用

<code src='./demos/Demo1.tsx'></code>

### 与 Drawer 配合使用

<code src='./demos/Demo7.tsx'></code>

### 中间步骤提交

<code src='./demos/Demo3.tsx'></code>

### 当 LStepsForm.StepForm 的子组件控件的 name 不为数组时的编辑回显

<code src='./demos/Demo4.tsx'></code>

### 当 LStepsForm.StepForm 的子组件控件的 name 为数组时的编辑回显

<code src='./demos/Demo5.tsx'></code>

### 不合并每个表单的值

<code src='./demos/Demo6.tsx'></code>

### 提交成功后手动重置

<code src='./demos/Demo8.tsx'></code>

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

| 参数                  | 说明                                                                                                                                                                                                                                          | 类型                                                                              | 默认值            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------- |
| direction             | 组件排列模式                                                                                                                                                                                                                                  | `'horizontal' \| 'vertical'`                                                      | `'horizontal'`    |
| className             | 组件最外层容器类名                                                                                                                                                                                                                            | `string`                                                                          | `-`               |
| stepsWrapperClassName | `Steps` 组件最外层容器类名                                                                                                                                                                                                                    | `string`                                                                          | `-`               |
| contentClassName      | 表单外层容器的类名                                                                                                                                                                                                                            | `string`                                                                          | `-`               |
| style                 | 组件最外层容器样式                                                                                                                                                                                                                            | `CSSProperties`                                                                   | `-`               |
| stepsWrapperStyle     | `Steps` 组件最外层容器样式                                                                                                                                                                                                                    | `CSSProperties`                                                                   | `-`               |
| contentStyle          | 表单外层容器的样式                                                                                                                                                                                                                            | `CSSProperties`                                                                   | `-`               |
| defaultCurrent        | 默认步骤                                                                                                                                                                                                                                      | `number`                                                                          | `0`               |
| current               | 设置后变为受控模式。当前表单的步骤数。                                                                                                                                                                                                        | `number`                                                                          | `-`               |
| isAntdReset           | 内部的重置是否使用 `form.resetFields() true `时会每次重置就会重新挂挂载子组件                                                                                                                                                                 | `boolean`                                                                         | `false`           |
| isResetFields         | `onFinish`返回`true`或`Promise.resolve(true)`时是否可以重置所有表单到初始值和步骤初始值                                                                                                                                                       | `boolean`                                                                         | `true`            |
| current               | 设置后变为受控模式。当前表单的步骤数。                                                                                                                                                                                                        | `number`                                                                          | `-`               |
| destroyStepForm       | 被隐藏时是否销毁 DOM 结构                                                                                                                                                                                                                     | `boolean`                                                                         | `false`           |
| isMergeValues         | 是否将每个表单的值合并后再传入到 `onFinish`的参数中                                                                                                                                                                                           | `boolean`                                                                         | `true`            |
| submitStepNum         | 在哪一步为最后的提交操作 , 用于触发 `onFinish` 默认为表单最后一步                                                                                                                                                                             | `number`                                                                          | `children.length` |
| isReady               | 为 `false` 时，禁止上一步、下一步、提交操作。                                                                                                                                                                                                 | `boolean`                                                                         | `true`            |
| stepsProps            | `antd Steps` 的属性，去掉了 `current` 和 `onChange`                                                                                                                                                                                           | [StepsProps]                                                                      | `-`               |
| formProps             | `LForm` 的属性，除了没有 `onReset` 和 `submitter` `isReady`                                                                                                                                                                                   | [LFormProps](/components/form)                                                    | `-`               |
| submitter             | 上一步、下一步、提交按钮的配置 为`false`不渲染                                                                                                                                                                                                | `false \| LStepsFormSubmitterProps`                                               | `-`               |
| actionRef             | 常用操作引用，便于自定义触发                                                                                                                                                                                                                  | `MutableRefObject<LStepsFormActionRef>`                                           | `-`               |
| onCurrentChange       | current 发生改变的事件                                                                                                                                                                                                                        | `(current:number) => void`                                                        | `-`               |
| onFinish              | 全部表单提交成功后调用 , 默认只在最后一步提交之后触发 , 如果配置`submitStepNum`则以在`submitStepNum`步骤时触发. <br>返回`true`或`Promise.resolve(true)`并且`isResetFields`为`true`会重置所有表单 步骤也会回到初始值 , 并且会自动管理`loading` | `async(values) => any`                                                            | `-`               |
| stepsRender           | 自定义步骤器                                                                                                                                                                                                                                  | `(stepsDom: ReactNode,items: StepsProps['item']) => ReactNode`                    | `-`               |
| stepFormRender        | 自定义每个表单                                                                                                                                                                                                                                | `(formDom: ReactNode,index:number) => ReactNode`                                  | `-`               |
| stepsFormRender       | 自定义整个组件                                                                                                                                                                                                                                | `(stepsDom: ReactNode, formDom: ReactNode, submitterDom: ReactNode) => ReactNode` | `-`               |

### LStepsForm.StepForm

基于 LForm 扩展的表单，没有 `onReset` `isReady` `isAntdReset`， `submitter`不与`LForm`的相同 除了以下参数，其余和 [LForm](/components/form) 一样。

| 参数          | 说明                                                                                                                                                   | 类型                               | 默认值 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ------ |
| title         | 步骤条标题                                                                                                                                             | `ReactNode`                        | `-`    |
| subTitle      | 步骤条子标题，可选                                                                                                                                     | `ReactNode`                        | `-`    |
| icon          | 步骤图标的类型，可选                                                                                                                                   | `ReactNode`                        | `-`    |
| description   | 步骤的详情描述，可选                                                                                                                                   | `ReactNode`                        | `-`    |
| stepItemProps | 步骤条内的当前步骤配置。与 `antd Steps`的`items`属性相同                                                                                               | [StepsProps.Items]                 | `-`    |
| submitter     | 上一步、下一步、提交按钮的配置。会与 LStepsForm 的 submitter 合并，优先级更高。 为`false`不渲染                                                        | `false \|LStepsFormSubmitterProps` | `-`    |
| onFinish      | `(最后一步表单项一般不配置)`当前表单提交成功后调用, 只要不返回`false`或者`Promise.resolve(false)`就会触发下一步或者最后一步的提交并且自动管理`loading` | `async(values) => any`             | `-`    |

### LStepsFormSubmitterProps

| 参数              | 说明                                                                                | 类型                                                        | 默认值   |
| ----------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------- |
| onPrev            | 点击上一步按钮的回调                                                                | `() => void`                                                | `-`      |
| prevText          | 上一步按钮文本                                                                      | `ReactNode`                                                 | `上一步` |
| prevButtonProps   | 上一步按钮属性，和 antd [Button](https://ant.design/components/button-cn/#api) 一致 | [ButtonProps](https://ant.design/components/button-cn/#api) | `-`      |
| showPrev          | 是否显示上一步按钮                                                                  | `boolean`                                                   | `true`   |
| forceShowPrev     | 强制显示上一步按钮，优先级比 `showPrev` 高                                          | `boolean`                                                   | `false`  |
| onNext            | 点击下一步按钮的回调                                                                | `() => void`                                                | `-`      |
| nextText          | 下一步按钮文本                                                                      | `ReactNode`                                                 | `下一步` |
| nextButtonProps   | 提交按钮属性，和 antd [Button](https://ant.design/components/button-cn/#api) 一致   | [ButtonProps](https://ant.design/components/button-cn/#api) | -        |
| showNext          | 是否显示下一步按钮                                                                  | `boolean`                                                   | `true`   |
| forceShowNext     | 强制显示下一步按钮，优先级比 `showNext` 高                                          | `boolean`                                                   | `false`  |
| onSubmit          | 点击提交按钮的回调                                                                  | `() => void`                                                | -        |
| submitText        | 提交按钮文本                                                                        | `ReactNode`                                                 | `确定`   |
| submitButtonProps | 提交按钮属性，和 antd [Button](https://ant.design/components/button-cn/#api) 一致   | [ButtonProps](https://ant.design/components/button-cn/#api) | -        |
| forceShowSubmit   | 强制显示提交按钮                                                                    | `boolean`                                                   | `false`  |
| wrapperCol        | 效果和[ Form 的 wrapperCol](https://ant.design/components/form-cn/#api)一致         | `ColProps`                                                  | `-`      |
| buttonAlign       | 按钮位置 , 为`number`类型时与`LForm`的`labelWidth`效果一致                          | `'left' \| 'right' \| 'center'\| number`                    | `-`      |
| render            | 自定义操作的渲染                                                                    | ` (dom:ReactElement[],props) => ReactNode[] \| false`       | `-`      |

### LStepsFormActionRef

```typescript
interface LStepsFormActionRef {
  // 所有表单的原始值 (只有每个当前表单校验通过并且LStepsForm.StepForm的onFinish方法不返回false才会收集到 )
  allFormValues: Record<string, any>;
  // 所有表单实例数组 序号与当前步骤一致
  formInstanceList: FormImstance<any>[];
  // 返回上一步
  prev: () => void;
  // 跳转下一步，当submitted为true时，触发当前表单校验，校验成功则跳转下一步；当submitted为false时，不触发当前表单校验直接进入下一步。默认submitted为false
  next: (submitted?: boolean) => void;
  // 跳到指定步骤
  toStep: (step: number) => void;
  // isFinallySubmit为false触发当前表单校验onFinish方法，isFinallySubmit为true提交所有表单值触发LStepsForm的onFinish方法
  // 默认isFinallySubmit为true
  submit: (isFinallySubmit?: boolean) => void;
  // isReady为true时生效，重置所有表单和值，将步骤恢复初始步骤
  reset: () => void;
}
```

[StepsProps.Items]: https://ant.design/components/steps-cn/#api
[StepsProps]: https://ant.design/components/steps-cn/#api
