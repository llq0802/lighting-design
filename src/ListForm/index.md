---
title: LListForm
toc: content
nav:
  path: /components
---

# LListForm

LFormItem 数组化管理，提供转换、校验等功能。

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'  background="#f5f5f5"></code>

### 列表表单校验

<code src='./demos/Demo2.tsx' background="#f5f5f5" ></code>

### 复杂的动态增减表单项

<code src='./demos/Demo3.tsx' background="#f5f5f5" ></code>

## API

> LLoginForm 下的字段不应该配置 initialValue，你始终应该通过 LLoginForm 的 initialValue 或者 LForm 的 initialValues 来配置。
>
> 嵌套表单字段需要对 field 进行拓展，将 field.name 应用于控制字段。

```ts
import { LLoginForm } from 'lighting-design';
```

同 antd 的 [Form.List](https://ant.design/components/form-cn#formlist)

```ts
<LLoginForm>
  {(fields) =>
    fields.map((field) => (
      <Form.Item {...field}>
        <Input />
      </Form.Item>
    ))
  }
</LLoginForm>
```
