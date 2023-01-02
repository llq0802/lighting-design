---
title: LFormItem
order: 2
nav:
  order: 2
  path: /components
---

# LFormItem

对 Form.Item 进一步的封装, 简化代码, 根据此组件可自定义任意表单项组件

**特点**

- 支持组件前后插入元素
- 支持 `dependencies` 依赖项的值自动传入子组件的 `props`

## 代码演示

<!-- <code src='./demos/Demo1.tsx'> -->
<code src='./demos/Demo2.tsx'>

## API

除了以下参数，其余和 [Form.Item](https://4x.ant.design/components/form-cn/#Form.Item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 组件最外层容器类名 | `string` | `-` |
| renderField | 重新渲染 FormItem 组件 | `(dom: ReactElement) => ReactElement` | `-` |
| contentBefore | 组件前面的内容 | `ReactNode` | `-` |
| contentAfter | 组件后面的内容 | `ReactNode` | `-` |
| contentProps | 传给 `children` 的额外属性 | `Record<string,any>` | `-` |
| contentInline | `children` 外层的 div 是否为 `inline` , 即不占满整个 div | `boolean` | `false` |
| alignItems | 当配置了 `contentBefore` 或者 `contentAfter` 时组件垂直的对齐方式 | `center \| start \| end` | `center` |
| disabled | 是否禁用组件<br>如果自定义组件 则需要开发者自己控制内部`children`的禁用 | `boolean` | `false` |
| placeholder | 组件的 placeholder<br>如果自定义组件 则需要开发者自己控制内部`children`的 placeholder | `string\|string[]` | `-` |
