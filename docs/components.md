---
title: 组件描述
order: 1
nav:
  title: 组件
  order: 2
  path: /components
---

# 架构设计

ProComponents 是基于 Ant Design 而开发的模板组件，提供了更高级别的抽象支持，开箱即用。可以显著的提升制作 CRUD 页面的效率，更加专注于页面。

- [ProLayout](/components/layout) 解决布局的问题，提供开箱即用的菜单和面包屑功能
- [ProTable](/components/table) 表格模板组件，抽象网络请求和表格格式化
- [ProForm](/components/form) 表单模板组件，预设常见布局和行为
- [ProCard](/components/card) 提供卡片切分以及栅格布局能力
- [ProDescriptions](/components/descriptions) 定义列表模板组件，ProTable 的配套组件
- [ProSkeleton](/components/skeleton) 页面级别的骨架屏

> 如果您是阿里内网用户，欢迎尝试使用 [TechUI](https://techui.alipay.com)。TechUI 在封装 ProComponents 的基础上还提供了丰富的 Ant Design 扩展组件。

## 与网络请求库配置使用

ProTable，ProList 使用了新的数据结构，如果你使用了我们约定的参数使用起来会非常简单。

