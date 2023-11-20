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

<code src='./demos/Demo2.tsx'></code>

### 隐藏必填项的\*

<code src='./demos/Demo5.tsx'></code>

### 使用 shouldUpdate 动态渲染

<code src='./demos/Demo1.tsx'></code>

### 使用 useWatch 动态渲染

<code src='./demos/Demo3.tsx'></code>

### 使用 dependencies 依赖更新

<code src='./demos/Demo4.tsx'></code>

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

| 参数              | 说明                                                                                                                                   | 类型                                                         | 默认值     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------- |
| labelWidth        | label 宽度 , 同 `labelCol={{ flex: 'xxx px' }}` 默认继承 `LForm`的 `labelWidth` 如果配置则以当前配置为准                               | `number \| 'auto'`                                           | `-`        |
| className         | 整个组件最外层容器类名                                                                                                                 | `string`                                                     | `-`        |
| style             | 整个组件最外层容器样式                                                                                                                 | `CSSProperties`                                              | `-`        |
| contentClassName  | 被包裹组件的最外层容器类名 , 配置 `contentAfter` 或者 `contentBefore` 生效                                                             | `string`                                                     | `-`        |
| contentBefore     | 组件前面的内容                                                                                                                         | `ReactNode`                                                  | `-`        |
| contentAfter      | 组件后面的内容                                                                                                                         | `ReactNode`                                                  | `-`        |
| contentProps      | 传给 `children` 的额外属性                                                                                                             | `Record<string,any>`                                         | `-`        |
| contentInline     | `children` 外层的 div 是否为 `inline`行盒，<br> 为`false`占满 div ，为`true`不占满整个 div                                             | `boolean`                                                    | `false`    |
| contentAlignItems | 当配置了 `contentBefore` 或者 `contentAfter` 时组件原本子项内容`(label 的右边)`与 `contentBefore` 或者 `contentAfter` 与垂直的对齐方式 | `'center' \| 'start' \| 'end'`                               | `'center'` |
| wrapperAlignItems | 当配置了 `label` 时组件左边的 `label` 与右边整体的内容区域 `( 如果配置了 contentBefore 或者 contentAfter 则包含它们 )` 的垂直对齐方式  | `'center' \| 'start' \| 'end'`                               | `'start'`  |
| ownColSpans       | 只在作为`LQueryForm`组件的子项生效，与`antd.Col`组件的配置一样，配置单独这一项占多数份                                                 | [ColProps](https://ant.design/components/grid-cn/#col)       | `-`        |
| disabled          | 是否禁用组件, 所有的内置`LFormItemXXX`组件均支持<br>如果自定义组件则需要开发者自己控制内部`children`的禁用                             | `boolean`                                                    | `false`    |
| size              | 组件大小, 所有的内置`LFormItemXXX`组件均支持<br>如果自定义组件则需要开发者自己控制内部`children`的大小                                 | `'large' \| 'middle' \| 'small'`                             | `-`        |
| placeholder       | 组件的 placeholder<br>自定义组件则需要开发者自己控制内部`children`的 placeholder                                                       | `string\|string[]`                                           | `-`        |
| renderField       | 重新渲染 `LFormItem` 的子组件                                                                                                          | `(dom: ReactElement, props: LFormItemProps) => ReactElement` | `-`        |
| renderFormItem    | 重新渲染整个 `LFormItem` 组件                                                                                                          | `(dom: ReactElement) => ReactElement`                        | `-`        |

### renderField 用法

```ts
import { Popover, Space } from 'antd';

//使用renderField自定义antd的数据输入类型的组件
<LFormItem
  label="自定义渲染"
  name="customField1"
  renderField={(dom) => {
    // 这儿的dom为LFormItem组件的children 也就是Input组件
    // 这儿的 props 为组件内部注册 需要手动调用 value和onChange id
    const CustomField = (props: {
      value: any;
      onChange: (val: any) => void;
      id: string;
      [key: string]: any;
    }) => {
      return <Space>通过 renderField 渲染 :{React.cloneElement(dom, props)}</Space>;
    };
    return <CustomField />;
  }}
>
  <Input placeholder="自定义渲染" />
</LFormItem>;

//使用renderField自定义 LFormItemXXX 组件
<LFormItemPassword
  required
  validateTrigger="onChange"
  label="自定义渲染"
  name="with-popover6"
  tooltip="该方案所有 LFormItemXXX 表单项"
  renderField={(dom) => {
    const MyField = (props) => {
      return (
        <Popover
          trigger="focus"
          getPopupContainer={(e) => (e?.parentNode || document.body) as HTMLElement}
          // ...其他 Popover 的属性
        >
          {React.cloneElement(dom, props)}
        </Popover>
      );
    };
    return <MyField />;
  }}
/>;
```
