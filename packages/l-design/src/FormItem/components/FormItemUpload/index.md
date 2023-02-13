---
title: LFormItemUpload
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemUpload

图片 文件等上传

**特点**

- 适用于多种场景，文件/图片/头像/封面图等等
- 可自定义上传行为
- 内置上传之前校验
- 支持裁剪功能

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'>

### 通过 onUpload 上传

<code src='./demos/Demo2.tsx'>

### 自定义图片预览

<code src='./demos/Demo3.tsx'>

### 图片裁剪

<code src='./demos/Demo4.tsx'>

## API

```ts
import { LFormItemUpload } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| uploadType | 上传组件内建类型样式。 | `'default' \| 'image' \| 'avatar' \| 'dragger'` | `'default'` |
| accept | 接受上传的文件类型。<br/>如果 `uploadType` 为 `image` 或 `avatar` ，默认为 `.jpg, .jpeg, .png` | `string` | `-` |
| onUpload | 自定义上传，添加文件时触发。<br/>内部自动处理上传中和失败状态。<br/>如果返回 `object` 将添加到 `UploadFile` 对象中的 `response` 属性中。 | `(file: File) => Promise<Record<string, any>>` | `-` |
| maxSize | 单个文件限制大小，单位 `Byte`。 | `number` | `1024 * 1024 * 5` |
| maxCount | 限制上传文件数量。<br/>当为 `1` 时，始终用最新上传的代替当前。 | `number` | `-` |
| fileTypeMessage | 文件类型错误时提示，包含 `x` 会自动替换为 `accept`。 | `string \| false` | `只支持上传 ${accept} 文件` |
| fileSizeMessage | 文件超过最大尺寸时提示包含 `x` 会自动替换为 `${maxSize / 1024 / 1024}M`。 | `string \| false` | `文件必须小于${maxSize / 1024 / 1024}M` |
| isCrop | 图片是否需要裁剪 在`uploadType为'avatar'或'image'时生效` | `boolean` | `false` |
| cropProps | 图片裁剪额外属性 | [CropProps](https://github.com/nanxiaobei/antd-img-crop#props) | `-` |
| multiple | 是否支持多选文件，`ie10+` 支持。 | `boolean` | `false` |
| buttonIcon | 按钮图标，不同内建类型有不一样的默认值。 | `ReactNode` | `-` |
| buttonText | 按钮文本 在`uploadType为'default'或'dragger'时生效` | `ReactNode` | `'点击上传'\|'单击或拖动文件到此区域进行上传'` |
| buttonProps | Button 的 Props 在`uploadType为'default'时生效` | [ButtonProps](https://4x.ant.design/components/button-cn/#API) | `-` |
| onGetPreviewUrl | 获取预览图片，点击预览时触发。预览图放在 file.preview | `(file: File) => Promise<string>` | `-` |
| previewModalProps | 内置预览弹窗的属性 | [ModalProps](https://4x.ant.design/components/modal-cn/#API) | `-` |
| uploadProps | antd 上传组件的 Props | [UploadProps](https://4x.ant.design/components/upload-cn/#API) | `-` |

### UploadFile

```ts
type UploadFile = {
  uid: string | number; // 文件唯一id 内置生成
  name: string; // 文件名字
  thumbUrl?: string; // 缩略图，可通过 uploadProps.previewFile 覆写获取缩略图
  url?: string; // 下载地址
  response?: any; // onUpload 或 action 上传成功后的返回值
  error?: any; // 失败状态时，输入移入提示 { message: string }
  status?: 'done'; // 状态有：uploading done error removed，被 beforeUpload 拦截的文件没有 status 属性
  // ...其他属性
};
```
