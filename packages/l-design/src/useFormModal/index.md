---
title: useFormModal
order: 2
nav:
  order: 2
  path: /components
---

# useFormModal

使用 hooks 方式的弹窗表单组件 、用于业务功能代码分离、避免过多状态和业务代码集中在一个文件上。

## 代码演示

<code src='./demos/demo1.tsx'>

## API

```ts
const useFormModal: (
  FormSlot: (props: FormSlotProps, ref: React.MutableRefObject<FormInstance<any>>) => JSX.Element,
  modalProps?: DraggableModalProps,
) => {
  FormModal: (formSlotProps: FormSlotProps) => JSX.Element;
  form: FormInstance;
  onOpen: () => void;
  onClose: () => void;
};
```
