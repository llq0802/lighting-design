---
title: LDrawerForm
toc: content
nav:
  path: /components
---

# LDrawerForm

基于 LForm 扩展的高级抽屉表单。

## 代码演示

### 基础用法

<code src='./demos/Demo4.tsx'></code>

### 全屏抽屉

<code src='./demos/Demo6.tsx'></code>

### 使用 open 受控

<code src='./demos/Demo1.tsx'></code>

### 编辑回显

<code src='./demos/Demo3.tsx'></code>

### 自定义按钮

<code src='./demos/Demo2.tsx'></code>

### 渲染在当前 DOM

<code src='./demos/Demo5.tsx'></code>

## API

> - `LDrawerForm` 的确定丶取消 通过 `LForm` 的`submitter`属性配置
>
> - 大多数情况你只需要配置` trigger` `(能接受 onClick 事件的组件) `，一旦配置了`trigger`属性就不在需要受控控制弹窗的显示

```ts
import { LDrawerForm } from 'lighting-design';
```

除了以下参数，其余和 [LForm](/components/form#api) 一样。

| 参数          | 说明                                                                                                        | 类型                                                        | 默认值     |
| ------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------- |
| title         | `Drawer` 标题                                                                                               | `ReactNode`                                                 | `-`        |
| placement     | 抽屉的方向                                                                                                  | ` DrawerProps['placement']`                                 | `'right'`  |
| actionBarDir  | 抽屉默认操作栏位置 (只生效默认操作栏)                                                                       | `'footer' \| 'extra'`                                       | `'footer'` |
| isResetFields | 是否在关闭抽屉时重置表单到初始值                                                                            | `boolean`                                                   | `true`     |
| forceRender   | 是否预渲染`LDrawerForm`的内容                                                                               | `boolean`                                                   | `false`    |
| width         | `Drawer` 宽度                                                                                               | `number \| string`                                          | `600`      |
| trigger       | 用于触发 `Drawer` 打开的 dom，一般是 Button 组件                                                            | `ReactElement`                                              | `-`        |
| open          | 是否打开。<br/>设置后表示为 `受控组件`，可结合 `onOpenChange` 进行控制。                                    | `boolean`                                                   | `-`        |
| onOpenChange  | `open` 改变时触发                                                                                           | `(open: boolean) => void`                                   | `-`        |
| drawerProps   | `Drawer` 的 `props`，使用方式与 antd 相同。                                                                 | [DrawerProps](https://ant.design/components/drawer-cn/#api) | `-`        |
| onFinish      | 提交数据时触发。如果返回 `true` 或 `Promise.resolve(true)` 表示提交成功，会关闭弹框并且会自动管理 `loading` | `async (values: any) => any`                                | `-`        |
