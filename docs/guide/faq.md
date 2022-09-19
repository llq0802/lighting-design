---
title: FAQ
order: 2
group:
  path: /
nav:
  order: 2
  path: /guide
---

## FAQ

以下整理了一些 ProComponents 社区常见的问题和官方答复，在提问之前建议找找有没有类似的问题。此外我们也维护了一个反馈较多 [how to use 标签](https://github.com/ant-design/pro-components/issues?q=is%3Aissue+label%3A%22%F0%9F%A4%B7%F0%9F%8F%BC+How+to+use%22+) 亦可参考。

### ProTable request 返回的数据格式可以自定义吗?

不行的，你可以在 request 中转化一下，或者写个拦截器。

[示例](https://beta-pro.ant.design/docs/request-cn)

### 如何隐藏 ProTable 生成的搜索的 label？

columns 的 title 支持 function 的，你可以这样写

```typescript
title: (_, type) => {
  if (type === 'table') {
    return '标题';
  }
  return null;
};
```

### 我没法安装 `ProComponents` 和 `ProComponents` 的依赖，顺便提一句，我在中国大陆。

那啥，试试 [cnpm](http://npm.taobao.org/)和[yarn](https://www.npmjs.com/package/yarn)。

### `Form` 当中 `initialValues`

`ProComponents` 底层也是封装的 [antd](https://ant.design/index-cn) ，所以用法也是和 [antd](https://ant.design/index-cn) 相同。注意 `initialValues` 不能被 `setState` 动态更新，你需要用 `setFieldsValue` 来更新。 `initialValues` 只在 `form` 初始化时生效且只生效一次，如果你需要异步加载推荐使用 `request`，或者 `initialValues ? <Form/> : null`

## 错误和警告

这里是一些你在使用 ProComponents 的过程中可能会遇到的错误和警告，但是其中一些并不是 ProComponents 的 bug。

### Cannot read property 'Provider' of undefined

请确保 antd 的版本 >= `4.11.1`
