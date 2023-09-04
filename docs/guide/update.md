---
title: 从 v1 到 v2
order: 3
---

**新增**

- [LSliderVerify - 滑块验证组件](/components/slider-verify)
- [LCardGroup - 卡片选择组件](/components/card-group)
- [LTagGroup - 标签选择组件](/components/tag-group)
- [LCollapseCard - 折叠卡片组件](/components/collapse-card)
- [LSeamlesScroll - 无缝滚动组件](/components/seamles-scroll)
- [LScrollBar - 滚动条组件](/components/scroll-bar)
- [LTreeTable - 树表格组件](/components/tree-table)
- [LH5Preview - H5 预览组件](/components/h5-preview)
- [LEllipsisText - 单行文字省略](/components/Ellipsis-Text)
- [LListForm - 列表表单组件](/components/list-form)
- [LFormItmeIcon - 图标选择组件](/components/form-item-icon)
- [LFormItemNumberRange - 数字范围组件](/components/form-item-number-range)
- [LList - 高级列表](/components/list)
<!-- - [useCallbackState - 钩子](/components/use-callback-state)
- [useShow - 钩子](/components/use-Show)
- [useWorker - 钩子](/components/use-worker)
- [useDeepUpdateEffect - 钩子](/components/use-deep-update-effect)
- [useLazyLoadImage - 钩子](/components/use-lazy-load-image) -->
  **移除**

- 移除 `useFormModal` 请使用 `LModalForm`
- 移除 `useFormDrawer` 请使用 `LDrawerForm`
- 移除 `LWaterMark` 请使用 `antd 的水印组件`
- 移除 `HOOKS` 请使用 [rc-use-hooks](https://llq0802.github.io/rc-use-hook) 完全兼容原 hooks

**调整**

- 重构`LFormItemDatePicker `组件
- 重构`LFormItemTimePicker `组件
- 重构`LCaptchaButton `组件
- 重构`LFileViewer `组件
- 重构`LNumberRoll `组件
- 重构`LColor`组件
- 重构`LTrigger`组件
- 调整 `LFormItemInput` 内部正则校验
- 调整表单依赖项内部逻辑

**其他**

- 时间日期插件改用`day.js`
- 部分组件的`API`与`antd V5`保持同步
- 不支持所有版本的 IE 浏览器
- `v1` 版本不再维护，请使用最新版本
