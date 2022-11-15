---
title: useFormDrawer
order: 2
nav:
  order: 2
  path: /components
---

# useFormDrawer

使用 hooks 方式的抽屉表单组件 、用于业务功能代码分离、避免过多状态和 Form 组件业务代码集中在一个文件上。

## 代码演示

<code src='./demos/demo.tsx'>

<API></API>

## API

```ts
const useFormDrawer: (
  FormSlot: (props: FormDrawerSlotProps, ref: MutableRefObject<FormInstance<any>>) => JSX.Element,
  modalProps?: DrawerModalProps,
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
| DrawerProps | 继承 antd-Drawer 的 Props | `DrawerModalProps` |

### Result

|    Name    |     Description      |                      Type                       |
| :--------: | :------------------: | :---------------------------------------------: |
| FormDrawer | 传入的 FormSlot 组件 | `(formSlotProps: FormSlotProps) => JSX.Element` |
|    form    |    antd Form 实例    |                 `FormInstance`                  |
|   onOpen   |       打开弹窗       |                  `() => void`                   |
|  onClose   |       关闭弹窗       |                  `() => void`                   |
