---
title: LFormItemUpload
toc: content
nav:
  path: /components
---

# LFormItemUpload

图片 文件等上传

**特点**

- 适用于多种场景，文件/图片/头像/封面图等等
- 可自定义上传行为
- 内置上传之前校验
- 支持裁剪功能
- 完全兼容原上传组件

## 代码演示

### 基础用法

<code src='./demos/demo.tsx'></code>

<!-- <code src='./demos/Demo1.tsx'></code>

### 通过 onUpload 上传

<code src='./demos/Demo2.tsx'></code>

### 自定义图片预览

<code src='./demos/Demo3.tsx'></code>

### 图片裁剪

<code src='./demos/Demo4.tsx'></code>
 -->

## API

:::warning{title=注意}

- `beforeUpload` 若返回 `false 或 Promise.reject()` 当前的文件 `file` 或者 `fileList` 不会有 `status` ，`response`属性

- `beforeUpload` 若返回 `Upload.LIST_IGNORE`， 此时列表中将不展示此文件。且不会触发 `onChange`事件

- `file` 的 `thumbUrl` 属性为内置的图片缩略图地址(默认为 dase64)，

- 想修改图片大小后或者头像大小 可通过`uploadProps`传入`className`类名 然后进行覆盖`.ant-upload.ant-upload-select`的样式
  :::

```ts
import { LFormItemUpload } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数                 | 说明                                                      | 类型                                            | 默认值              |
| -------------------- | --------------------------------------------------------- | ----------------------------------------------- | ------------------- |
| uploadType           | 上传组件内建类型样式。                                    | `'default' \| 'image' \| 'avatar' \| 'dragger'` | `'default'`         |
| action               | 地址                                                      | `string`                                        | `-`                 |
| uploadFieldName      | 发到后台的文件参数名                                      | `string`                                        | `file`              |
| accept               | 接受上传的文件类型                                        | `string`                                        | `-`                 |
| maxSize              | 单个文件限制大小，单位字节`Byte`。 为 0 不限制大小        | `number`                                        | `1024 * 1024 * 100` |
| maxCount             | 限制上传文件数量。当为 `1` 时，始终用最新上传的代替当前。 | `number`                                        | `-`                 |
| isSerial             | 上传文件的方式 `true为串行 false为并行`                   | `boolean`                                       | `false`             |
| autoUpload           | 选择文件校验通过后是否自动上传                            | `boolean`                                       | `true`              |
| multiple             | 是否支持多选文件，`ie10+` 支持。                          | `boolean`                                       | `false`             |
| uploadProps          | antd 上传组件的 Props                                     | [UploadProps]                                   | `-`                 |
| onUpload             | 自定义上传 ,优先级比 action 低                            | `(file: File) => Promise<void>`                 | `-`                 |
| onNoSupportFileType  | 不支持的文件类型的回调                                    | `(file: RcFile, fileList: RcFile[]) => void`    | `-`                 |
| onExceedFileSize     | 超过文件大小限制的回调                                    | `(file: RcFile, fileList: RcFile[]) => void`    | `-`                 |
| onExceedMaxCount     | 超过文件数量限制的回调                                    | `(file: RcFile, fileList: RcFile[]) => void`    | `-`                 |
| onUploading          | 上传中的回调                                              | `UploadProps['onChange']`                       | `-`                 |
| onSuccess            | 上传成功的回调                                            | `UploadProps['onChange']`                       | `-`                 |
| onError              | 上传失败的回调                                            | `UploadProps['onChange']`                       | `-`                 |
| renderUploadChildren | 自定义渲染 upload 内容                                    | `RenderUploadChildren`                          | `-`                 |

### UploadFile

```ts
type UploadFile = {
  uid: string | number; // 文件唯一id 内置生成
  name: string; // 文件名字
  thumbUrl?: string; // 缩略图，可通过 uploadProps.previewFile 覆写获取缩略图
  url?: string; // 下载与预览地址
  response?: any; // onUpload 或 action 上传成功后的返回值
  error?: any; // 失败状态时，输入移入提示 { message: string }
  status?: 'done'; // 状态有：uploading done error removed
  // ...其他属性
};
```

### RenderUploadChildren

```ts
type RenderUploadChildren = (opts: {
  fileList: RcFile[];
  loading: boolean;
  avatarUrl?: string;
  avatarDom?: React.ReactNode;
  buttonDom?: React.ReactNode;
  draggerDom?: React.ReactNode;
}) => React.ReactNode;
```

[UploadProps]: https://ant.design/components/upload-cn/#api
