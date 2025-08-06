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

| 参数             | 说明                                                                                                                                                                                                                                          | 类型                                    | 默认值            |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------------- |
| items            | 表单项配置                                                                                                                                                                                                                                    | `ItemsProps`                            | `-`               |
| contentClassName | 表单项容器的类名                                                                                                                                                                                                                              | `string`                                | `-`               |
| contentStyle     | 表单项层容器的样式                                                                                                                                                                                                                            | `CSSProperties`                         | `-`               |
| defaultCurrent   | 默认步骤                                                                                                                                                                                                                                      | `number`                                | `0`               |
| current          | 设置后变为受控模式。当前表单的步骤数。                                                                                                                                                                                                        | `number`                                | `-`               |
| destroyOnHidden  | 被隐藏时是否销毁 DOM 结构                                                                                                                                                                                                                     | `boolean`                               | `false`           |
| forceRender      | 初始化时强制渲染所有                                                                                                                                                                                                                          | `boolean`                               | `false`           |
| isMergeValues    | 是否将每个表单的值合并后再传入到 `onFinish`的参数中                                                                                                                                                                                           | `boolean`                               | `true`            |
| submitStepNum    | 在哪一步为最后的提交操作 , 用于触发 `onFinish` 默认为表单最后一步                                                                                                                                                                             | `number`                                | `children.length` |
| isReady          | 为 `false` 时，禁止上一步、下一步、提交操作。                                                                                                                                                                                                 | `boolean`                               | `true`            |
| stepsProps       | `antd Steps` 的属性，去掉了 `current` 和 `onChange`                                                                                                                                                                                           | [StepsProps]                            | `-`               |
| submitter        | 上一步、下一步、提交按钮的配置 为`false`不渲染                                                                                                                                                                                                | `false \| LStepsFormSubmitterProps`     | `-`               |
| actionRef        | 常用操作引用，便于自定义触发                                                                                                                                                                                                                  | `MutableRefObject<LStepsFormActionRef>` | `-`               |
| onCurrentChange  | current 发生改变的事件                                                                                                                                                                                                                        | `(current:number) => void`              | `-`               |
| onFinish         | 全部表单提交成功后调用 , 默认只在最后一步提交之后触发 , 如果配置`submitStepNum`则以在`submitStepNum`步骤时触发. <br>返回`true`或`Promise.resolve(true)`并且`isResetFields`为`true`会重置所有表单 步骤也会回到初始值 , 并且会自动管理`loading` | `async(values) => any`                  | `-`               |
| renderChildren   | 自定义步骤器                                                                                                                                                                                                                                  | `RenderChildren`                        | `-`               |
| renderLStepsForm | 自定义步骤器                                                                                                                                                                                                                                  | `RenderLStepsForm`                      | `-`               |

### ItemProps

```TS
type ItemProps = (StepProps & {
    /**当前步骤收集的表单名 */
    formName: string;
    formItems: (
      | ReactNode
      | {
          /**
           * 当 content 的最外层不是 LFormXXX 或者 Form.Item 时, name 为数组
           * @example
           * name: ['name1', 'name2'] // 每一项的值为 content 中 Form.Item 时, LFormXXX 或者 Form.Item 的 name 数组的第二项
           *
           *
           */
          name: string | string[];
          /**
           * 当 content 的最外层不是 LFormXXX 或者 Form.Item 时, LFormXXX 或者 Form.Item 的 name 为数组
           * @example
           *  name: [formName, 'xxx'] // 第一项必须为 formName
           */
          content: ReactNode;
        }
    )[];
    destroyOnHidden?: boolean;
    onFinish?: (valuse: T) => Promise<any>;
  })[]

```

### LStepsFormSubmitterProps

```ts
interface LStepsFormSubmitterProps {
  className?: string;
  style?: React.CSSProperties;
  isReady?: boolean;
  /**
   * 在第几步触发提交
   * - 默认最后一步触发
   */
  submitStepNum?: number;
  position?: 'flex-start' | 'center' | 'flex-end';
  gap?: number | string;
  loading?: boolean;
  disabled?: boolean;
  /** 上一步按钮的文字 */
  prevText?: ReactNode;
  /** 点击上一步按钮的回调 */
  onPrev?: (event?: FormEvent<HTMLFormElement>) => void;
  /** 点击上一步按钮的Props*/
  prevButtonProps?: ButtonProps;
  /** 是否显示上一步按钮 */
  showPrev?: boolean;
  /** 下一步按钮的文字 */
  nextText?: ReactNode;
  /** 点击下一步按钮的回调 */
  onNext?: (event?: FormEvent<HTMLFormElement>) => void;
  /** 点击下一步按钮的Props*/
  nextButtonProps?: ButtonProps;
  submitButtonProps?: ButtonProps;
  /** 是否显示下一步按钮 */
  showNext?: boolean;
  /** 点击提交按钮的回调 */
  onSubmit?: (event?: FormEvent<HTMLFormElement>) => void;
  /** 强制显示上一步按钮，优先级比 showPrev 高 */
  forceShowPrev?: boolean;
  /** 强制显示下一步按钮，优先级比 showNext 高 */
  forceShowNext?: boolean;
  /** 强制显示提交按钮 */
  forceShowSubmit?: boolean;
  submitText?: string;
  /** 自定义渲染 */
  renderSubmitter?: (
    doms: {
      prevDom: ReactNode;
      nextDom: ReactNode;
      submitDom: ReactNode;
    },
    props: StepsSubmitterProps,
  ) => ReactNode;
}
```

### LStepsFormActionRef

```typescript
interface LStepsFormActionRef {
  /** 到指定步骤 */
  toStep: (num: number) => void;
  /**跳到最后一步 */
  toLast: () => void;
  /** 上一步 */
  prev: () => void;
  /** 下一步 */
  next: () => void;
  /** 提交 */
  submit: (isFinallySubmit?: boolean) => void;
  /** 重置所有表单项并跳到默认步骤 */
  reset: () => void;
}
```

### RenderChildren

```TS

type RenderChildren = (
    doms: {
      stepsDom: ReactNode;
      contentDom: ReactNode;
      submitterDom: ReactNode;
    },
    props: LStepsFormProps,
  ) => ReactNode

```

### RenderLStepsForm

```TS

type RenderChildren =(
    doms: {
      dom: ReactNode;
      stepsDom: ReactNode;
      contentDom: ReactNode;
      submitterDom: ReactNode;
    },
    props: LStepsFormProps,
  ) => ReactNode;


```

[StepsProps.Items]: https://ant.design/components/steps-cn/#api
[StepsProps]: https://ant.design/components/steps-cn/#api
[ButtonProps]: https://ant.design/components/button-cn/#api
