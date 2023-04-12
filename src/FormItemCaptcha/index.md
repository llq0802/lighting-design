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

<code src='./demos/Demo1.tsx'></code>

## API

```ts
import { LFormItemCaptcha } from 'lighting-design';
```

> 当存在多个验证码输入框组件时, 请设置不同的 `cacheKey` 值

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

|         参数          |                                                               说明                                                               |                                      类型                                       |         默认值         |
| :-------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :--------------------: |
|         type          |                                                          验证码组件类型                                                          | `"link" \| "text" \| "inline" \| "ghost" \| "default" \| "primary" \| "dashed"` |      `'default'`       |
|       maxLength       |                                                          验证码最大长度                                                          |                                    `number`                                     |          `6`           |
|        second         |                                                            倒计时秒数                                                            |                                    `number`                                     |          `60`          |
|     disabledText      |                                                  倒计时的文字, 会带上 second 秒                                                  |                                    `string`                                     |        `重发 `         |
|       initText        |                                                           按钮初始文本                                                           |                                    `string`                                     |      `获取验证码`      |
|       cacheKey        |                                               组件缓存 key 值 刷新页面也会继续计时                                               |                                    `string`                                     | `__LFormItemCaptcha__` |
| autoFocusOnGetCaptcha |                                      `onGetCaptcha` 请求获取验证成功后，自动获取输入框焦点                                       |                                    `boolean`                                    |         `true`         |
|       autoClick       |                                                组件挂载完成后，自动触发点击按钮。                                                |                                    `boolean`                                    |        `false`         |
|      inputProps       |                                                        antd 输入框的属性                                                         |            [InputProps](https://ant.design/components/button-cn#api)            |          `-`           |
|      buttonProps      |                                                         antd 按钮的属性                                                          |           [ButtonProps](https://ant.design/components/input-cn/#api)            |          `-`           |
|         onEnd         |                                                         倒计时完成后触发                                                         |                                  `() => void`                                   |          `- `          |
|     onGetCaptcha      | 点击按钮触发并请求获取验证码。<br/>如果返回 `false` 或 `Promise.reject(false)` 表示验证失败或请求验证码失败。会自动管理`loading` |                         `() => boolean \| Promise<any>`                         |      `() => true`      |
