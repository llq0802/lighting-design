---
title: LDrawerForm
order: 2
nav:
  order: 2
  path: /components
---

# LDrawerForm

基于 LForm 扩展的抽屉表单。

## 代码演示

## 基础用法

<code src='./demos/Demo4.tsx'>

## 使用 open 受控

<code src='./demos/Demo1.tsx'>

## 编辑

<code src='./demos/Demo3.tsx'>

## 自定义按钮

<code src='./demos/Demo2.tsx'>

## 渲染在当前 DOM

<code src='./demos/Demo5.tsx'>

## API

除了以下参数，其余和 [LForm](/components/form#api) 一样。

<mark>`LDrawerForm` 的确定丶取消 通过 `LForm` 的`submitter`属性配置</mark>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | `Drawer` 标题 | `ReactNode` | `-` |
| placement | 抽屉的方向 | ` DrawerProps['placement']` | `'right'` |
| actionBarDir | 抽屉默认操作栏位置 (只生效默认操作栏) | `'footer' \| 'extra'` | `'footer'` |
| isResetFields | 是否在关闭弹窗时重置表单到初始值 `会重新挂载子组件,子组件的异步请求会重新执行)`<br/>如果子组件有 `request` 请求属性 , 请将 `isResetFields` 设置为`false`并在关闭弹窗时手动调用`form.setFieldsValue()`将其重置 | `boolean` | `true` |
| forceRender | 是否预渲染`LDrawerForm`的内容 | `boolean` | `false` |
| width | `Drawer` 宽度 | `number \| string` | `600` |
| trigger | 用于触发 `Drawer` 打开的 dom，一般是 Button 组件 | `ReactElement` | `-` |
| open | 是否打开。<br/>设置后表示为 `受控组件`，可结合 `onOpenChange` 进行控制。 | `boolean` | `-` |
| onOpenChange | `open` 改变时触发 | `(open: boolean) => void` | `-` |
| drawerProps | `Drawer` 的 `props`，使用方式与 antd 相同。 | [DrawerProps](https://4x.ant.design/components/drawer-cn/#API) | `-` |
| onFinish | 提交数据时触发。如果返回 `true` 或 `Promise.resolve(true)` 表示提交成功，会关闭弹框并且会自动管理 `loading` | `async (values: any) => any` | `-` |
