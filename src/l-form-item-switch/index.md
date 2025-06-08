---
title: LFormItemSwitch
toc: content
nav:
  path: /components
---

# LFormItemSwitch

需要表示开关状态/两种状态之间的切换时

**特点**

- 支持背景颜色的设置

## 代码演示

### 基础用法

<code src='./demos/demo.tsx'></code>

## API

:::warning{title=注意}

- `LFormItemSwitch`表示`true` `false` 两种状态，一般不建议配置 `required`属性 , 如果有多个状态 请使用`单选框`或者`下拉框`
  :::

```ts
import { FormItemSwitch } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

|       参数        |       说明       |                            类型                             | 默认值 |
| :---------------: | :--------------: | :---------------------------------------------------------: | :----: |
|     checkedBg     | 打开时的背景颜色 |                          `string`                           |  `-`   |
|  checkedChildren  |   选中时的内容   |                         `ReactNode`                         |  `-`   |
|    unCheckedBg    | 关闭时的背景颜色 |                          `string`                           |  `-`   |
|    unCheckedBg    | 关闭时的背景颜色 |                          `string`                           |  `-`   |
| unCheckedChildren |  非选中时的内容  |                         `ReactNode`                         |  `-`   |
|    switchProps    | antd 开关的属性  | [SwitchProps](https://ant.design/components/switch-cn/#api) |  `-`   |
