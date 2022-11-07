---
title: useFormModal
order: 2
nav:
  order: 2
  path: /components
---

# useFormModal

使用 hooks 方式的弹窗表单组件 、用于业务功能代码分离、避免过多状态和 Form 组件业务代码集中在一个文件上。

## 代码演示

<code src='./demos/demo1.tsx'>

<API></API>

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

### Params

| Name | Description | Type |
| :-: | :-: | :-: |
| FormSlot | 业务 ant Form 组件 | `(props: FormSlotProps, ref: React.MutableRefObject<FormInstance<any>>) => JSX.Element,` |
| modalProps | antd-Modal 的 Props | `DraggableModalProps` |

### Result

|   Name    |     Description      |                      Type                       |
| :-------: | :------------------: | :---------------------------------------------: |
| FormModal | 传入的 FormSlot 组件 | `(formSlotProps: FormSlotProps) => JSX.Element` |
|   form    |    antd Form 实例    |                 `FormInstance`                  |
|  onOpen   |       打开弹窗       |                  `() => void`                   |
|  onClose  |       关闭弹窗       |                  `() => void`                   |

### 类型

```ts
export type DraggableModalProps = {
  /*是否能拖动*/
  isDraggable: boolean;
} & ModalProps; // 继承antd Modal的其他属性

export interface FormSlotProps extends FormProps {
  /*form绑定的值*/
  formValues?: Record<string, any>;
  /*点击确定按钮触发, 用于提交form表单, 并会触发表单验证*/
  submit?: (fields: Record<string, any>, form: FormInstance) => any;
  /*需要传给 FormSlot 组件的其他属性或方法*/
  [key: string]: any;
}
```
