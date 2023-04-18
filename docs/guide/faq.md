---
title: 常见问题
order: 4
---

# 常见问题

## 为何调用 form.resetFields 为何子组件的异步请求会重新发送？

`form.resetFields() 会重置整个 Field，因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。请手动调用form.setFieldsValue()将其重置`[问题说明](https://4x.ant.design/components/form-cn/#%E4%B8%BA%E4%BB%80%E4%B9%88-resetFields-%E4%BC%9A%E9%87%8D%E6%96%B0-mount-%E7%BB%84%E4%BB%B6%EF%BC%9F)

```ts
// 比如
form.setFieldsValue({
  name: undefined,
  age: undefined,
  // ... 其他属性同理
});
```

## 为何在 LMoadlForm LDrawerForm Modal Drawer 中调用 form 控制台会报错？

> Warning: Instance created by useForm is not connect to any Form element. Forget to pass form prop?

`这是因为你在调用 form 方法时，Modal 还未初始化导致 form 没有关联任何 Form 组件。你可以通过给 Modal 设置 forceRender 将其预渲染。`[示例点击此处](https://codesandbox.io/s/antd-reproduction-template-ibu5c)

## 为何表格全屏时无法显示 LMoadlForm LDrawerForm Modal Drawer 等组件？

`全屏本质上是把你的表格区域 fixed 了，所以你需要把 Modal 等组件 的 getPopupContainer 设置为了 LTable 的根 div`

```typescript
/* 如果没有使用表格的全屏toolbarActionConfig.showFullscreen ，就不用包裹 ConfigProvider */
<ConfigProvider getPopupContainer={() => tableRef.current?.rootRef.current || document.body}>
  <Modal
    width={600}
    open={open}
    title-'弹窗'
    // ...其他属性
  />
</ConfigProvider>
```

## 如何关闭表单自动填充

> 参考：[如何关闭表单自动填充](https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion)
>
> 适用场景：注册、修改密码、新建表单等

通常设置 `autocomplete="off"` 并不能阻止 Chrome 中的自动填充，需要设置成 `autocomplete="new-password"` 才生效。

可以在 `LForm` 中添加下面代码：

```typescript
<input
  type="text"
  name="_prevent_auto_complete_name"
  autoComplete="off"
  readOnly={true}
  style={{ display: 'none' }}
/>
<input
  type="password"
  name="_prevent_auto_complete_pass"
  autoComplete="new-password"
  readOnly={true}
  style={{ display: 'none' }}
/>
```

## 其他常见问题

更多常见问题请参考 **antd** 问答 [其他常见问题](https://ant.design/docs/react/faq-cn)
