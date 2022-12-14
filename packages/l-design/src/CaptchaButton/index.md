---
title: LCaptchaButton
order: 2
nav:
  order: 2
  path: /components
---

# LCaptchaButton

处理获取验证码之类的组件, 刷新页面也会继续计时

<mark>当存在多个验证码组件时, 请设置不同的 cacheKey 值</mark>

## 代码演示

<code src='./demos/demo1.tsx'>

<!-- <API></API> -->

## API

|     Name     |          Description           |     Type     |       Default       |
| :----------: | :----------------------------: | :----------: | :-----------------: |
|    second    |           倒计时秒数           |   `number`   |        `10 `        |
| disabledText | 倒计时的文字, 会带上 second 秒 |   `string`   |       `重发 `       |
|   cacheKey   |        倒计时完成后触发        |   `string`   | `__CaptchaButton__` |
|    onEnd     |        倒计时完成后触发        | `() => void` |        `- `         |

> 继承 [ant Button](https://ant.design/components/button-cn/) 属性`(disabled 除外)`
