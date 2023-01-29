---
title: LFileViewer
order: 2
nav:
  order: 2
  path: /components
---

# LFileViewer

目前已支持 `image` `audoi` `video` `pdf` 等文件类型预览，其他文件类型会提供点击下载提示。

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 不同文件格式

<code src='./demos/Demo2.tsx'></code>

## API

除以下参数，其余同 [antd Modal](https://4x.ant.design/components/modal-cn/#api)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 文件地址。 | `string` | - |
| fileName | 文件名称，自动设置为 Modal 的标题，可以通过设置 `title` 自定义标题。 | `string` | - |
| fileType | 文件类型，目前仅支持 `image` `audio` `video` `pdf` 等文件类型的预览。 | `string` | - |
