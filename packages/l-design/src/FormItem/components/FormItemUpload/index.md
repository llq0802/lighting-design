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

**校验顺序**

- 必填为空时提示：`请输入${label}`
- placeholder`请输入${label}`

## 代码演示

<code src='./demos/Demo1.tsx'>

## API

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| uploadType | 上传组件内建类型样式。 | `'default' \| 'image' \| 'avatar' \| 'dragger'` | `'default'` |
| onUpload | 自定义上传，添加文件时触发。<br/>内部自动处理上传中和失败状态。<br/>如果返回 `object` 将添加到 `UploadFile` 对象中的 `response` 属性中。 | `(file: File) => Promise<object \| undefined>` | - |
| onGetPreviewUrl | 获取预览图片，点击预览时触发。<br/>（仅在没有 file.url file.thumbUrl file.preview 的情况下生效，执行成功后将预览图放在 file.preview） | `(file: File) => Promise<string>` | - |
| maxSize | 单个文件限制大小，单位 `Byte`。 | `number` | `1024*1024*5` |
| maxCount | 限制上传文件数量。<br/>当为 `1` 时，始终用最新上传的代替当前。 | `number` | - |
| accept | 接受上传的文件类型。<br/>如果 `uploadType` 为 `image` 或 `avatar` ，默认为 `.jpg, .jpeg, .png` | `string` | - |
| fileTypeMessage | 文件类型错误时提示，包含 `x` 会自动替换为 `accept`。 | `string \| false` | `只支持上传 ${accept} 文件` |
| fileSizeMessage | 文件超过最大尺寸时提示包含 `x` 会自动替换为 `${maxSize / 1024 / 1024}M`。 | `string \| false` | `文件必须小于${maxSize / 1024 / 1024}M` |
| multiple | 是否支持多选文件，`ie10+` 支持。 | `boolean` | `false` |
| buttonIcon | 按钮图标，不同内建类型有不一样的默认值。 | `ReactNode` | - |
| buttonText | 按钮文本 在`uploadType为default或dragger时生效` | `ReactNode` | `'点击上传'\|'单击或拖动文件到此区域进行上传'` |
| buttonProps | Button 的 Props 在`uploadType为default时生效` | [ButtonProps](https://4x.ant.design/components/button-cn/#API) | `-` |
| previewModalProps | 内置预览弹窗的属性 | [ModalProps](https://4x.ant.design/components/modal-cn/#API) | - |
| uploadProps | antd 上传组件的 Props | [UploadProps](https://4x.ant.design/components/upload-cn/#API) | - |

#### UploadFile

```ts
type UploadFile = {
  uid: string | number; // 文件唯一id 内置生成
  name: string; // 文件名字
  thumbUrl?: string; // 缩略图，可通过 uploadProps.previewFile 覆写获取缩略图
  url?: string; // 下载地址
  response?: any; // onUpload 或 action 上传成功后的返回值
  error?: any; // 失败状态时，输入移入提示 { message: string }
  status: 'done'; // 状态有：uploading done error removed，被 beforeUpload 拦截的文件没有 status 属性
  // ...
};
```
