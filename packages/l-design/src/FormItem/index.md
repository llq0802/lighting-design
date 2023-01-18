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
- 支持统一设置 `label` 的宽度
- 支持 `dependencies` 依赖项的值自动传入子组件的 `props`
- 支持必填为空时提示：`请输入${label}` 或者`请选择${label}`
- 内置 `placeholder`：`请输入${label}` 或者`请选择${label}`

## 代码演示

### 基础用法

<code src='./demos/Demo2.tsx'>

### 使用 shouldUpdate 动态渲染

<code src='./demos/Demo1.tsx'>

### 使用 useWatch 动态渲染

<code src='./demos/Demo3.tsx'>

### 使用 dependencies 依赖更新

<code src='./demos/Demo4.tsx'>

## API

> LFormItemXXX 组件均是通过此组件封装

除了以下参数，其余和 [Form.Item](https://4x.ant.design/components/form-cn/#Form.Item) 一样。

<mark>配置了`required`属性将开启内置验证是否为空数据 , 不需要开发者传`rules`属性 , 如果业务验证有其他检验规则则传入 `rules` </mark>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| labelWidth | label 宽度 默认继承 `LForm`的 `labelWidth` 如果配置则以当前配置为准 | `number \| 'auto'` | `-` |
| className | 整个组件最外层容器类名 | `string` | `-` |
| style | 整个组件最外层容器样式 | `CSSProperties` | `-` |
| contentClassName | 被包裹组件的最外层容器类名 , 配置 `contentAfter` 或者 `contentBefore` 生效 | `string` | `-` |
| contentBefore | 组件前面的内容 | `ReactNode` | `-` |
| contentAfter | 组件后面的内容 | `ReactNode` | `-` |
| contentProps | 传给 `children` 的额外属性 | `Record<string,any>` | `-` |
| contentInline | `children` 外层的 div 是否为 `inline`行盒 . 为`false`占满 div , 为`true`不占满整个 div | `boolean` | `false` |
| alignItems | 当配置了 `contentBefore` 或者 `contentAfter` 时组件垂直的对齐方式 | `'center' \| 'start' \| 'end'` | `'center'` |
| disabled | 是否禁用组件<br>如果自定义组件 则需要开发者自己控制内部`children`的禁用 | `boolean` | `false` |
| placeholder | 组件的 placeholder<br>如果自定义组件 则需要开发者自己控制内部`children`的 placeholder | `string\|string[]` |
| renderField | 重新渲染 `FormItem` 的子组件 | `(dom: ReactElement, props: LFormItemProps) => ReactElement` | `-` |
