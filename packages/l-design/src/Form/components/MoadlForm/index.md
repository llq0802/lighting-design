---
title: LMoadlForm
order: 2
nav:
  order: 2
  path: /components
---

# LMoadlForm

基于 LForm 扩展的弹窗表单。

## 代码演示

<code src='./demos/Demo1.tsx'>

## API

除了以下参数，其余和 [LForm](/components/form#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| isDraggable | `Modal`能否拖动 | `boolean` | `false` |
| title | `Modal` 标题 | `ReactNode` | - |
| width | `Modal` 宽度 | `number \| string` | `600` |
| trigger | 用于触发 `Modal` 打开的 dom，一般是 Button 组件 | `ReactElement` | - |
| open | 是否打开。<br/>设置后表示为 `受控组件`，可结合 `onOpenChange` 进行控制。 | `boolean` | - |
| onOpenChange | `open` 改变时触发 | `(open: boolean) => void` | - |
| modalProps | `Modal` 的 `props`，使用方式与 antd 相同。 | [ModalProps](https://ant.design/components/modal-cn/#API) | - |
| onFinish | 提交数据时触发。如果返回 `true` 或 `Promise.resolve(true)` 表示提交成功，会关掉弹框。 | `async (values: any) => any` | - |

<mark>
LMoadlForm 的提交丶取消 通过 LForm 的`submitter`属性配置
</mark>
