---
title: LFormItem
toc: content
nav:
  path: /components
---

# LFormItem

对 `Form.Item` 进一步的封装，简化代码，根据此组件可自定义任意表单项组件。

**特点**

- 完全兼容原`Form.Item`
- 支持组件前后插入元素
- 支持统一设置 `label` 的宽度
- 支持 `dependencies` 依赖项的值自动传入子组件的 `props`
- 支持自动获取 `placeholder`：`请输入${label}` 或者`请选择${label}`
- 支持必填项为空或空数组时校验并提示：`请输入${label}` 或者`请选择${label}`

## 代码演示

### 基础用法

<code src='./demos/demo.tsx'></code>

<!--
<code src='./demos/Demo2.tsx'></code>

### 隐藏必填项的\*

<code src='./demos/Demo5.tsx'></code>

### 使用 shouldUpdate 动态渲染

<code src='./demos/Demo1.tsx'></code>

### 使用 useWatch 动态渲染

<code src='./demos/Demo3.tsx'></code>

### 使用 dependencies 依赖更新

<code src='./demos/Demo4.tsx'></code>

### 兼容 Form.Item 的其他配置

<code src='./demos/Demo6.tsx'></code> -->

## API

:::warning{title=注意}

- `LFormItemXXX` 组件均是通过此组件二次封装 , 所以`LFormItemXXX`组件均支持以下的配置项

- `LFormItemXXX` `LFormItem` `Form.Item`必须作为`LForm`或`Form`的子项 , 不能单独使用 , 必须配合 `LForm` 或者 `From` 使用

- 如果要为组件设置初始值 你应该始终通过 `LFormItem` 的`initialValue`或者 `LForm` 的 `initialValues`属性来设置，而不是给子项设置 `defaultValue`

- 配置了`required`属性将开启内置验证是否为空数据或空数组 , 大多数情况不需要开发者传`rules`属性 ，如果业务验证有其他检验规则则传入 `rules`

- 配置了`dependencies` 属性, 在 `LFormItem`的子组件的 `props` 会接收到`dependencies`的值, 例如`dependencies={['age']}` 那么子组件的 `props` 中会包含`{ age:xxx, ...其他属性 }`

- `contentInline` 只在配置了 `contentBefore` 或 `contentAfter` 时生效 。如果想强制为行盒又不想展示前后内容，可配置 `contentAfter`为 `' '`

- `placeholder`默认为字符串类型的 `label` 且会在前面拼接`请输入`或 `请选择`，可通过传入 `placeholder` 进行覆盖

- 默认验证不通过后的提示为`placeholder`，可配置`messageVariables={{ label: '自定义提示' }}` 自定义修改验证不通过后的提示

- 使用`renderField` 需要返回一个组件，并且 `props` 中会接收到`id` `value` 与 `onChange`, 必须组件内手动绑定 `id` `value` 与 `onChange` 具体请看 [renderField 用法](/components/form-item#renderfield-用法)

:::

```ts
import { LFormItem } from 'lighting-design';
```

除了以下参数，其余和 [Form.Item](https://ant.design/components/form-cn#formitem) 一样。

### 基础属性

| 属性名          | 描述                                                                                   | 类型                                                                                                                                                            | 默认值 |
| --------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| labelWidth      | label 标签的宽度，如果 labelCol 存在，则 labelWidth 不生效                             | `number \| string`                                                                                                                                              | -      |
| wrapperWidth    | children 组件外层宽度，如果 wrapperCol 存在，则 wrapperWidth 不生效                    | `number \| string`                                                                                                                                              | -      |
| alignItems      | children 组件与 label 的对齐方式                                                       | `'center' \| 'flex-start' \| 'flex-end'`                                                                                                                        | -      |
| formItemBottom  | 设置表单项的 style.bottom 属性                                                         | `number \| string`                                                                                                                                              | -      |
| required        | 是否为必填字段，会生成默认的必填星号，默认会触发内置的表单校验规则                     | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | -      |
| customValidator | 自定义校验函数，验证通过时返回 Promise.resolve()，验证失败时返回 Promise.reject(error) | `(value: any, e: any) => Promise<any>`                                                                                                                          | -      |

### 内容扩展属性

| 属性名              | 描述                                                                               | 类型                                                                                                                                                            | 默认值 |
| ------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| contentBefore       | children 组件前面的内容                                                            | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495) | -      |
| contentAfter        | children 组件后面的内容                                                            | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495) | -      |
| contentWrapperProps | 当配置了 contentBefore 或 contentAfter 时，传给 children 组件的外层 div 的额外属性 | `React.HTMLAttributes<HTMLDivElement>`                                                                                                                          | -      |

### 自定义渲染属性

| 属性名         | 描述                                | 类型                                                         | 默认值 |
| -------------- | ----------------------------------- | ------------------------------------------------------------ | ------ |
| renderField    | 重新渲染 LFormItem 的 children 组件 | `(dom: ReactElement, props: LFormItemProps<T>) => ReactNode` | -      |
| renderFormItem | 重新渲染整个 LFormItem 组件         | `(dom: ReactElement) => ReactNode`                           | -      |

### Ant Design Form.Item 属性

LFormItem 继承了 Ant Design Form.Item 的所有属性，包括：

| 属性名       | 描述                                     | 类型                                                                                                                                                            | 默认值 |
| ------------ | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| name         | 字段名                                   | `string \| string[]`                                                                                                                                            | -      |
| label        | 标签名                                   | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495) | -      |
| rules        | 校验规则                                 | `Rule[]`                                                                                                                                                        | -      |
| dependencies | 设置依赖字段                             | `string[]`                                                                                                                                                      | -      |
| shouldUpdate | 自定义字段更新逻辑                       | `boolean \| ((prevValue, curValue) => boolean)`                                                                                                                 | -      |
| initialValue | 设置子元素默认值                         | [any](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L4185-L4185)     | -      |
| ...          | 其他所有 Ant Design Form.Item 支持的属性 | -                                                                                                                                                               | -      |
