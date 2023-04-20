---
title: LTypeit
toc: content
order: 2
nav:
  order: 2
  path: /components
---

# LTypeit

打字机

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 动态修改

<code src="./demos/Demo2.tsx"></code>

### 异步插入

<code src="./demos/Demo3.tsx"></code>

### 异步等待

<code src="./demos/Demo4.tsx"></code>

```ts
import { LTypeit } from 'lighting-design';
```

## API

以下 API 仅供参考，具体请查阅[TypeIt](https://www.typeitjs.com/)

| 参数      | 说明                                                                                  | 类型      | 默认值 |
| --------- | ------------------------------------------------------------------------------------- | --------- | ------ |
| .pause()  | 停止                                                                                  | `number`  | `-`    |
| .delete() | 从当前字符向前删除                                                                    | `number`  | `-`    |
| .type()   | 开始打印的字符串。                                                                    | `any`     | `-`    |
| .break()  | 插入标签。`<br>`                                                                      | `any`     | `-`    |
| .empty()  | 立即清除目标元素的内容。                                                              | `any`     | `-`    |
| .move()   | 向后或向前移动光标一定数量的字符。这可以通过传递一个数字来实现                        | `number`  | `-`    |
| .exec()   | 此方法是异步的，因此您可以将其配置为完全暂停队列的执行，直到返回的 Promise 进行解析。 | `Promise` | `-`    |
| options   | 配置选项                                                                              | `Options` | `{}`   |

### Options

以下 API 仅供参考，具体请查阅[TypeIt Options](https://www.typeitjs.com/docs/vanilla/usage/#configuration-options)

| 参数          | 说明                                   | 类型      | 默认值                           |
| ------------- | -------------------------------------- | --------- | -------------------------------- |
| speed         | 打字速度，毫秒为单位测量。             | `number`  | `100`                            |
| deleteSpeed   | 打字速度，毫秒为单位测量。             | `number`  | `null`                           |
| lifeLike      | 使打字速度不规则，就好像真人在写一样。 | `boolean` | `true`                           |
| cursor        | 在字符串末尾显示闪烁的光标。           | `boolean` | `true`                           |
| loop          | 的字符串是否会在完成后继续循环。       | `boolean` | `false`                          |
| cursorChar    | 用于光标的字符。HTML 也可以！          | `string`  | `\|`                             |
| afterComplete | 将在整个实例完成键入后激发。           | `Funtion` | `async (instance: TypeIt) => {}` |
