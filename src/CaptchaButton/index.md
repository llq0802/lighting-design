---
title: LCaptchaButton
toc: content
---

# LCaptchaButton

处理获取验证码之类的组件, 刷新页面也会继续计时

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 修改文字

<code src='./demos/Demo3.tsx'></code>

### 3s 后再倒计时

<code src='./demos/Demo2.tsx'></code>

<!-- <code src='./demos/Demo4.tsx'></code> -->

## API

> - 当存在多个验证码组件时, 请设置不同的 `cacheKey` 值

```ts
import { LCaptchaButton } from 'lighting-design';
```

继承 [antd Button](https://ant.design/components/button-cn/) 属性`(disabled 除外)`

|     参数     |                说明                |     类型     |        默认值         |
| :----------: | :--------------------------------: | :----------: | :-------------------: |
|    start     |            是否开始发送            |  `boolean`   |        `true`         |
|    second    |             倒计时秒数             |   `number`   |         `60 `         |
| disabledText |   倒计时的文字, 会带上 second 秒   |   `string`   |       `'重发'`        |
|   cacheKey   | 缓存的 key、页面刷新后倒计时继续。 |   `string`   | `'__CaptchaButton__'` |
|    onEnd     |          倒计时完成后触发          | `() => void` |         `- `          |
