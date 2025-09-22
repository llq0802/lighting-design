---
title: LFormItemCaptcha
toc: content
nav:
  path: /components
---

# LFormItemCaptcha

验证码输入框和按钮。

**特点**

- 支持内联验证码
- 按钮状态自动管理(`disabled loading`)
- 只有当获取验证码成功时才进行倒计时
- 刷新页面也会继续计时

## 代码演示

<code src='./demos/demo.tsx'></code>

## API

:::warning{title=注意}

- 当存在多个验证码输入框组件时, 请设置不同的 `cacheKey` 值

  :::

```ts
import { LFormItemCaptcha } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数               | 说明                                                 | 类型                            | 默认值                 |
| ------------------ | ---------------------------------------------------- | ------------------------------- | ---------------------- |
| type               | 验证码组件类型                                       | `ButtonProps['type'] \| inline` |
| maxLength          | 验证码最大长度                                       | `number`                        | `6`                    |
| second             | 倒计时秒数                                           | `number`                        | `60`                   |
| initText           | 按钮初始文本                                         | `string`                        | `获取验证码`           |
| cacheKey           | 组件缓存 key 值 刷新页面也会继续计时                 | `string`                        | `__LFormItemCaptcha__` |
| variant            | `InputProps['variant']`                              | `InputProps['variant']`         | `-`                    |
| disabled           | `InputProps['disabled']`                             | `InputProps['disabled']`        | `-`                    |
| size               | `InputProps['size']`                                 | `InputProps['size']`            | `-`                    |
| placeholder        | `InputProps['placeholder']`                          | `InputProps['placeholder']`     | `-`                    |
| onEnd              | 倒计时完成后触发                                     | `() => void`                    | `- `                   |
| request            | 异步请求函数, 返回 Promise.resove() 会自动触发倒计时 | `-`                             | `- `                   |
| requestOptions     | ahooks 的 useRequest 的配置项                        | `-`                             | `- `                   |
| captchaButtonProps | antd 按钮的属性                                      | `LCaptchaButtonProps`           | `-`                    |
| inputProps         | antd 输入框的属性                                    | `InputProps`                    | `-`                    |
