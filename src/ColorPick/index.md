---
title: LColor
toc: content
nav:
  path: /components
---

# LColor

用于显示 / 选择颜色

## 代码演示

### 显示颜色

<code src="./demos/Demo1.tsx" ></code>

### 选择颜色

<code src="./demos/Demo2.tsx" ></code>

## API

> 其中 `LColorChromePicker` `LColorSketchPicker` 在颜色模式为 `rgb` 时，支持设置透明度。
>
> 设置 `showText` 显示颜色值

```ts
import { LColor } from 'lighting-design';
```

### LColor

| 参数      | 说明               | 类型                           | 默认值     |
| --------- | ------------------ | ------------------------------ | ---------- |
| value     | 颜色值             | `string`                       | `- `       |
| showText  | 是否显示颜色值文本 | `boolean`                      | `false`    |
| size      | 颜色块大小         | `'small' \| 'middle'\|'large'` | `'middle'` |
| className | 根容器类名         | `string`                       | `-`        |
| style     | 根容器样式         | `CSSProperties`                | `-`        |

### LColorXXX 共同的 API

```ts
import { LColorXXX } from 'lighting-design';
```

除了以下参数外，还支持各自 react-color 的 API，具体请查阅[react-color](http://casesandberg.github.io/react-color/)

| 参数      | 说明                                                                                                                                         | 类型                             | 默认值         |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------- |
| disabled  | 是否禁用                                                                                                                                     | `boolean`                        | `false`        |
| value     | 颜色值                                                                                                                                       | `string`                         | `-`            |
| showText  | 是否显示颜色值文本                                                                                                                           | `boolean`                        | `false`        |
| onChange  | 当颜色值改变后触发。                                                                                                                         | `(color: string) => void`        | `-`            |
| trigger   | 触发行为                                                                                                                                     | `'hover' \| 'click'`             | `'click'`      |
| colorMode | 颜色模式                                                                                                                                     | `'hex' \| 'rgb'`                 | `'hex'`        |
| placement | 浮层位置 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` <br/> `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | `string`                         | `'bottomLeft'` |
| size      | 颜色块大小                                                                                                                                   | `'small' \| 'middle' \| 'large'` | `'middle'`     |
| className | 根容器类名                                                                                                                                   | `string`                         | `-`            |
| style     | 根容器样式                                                                                                                                   | `CSSProperties`                  | `-`            |
