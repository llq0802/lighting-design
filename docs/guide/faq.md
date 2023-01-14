---
title: FAQ
order: 2
group:
  path: /
  order: 1
nav:
  order: 1
  path: /guide
---

## FAQ

### 调用 form.resetFields 为何子组件的异步请求会重新发送？

`form.resetFields() 会重置整个 Field，因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。`[问题说明](https://4x.ant.design/components/form-cn/#%E4%B8%BA%E4%BB%80%E4%B9%88-resetFields-%E4%BC%9A%E9%87%8D%E6%96%B0-mount-%E7%BB%84%E4%BB%B6%EF%BC%9F)

### 为何在 LMoadlForm LDrawerForm Modal Drawer 中调用 form 控制台会报错？

Warning: Instance created by useForm is not connect to any Form element. Forget to pass form prop?

`这是因为你在调用 form 方法时，Modal 还未初始化导致 form 没有关联任何 Form 组件。你可以通过给 Modal 设置 forceRender 将其预渲染。`[示例点击此处](https://codesandbox.io/s/antd-reproduction-template-ibu5c)
