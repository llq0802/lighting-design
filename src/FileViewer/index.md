---
title: LFileViewer
toc: content
nav:
  path: /components
---

# LFileViewer

文件预览器，目前已支持 `image` `audio` `video` `pdf` 等文件类型预览，其他文件类型会提供点击下载提示。

## 代码演示

### 图片格式

<code src='./demos/Demo1.tsx'></code>

### 其他文件格式

<code src='./demos/Demo2.tsx'></code>

## API

> 如果要在新标签页使用浏览器的默认预览 , 可使用 `window.open(url)`

### fileType 为 'image'

| 参数         | 说明                                 | 类型                                                              | 默认值  |
| ------------ | ------------------------------------ | ----------------------------------------------------------------- | ------- |
| fileType     | 设置为`'image'`                      | `'image'`                                                         | `-`     |
| url          | 图片地址数组                         | `string[]`                                                        | `-`     |
| imagePreview | 控制预览的其他属性                   | [LImagePreviewProps](/components/file-viewer/#limagepreviewprops) | `-`     |
| open         | 是否显示，结合 onOpenChange 进行控制 | `boolean`                                                         | `false` |
| onOpenChange | open 改变时触发                      | ` (open: boolean) => void`                                        | `-`     |

### fileType 不为 'image'

除以下参数，其余同 [antd Modal](https://ant.design/components/modal-cn#api)

| 参数     | 说明                                                                      | 类型     | 默认值 |
| -------- | ------------------------------------------------------------------------- | -------- | ------ |
| fileType | 文件类型，目前仅支持 `audio` `video` `pdf` 等文件类型的预览               | `string` | `-`    |
| url      | 文件地址                                                                  | `string` | `-`    |
| fileName | 文件名称，自动设置为 `antd Modal` 的标题，可以通过设置 `title` 自定义标题 | `string` | `-`    |

### LImagePreviewProps

```ts
export type LImagePreviewProps = {
  visible?: boolean;
  onVisibleChange?: (visible, prevVisible, current: number) => void; // current 参数v5.3.0后支持
  getContainer?: string | HTMLElement | (() => HTMLElement); // v4.8.0
  src?: string; // v4.10.0
  mask?: ReactNode; // v4.9.0
  maskClassName?: string; // v4.11.0
  rootClassName?: string; // v5.4.0后支持
  current?: number; // v4.12.0 仅支持 PreviewGroup
  countRender?: (current: number, total: number) => string; // v4.20.0 仅支持 PreviewGroup
  scaleStep?: number;
  forceRender?: boolean;
  onChange?: (current: number, prevCurrent: number) => void; // v5.3.0后支持
};
```
