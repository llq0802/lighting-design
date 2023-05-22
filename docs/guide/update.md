---
title: 从 v1 到 v2
order: 3
---

**新增**

- [LCardGroup - 卡片选择组件](/components/card-group)
- [LTagGroup - 标签选择组件](/components/tag-group)
- [LCollapseCard - 折叠卡片组件](/components/collapse-card)
- [LListForm - 列表表单组件](/components/list-form)
- [LFormItmeIcon - 图标选择组件](/components/form-item-icon)
- [LFormItemNumberRange - 数字范围组件](/components/form-item-number-range)
- [LList - 高级列表](/components/list)
- [useCallbackState - 钩子](/components/use-callback-state)
- [useShow - 钩子](/components/use-Show)

**移除**

- 移除 `useFormModal` 请使用 `LModalForm`
- 移除 `useFormDrawer` 请使用 `LDrawerForm`
- 移除 `LWaterMark` 请使用 `antd 的水印组件`

**调整**

- 重构`LFormItemDatePicker `组件
- 重构`LFormItemTimePicker `组件
- 重构`LFileViewer `组件
- 重构`LNumberRoll `组件
- 重构`LColor`组件
- 调整 `LFormItemInput` 内部正则校验
- 调整表单依赖项内部逻辑

**其他**

- 时间日期改用`day.js`
- 部分组件的`API`与`antd v5`同步
- 不支持 IE 浏览器，包括（IE11）。
