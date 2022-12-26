---
title: LFormItem
order: 2
nav:
  order: 2
  path: /components
---

# LFormItem

对 Form.Item 进一步的封装, 简化代码, 根据此组件可自定义任意表单项组件

## 代码演示

<!-- <code src='./demos/Demo1.tsx'> -->
<code src='./demos/Demo2.tsx'>

## API

除了以下参数，其余和 [Form.Item](https://4x.ant.design/components/form-cn/#Form.Item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| renderField | 重新渲染 FormItem 组件 | `(dom: ReactElement) => ReactElement` | `-` |
| contentBefore | 组件前面的内容 | `ReactNode` | - |
| contentAfter | 组件后面的内容 | `ReactNode` | `-` |
| alignItems | 当配置了 `contentBefore` 或者 `contentAfter` 时组件垂直的对齐方式 | `center \| start \| end` | `center` |
| className | 组件最外层容器类名 | `string` | - |
| contentProps | 传给 `children` 的额外属性 | `Record<string,any>` | - |
| disabled | 是否禁用组件<br>如果自定义组件 则需要开发者自己控制内部`children`的禁用 | `boolean` | `false` |
| placeholder | 组件的 placeholder<br>如果自定义组件 则需要开发者自己控制内部`children`的 placeholder | `string` | `-` |
