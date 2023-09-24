---
title: LEditTable
toc: content
---

# LEditTable

基于 `LTable` `LForm` 封装的高级编辑表格, 默认关闭了 `pagination` 且不支持 `contentRender`

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'  background="#f5f5f5"></code>

### 不是实时修改

保存或者删除后通过调用查询接口来修改表格数据

<code src='./demos/Demo5.tsx'  background="#f5f5f5"></code>

### 异步加载

<code src='./demos/Demo3.tsx'  background="#f5f5f5"></code>

### 每个表单项的单独配置

<code src='./demos/Demo4.tsx'  background="#f5f5f5"></code>

### 与分页和表单查询结合

<code src='./demos/Demo6.tsx'  background="#f5f5f5"></code>

### 与 LFrom 结合 1

<code src='./demos/Demo2.tsx'  background="#f5f5f5"></code>

:::warning{title=注意}

- 当存在多个验证码组件时, 请设置不同的 `cacheKey` 值

- 如果在要在表单中使用验证码 , 推荐使用 [LFormItemCaptcha](/components/form-item-captcha)

  :::

```ts
import { LEditTable } from 'lighting-design';
```

除了一下属性 [antd Button](https://ant.design/components/button-cn/) 属性`(disabled 除外)`

|     参数     |                说明                |                      类型                      |        默认值         |
| :----------: | :--------------------------------: | :--------------------------------------------: | :-------------------: |
|    start     |            是否开始发送            |                   `boolean`                    |        `true`         |
|    second    |             倒计时秒数             |                    `number`                    |         `60 `         |
| disabledText |   倒计时的文字, 会带上 second 秒   |                    `string`                    |       `'重发'`        |
|   cacheKey   | 缓存的 key、页面刷新后倒计时继续。 |                    `string`                    | `'__CaptchaButton__'` |
|    onEnd     |          倒计时完成后触发          |                  `() => void`                  |         `- `          |
|  cancelRef   |         用于取消重置倒计时         | `MutableRefObject<(() => void) \| undefined>;` |         `- `          |
