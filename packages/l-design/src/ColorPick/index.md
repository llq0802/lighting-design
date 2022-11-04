---
title: ColorPick
order: 2
nav:
  order: 3
  path: /components
---

# ColorPick

用于显示/选择颜色

## 代码演示

### 显示颜色

<code src="./demos/Demo1.tsx" />

### 选择颜色

<code src="./demos/Demo2.tsx" />

## API

### Color

| 参数      | 说明               | 类型                           | 默认值                  |
| --------- | ------------------ | ------------------------------ | ----------------------- |
| value     | 颜色值             | `string`                       | `- `                    |
| showText  | 是否显示颜色值文本 | `boolean`                      | `false`                 |
| size      | 颜色块大小         | `'small' \| 'middle'\|'large'` | `'middle'`              |
| className | 新增一个根容器类名 | `string`                       | `lighting-design-color` |

### Picker 共同的 API

除了以下参数外，还支持各自 react-color 的 API，具体请查阅[react-color](http://casesandberg.github.io/react-color/)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 颜色值 | `string` | `-` |
| showText | 是否显示颜色值文本 | `boolean` | `false` |
| onChange | 当颜色值改变后触发。 | `(color: string) => void` | `-` |
| trigger | 触发行为 | `'hover' \| 'click'` | `'click'` |
| colorMode | 颜色模式 | `'hex' \| 'rgb'` | `'hex'` |
| placement | 颜色选择浮层位置 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | `string` | `'bottomLeft'` |
| size | 颜色块大小 | `'small' \| 'middle' \| large` | `'middle'` |
| className | 新增一个根容器类名 | `string` | `lighting-design-color` |
