---
title: LECharts
toc: content
---

# LECharts

React 版本的 ECharts 容器组件 对比 `echarts-for-react` 有如下特性:

1.  不新增数据结构和技术概念
2.  符合 React Hooks 技术栈
3.  自动实时适配根元素容器大小并带有丝滑过渡动画
4.  自动实时适配字体等字段值的大小
5.  更一步的性能优化
6.  更加友好的类型提示
7.  修复 `echarts-for-react` 在 `Tabs` 组件中闪动问题

**总结一句话: 绝大数情况你只管 `option` 配置, 其他什么也不管.**

## 代码演示

### 基础用法

<code src='./demos/Demo2.tsx'></code>

### 在`Tabs`中使用

可根据实际情况给 `Tabs` 设置 `destroyInactiveTabPane` 属性

<code src='./demos/Demo1.tsx'></code>

### ECharts API

<code src='./demos/Demo3.tsx'></code>

### onEvent

<code src='./demos/Demo4.tsx'></code>

### 实时动态数据

<code src='./demos/Demo5.tsx'></code>

### SVG 渲染器

关于使用 canvas 还是 svg 渲染器请查看 [echarts](https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg) 官方文档

<code src='./demos/Demo6.tsx'></code>

### 设置其他属性

设置 Loading Theme style 等

<code src='./demos/Demo7.tsx'></code>

### 取消响应式

<code src='./demos/Demo8.tsx'></code>

## API

:::warning{title=注意}
自 2.1.23 起新增此组件

- 使用该组件时必须保证项目中已安装了`echarts`或者通过`cdn`引入了`echarts`

- 建议搭配 `echarts v5` 使用以便获得新特性与性能优化

- 如果要使用`Web GL` 请先安装 `echarts-gl`

- 根组件的默认样式为 `width: 100%; height: 33vh;` 可根据实际需求修改

- 当要改变 `option`时 , 你必须先 **深克隆** 原`option (可使用 lodash.cloneDeep)` 然后再 `setOpions({...新的深克隆后的option})`

- `designWidth` `autoResizeFields` `autoResizeDuration` 都只在 `autoResize`为`true`时生效

- `autoResizeFields` 说明:

  - `autoResize` 为 `true` 时生效, 响应式大小的计算根据 `designWidth`
  - 默认会对`fontSize`进行设置 如果为`autoResizeFields`为`false`则所有字段都不会做响应式
  - 字段的值必须是 `number`类型或者`字符串的数字`

  :::

```ts
import { LECharts } from 'lighting-design';
```

|        参数        |                                                              说明                                                              |                                    类型                                     |     默认值     |
| :----------------: | :----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :------------: |
|     echartsRef     |                               LECharts 组件的实例 包含 echarts 的实例 内置 resize dispose 根元素                               |       `MutableRefObject<LEChartsInstance          \|      undefined>`       |      `-`       |
|     className      |                                                          根元素的类名                                                          |                                  `string`                                   |      `-`       |
|       style        |                                                          根元素的样式                                                          |                               `CSSProperties`                               |      `-`       |
|       option       |                                                       echarts 的 option                                                        |                               `EChartsOption`                               |      `-`       |
|       theme        |                                                     echarts 初始化时的主题                                                     |         `string                             \| Record<string, any>`         |      `- `      |
|      notMerge      |                            是否不跟之前设置的 option 进行合并。默认为 false。即表示合并。合并的规则                            |                                  `boolean`                                  |    `false`     |
|     lazyUpdate     |      在设置完 option 后是否不立即更新图表，为 false 即同步立即更新。如果为 true 则会在下一个 animation frame 中才更新图表      |                                  `boolean`                                  |     `true`     |
|    showLoading     |                                            在更新图表时是否显示 echarts 的 loading                                             |                                  `boolean`                                  |    `false`     |
|   loadingOption    |                               在 showLoading 为 true 时生效, echarts 实例的 showLoading 的配置项                               |                           ` Record<string, any>`                            |      `-`       |
|        opts        |                                                 echarts.init 方法的 opts 配置                                                  |                                   `Opts`                                    |      `-`       |
|    onChartReady    |                                         图表渲染完成时的回调 回调的参数为当前图表实例                                          |                        `(instance: ECharts) => void`                        |      `-`       |
|   onChartResize    |                                 图表大小发生改变时的回调 回调的参数为当前图表实例与根元素 dom                                  |             `(instance: ECharts, dom: HTMLDivElement) => void`              |      `-`       |
|      onEvents      |                                                         echarts 的事件                                                         |           ` Record<string, (params: any, ins: ECharts) => void>`            |      `-`       |
|  shouldSetOption   |                                            是否能更新图表 返回 false 将不会更新图表                                            | `( prevProps: LEChartsProps \| undefined, props: LEChartsProps) => boolean` |      `-`       |
|     autoResize     |                                当 echarts 的容器 dom 大小发生变化时,是否自动 resize 默认为 true                                |                                  `boolean`                                  |     `true`     |
| autoResizeDuration | autoResize 为 true 时生效, 当 echarts 的容器 dom 大小发生变化时,内部 resize 时的动画过渡时长, 为 0 时则不会有过渡效果, 单位 ms |                                  `number`                                   |     `800`      |
|  autoResizeFields  |                 autoResize 为 true 时生效, 当 echarts 的容器 dom 大小发生变化时,option 中需要响应式大小的字段                  |                             `string[] \| false`                             | `['fontSize']` |
|    designWidth     |                 autoResize 为 true 时生效, 设计稿的宽度 默认 1920, 配合 autoResizeFields 属性做响应式大小计算                  |                                  `number`                                   |     `1920`     |

### LEChartsInstance

```ts
export type LEChartsInstance = {
  /** echarts的实例 */
  echartsInstanceRef: MutableRefObject<ECharts | undefined>;
  /** echarts容器的根元素 */
  rootRef: MutableRefObject<HTMLDivElement | null>;
  /** 内置执行 resize图表并附带动画 还会resize autoResizeField配置的字段名  */
  resize: () => void;
  /** 内置销毁当前图表实例与取消dom大小监听的方法 */
  dispose: () => void;
};
```

### Opts

```ts
 type Opts = {
  locale?: string;
  renderer?: 'canvas' | 'svg';;
  devicePixelRatio?: number;
  useDirtyRect?: boolean;
  useCoarsePointer?: boolean;
  pointerSize?: number;
  ssr?: boolean;
  width?: number | string | 'auto';
  height?: number | string | 'auto';
};




```
