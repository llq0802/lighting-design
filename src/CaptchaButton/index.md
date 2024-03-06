---
title: LCaptchaButton
toc: content
---

# LCaptchaButton

处理获取验证码之类的组件, 刷新页面也会继续计时

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### actionRef 的使用

<code src='./demos/Demo3.tsx'></code>

### 3s 后再倒计

<code src='./demos/Demo2.tsx'></code>

<!-- <code src='./demos/Demo10.tsx'></code> -->

## API

:::warning{title=注意}

- 当存在多个验证码组件时, 请设置不同的 `cacheKey` 值

- 如果在要在表单中使用验证码 , 推荐使用 [LFormItemCaptcha](/components/form-item-captcha)

  :::

```ts
import { LCaptchaButton } from 'lighting-design';
```

除了以下参数外, 继承 [antd Button](https://ant.design/components/button-cn/) 属性`(disabled 除外)`

| 参数         | 说明                                    | 类型                                        | 默认值                |
| ------------ | --------------------------------------- | ------------------------------------------- | --------------------- |
| start        | 是否开始发送, 不能与`actionRef`同时配置 | `boolean`                                   | `true`                |
| second       | 倒计时秒数                              | `number`                                    | `60 `                 |
| disabledText | 倒计时的文字, 会带上 second 秒          | `string`                                    | `'重发'`              |
| cacheKey     | 缓存的 key、页面刷新后倒计时继续。      | `string`                                    | `'__CaptchaButton__'` |
| onEnd        | 倒计时完成后触发                        | `() => void`                                | `- `                  |
| actionRef    | 手动开始或取消倒计时, `start 将无效`    | `MutableRefObject<LCaptchaButtonActionRef>` | `- `                  |
| render       | 重新渲染按钮内容                        | `(currentSecond: number) => ReactNode`      | `- `                  |

### LCaptchaButtonActionRef

```ts
export type LCaptchaButtonActionRef = { start: () => void; cancel: () => void } | undefined;
```
