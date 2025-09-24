---
title: LCaptchaButton
toc: content
---

# LCaptchaButton

一个用于处理验证码发送倒计时的按钮组件。支持自定义倒计时时长、文案、缓存等功能。

## 功能特点

- 支持自定义倒计时时长
- 支持自定义按钮文案
- 支持页面刷新后继续倒计时
- 支持手动控制倒计时的开始和取消
- 支持自定义按钮内容渲染

## 代码演示

### 基础用法

<code src='./demos/demo1.tsx'></code>

### actionRef 的使用

<code src='./demos/demo3.tsx'></code>

<!-- <code src='./demos/demo99.tsx'></code> -->

## API

:::warning{title=注意}

- 当存在多个验证码组件时, 请设置不同的 `cacheKey` 值

- 如果在要在表单中使用验证码 , 推荐使用 [LFormItemCaptcha](/components/l-form-item-captcha)

  :::

```ts
import { LCaptchaButton } from 'lighting-design';
```

除了以下参数外, 继承 [antd Button](https://ant.design/components/button-cn/) **(disabled 除外)**
| 参数 | 说明 | 类型 | 默认值 |
| ------------ | ------------------------------------ | ------------------- | --------------------- |
| autoStart | 点击按钮是否自动启动倒计时 | `boolean` | `false` |
| second | 倒计时秒数 | `number` | `60 ` |
| disabledText | 倒计时的文字, 会带上 `second` 秒 | `string` | `'重发'` |
| cacheKey | 缓存的 key、页面刷新后倒计时继续。 | `string` | `'__CaptchaButton__'` |
| onEnd | 倒计时完成后触发 | `() => void` | `- ` |
| actionRef | 手动开始或取消倒计时, `start 将无效` | `MutableRefObject<LCaptchaButtonActionRef>` | `- ` |
| render | 重新渲染按钮内容 | `(currentSecond: number) => ReactNode` | `- ` |

### LCaptchaButtonActionRef

```ts
export type LCaptchaButtonActionRef = { start: () => void; cancel: () => void };
```
