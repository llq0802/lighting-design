---
title: LEditTable
toc: content
---

# LEditTable

基于 `LTable` 封装的高级编辑表格

## 代码演示

### 基础用法

<code src='./demos/Demo2.tsx'  background="#f5f5f5"></code>

## API

:::warning{title=注意}

- 当存在多个验证码组件时, 请设置不同的 `cacheKey` 值

- 如果在要在表单中使用验证码 , 推荐使用 [LFormItemCaptcha](/components/form-item-captcha)

  :::

```ts
import { LEditTable } from 'lighting-design';
```

继承 [antd Button](https://ant.design/components/button-cn/) 属性`(disabled 除外)`

|     参数     |                说明                |                         类型                         |        默认值         |
| :----------: | :--------------------------------: | :--------------------------------------------------: | :-------------------: |
|    start     |            是否开始发送            |                      `boolean`                       |        `true`         |
|    second    |             倒计时秒数             |                       `number`                       |         `60 `         |
| disabledText |   倒计时的文字, 会带上 second 秒   |                       `string`                       |       `'重发'`        |
|   cacheKey   | 缓存的 key、页面刷新后倒计时继续。 |                       `string`                       | `'__CaptchaButton__'` |
|    onEnd     |          倒计时完成后触发          |                     `() => void`                     |         `- `          |
|  cancelRef   |         用于取消重置倒计时         | `React.MutableRefObject<(() => void) \| undefined>;` |         `- `          |
