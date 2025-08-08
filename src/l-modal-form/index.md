---
title: LModalForm
toc: content
nav:
  path: /components
---

# LModalForm

基于 `LForm` 扩展的弹窗高级表单。

## 代码演示

### 基础使用

<code src='./demos/Demo1.tsx'></code>

### 自定义底部按钮

<code src='./demos/Demo2.tsx'></code>

### 使用 open 受控方式

<code src='./demos/Demo3.tsx'></code>

### 可拖动的弹窗

<code src='./demos/Demo4.tsx'></code>

### 通过 Token 修改样式

`antd` 的版本要大于等于 `5.7.0`

<code src='./demos/Demo5.tsx'></code>

### 与 useShow 结合使用

<code src='./demos/Demo7.tsx'></code>

### 与 Nice Modal 结合使用

<code src='./demos/Demo6.tsx'></code>

## API

:::warning{title=注意}

- `LMoadlForm`的`children`属性必须包含配合`LFormItem`或`LFormItemXXX`或`Form.Item`，如果只是展示内容 (`例如表格 列表 详情`) 请使用`antd`的弹窗组件或[Nice Modal](https://github.com/eBay/nice-modal-react)

- `LMoadlForm` 的`底部操作栏`通过 `LForm` 的`submitter`属性配置

- 大多数情况你只需要配置` trigger` `(能接受 onClick 事件的组件) `，一旦配置了`trigger`属性就不在需要受控控制弹窗的显示

- 某些特殊情况你需要在关闭弹窗时调用`form.resetFields()`手动控制恢复到默认值 , 请将`isResetFields={false}`

- 关闭弹窗时默认不会销毁表单项内容 可通过`Modal`的`destroyOnClose`属性改变

- 设置 `destroyOnClose` 也不会在 `Modal` 关闭时销毁表单字段数据，需要设置 `<LModalForm preserve={false} />`。

:::

```ts
import { LModalForm } from 'lighting-design';
```

除了以下参数，其余和 [LForm](/components/form#api) 一样。

| 参数            | 说明                                                                                            | 类型                         | 默认值  |
| --------------- | ----------------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| draggableProps  | `Modal`能否拖动                                                                                 | `boolean\|DraggableProps`    | `false` |
| centered        | 垂直居中展示 Modal                                                                              | `boolean`                    | `false` |
| isResetFields   | 是否在关闭弹窗时重置表单到初始值                                                                | `boolean`                    | `true`  |
| destroyOnHidden | 关闭时是否销毁 Modal 的子元素                                                                   | `boolean`                    | `true`  |
| forceRender     | 是否预渲染`LMoadlForm`的内容                                                                    | `boolean`                    | `false` |
| title           | `Modal` 标题                                                                                    | `ReactNode`                  | `-`     |
| modalTop        | `Modal` 距离顶部的距离, 不要与 centered 同时配置                                                | `number \| string`           | `20vh`  |
| width           | `Modal` 宽度                                                                                    | `modalProps['width']`        | `600`   |
| afterClose      | Modal 完全关闭后的回调                                                                          | `modalProps['afterClose']`   | `-`     |
| trigger         | 用于触发 `Modal` 打开的 dom，一般是 `Button` 组件                                               | `ReactElement`               | `-`     |
| open            | 是否打开。<br/>设置后表示为 `受控组件`，可结合 `onOpenChange` 进行控制。                        | `boolean`                    | `-`     |
| onOpenChange    | `open` 改变时触发                                                                               | `(open: boolean) => void`    | `- `    |
| modalProps      | `Modal` 的 `props`，使用方式与 antd 相同。                                                      | [ModalProps]                 | `-`     |
| onFinish        | 提交数据时触发。<br>如果返回 `true` 或 `Promise.resolve(true)`会关闭弹框并且会自动管理`loading` | `async (values: any) => any` | `-`     |
| onCancel        | 点击内置的取消按钮或关闭按钮时触发                                                              | ` (e) => any`                | `-`     |
| afterOpen       | open 为 true 后的回调 , 一般在此设置 form 表单的回填值                                          | ` () => void`                | `-`     |

[ModalProps]: https://ant.design/components/modal-cn/#api
