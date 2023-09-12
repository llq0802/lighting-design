---
title: LFromItemTransfer
toc: content
---

# LFromItemTransfer

高级穿梭框

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

## API

:::warning{title=注意}

- `request` 的参数集合`depends` 为 `LFormItem` 组件 `dependencies` 属性依赖项字段的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除或者禁用选择

- 通过异步请求的数据中必须包含 `isLeaf ( 是否是最终的子节点 没有子项的含义 )` 字段 , 这样内部渲染时才会知道还有没有子项可渲染 , 避免没有子项可渲染时又显示展开图标
  :::

```ts
import { LFormItemTreeSelect } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数            | 说明                                 | 类型                                                                 | 默认值  |
| --------------- | ------------------------------------ | -------------------------------------------------------------------- | ------- |
| treeData        | 数据化配置选项内容                   | `LTreeSelectOption[]`                                                | `[]`    |
| request         | 请求数据函数                         | `(...depends: any[]) => Promise<LTreeSelectOption[]>`                | `-`     |
| debounceTime    | 当依赖项发生变化时重新请求的防抖时间 | `number`                                                             | `-`     |
| treeCheckable   | 显示 Checkbox                        | `boolean `                                                           | `false` |
| loadData        | 异步加载数据                         | `function(node)`                                                     | `-`     |
| spin            | 自定义 loading 效果                  | [SpinProps](https://ant.design/components/spin-cn/#api)              | `-`     |
| treeSelectProps | `antd`树选择组件的 Props             | [TreeSelectProps](https://ant.design/components/tree-select-cn/#api) | `-`     |
