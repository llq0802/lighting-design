---
title: LTagInput
toc: content
---

# LTagInput

高级标签输入框

- 不支持受控模式

## 代码演示

<code src='./demos/demo.tsx' ></code>

## API

```ts
import { LTagInput } from 'lighting-design';
```

| 参数名           | 类型                                                    | 默认值   | 描述                   |
| ---------------- | ------------------------------------------------------- | -------- | ---------------------- |
| defaultValue     | string                                                  | -        | 输入框的默认值         |
| onChange         | (val: string) => void                                   | -        | 值改变时的回调函数     |
| disabled         | boolean                                                 | -        | 是否禁用输入框         |
| placeholder      | string                                                  | "请输入" | 输入框占位符           |
| style            | React.CSSProperties                                     | -        | 外层容器的样式         |
| className        | string                                                  | -        | 外层容器的类名         |
| tagClassName     | string                                                  | -        | 标签元素的类名         |
| actionRef        | React.MutableRefObject<LTagInputActionRef \| undefined> | -        | 用于暴露组件方法的 ref |
| inputStyle       | React.CSSProperties                                     | -        | 输入框的样式           |
| inputClassName   | string                                                  | -        | 输入框的类名           |
| placeholderStyle | React.CSSProperties                                     | -        | 占位符的样式           |
| onEnter          | React.KeyboardEventHandler\<HTMLDivElement\>            | -        | 按下回车键时的回调函数 |
| prefix           | React.ReactNode                                         | -        | 输入框前缀内容         |
| suffix           | React.ReactNode                                         | -        | 输入框后缀内容         |
