---
title: LSeamlessScroll
toc: content
---

# LSeamlessScroll

基于`requestAnimationFrame`实现的无缝滚动

## 代码演示

### 基础代码

<code src='./demos/Demo1.tsx' ></code>

<!-- ### 移入暂停

<code src='./demos/Demo2.tsx' ></code>

### 单步滚动

<code src='./demos/Demo3.tsx' ></code>

### 动态数据

<code src='./demos/Demo4.tsx' ></code> -->

## API

```ts
import { LSeamlessScroll } from 'lighting-design';
```

:::warning{title=注意}

- `singleHeight/singleWidth`设置的值必须和 `item` 每一项的高度(宽度)值一样 , 否则可能会引起单步滚动不准!

- 如果自定义了 `wrapperHeight` 则必须满足 `wrapperHeight < ( children 的高度 ) * ( copyNum + 1 )`

  :::

|       参数       |                        说明                        |                         类型                         |        默认值         |
| :--------------: | :------------------------------------------------: | :--------------------------------------------------: | :-------------------: |
|   isAutoScroll   |                  是否开启自动滚动                  |                       boolean                        |        `true`         |
|     isWatch      |                  是否开启监听数据                  |                       boolean                        |        `true`         |
|       list       |                    原始数据列表                    |               `Record<string, any>[]`                |          `-`          |
|    scrollRef     |                    引用组件方法                    |               LSeamlessScrollInstance                |          `-`          |
|       step       |         步进速度，step 也是单步大小的约数          |                        number                        |          `1`          |
|  limitScrollNum  |            能开启滚动的 list 数组的长度            |                        number                        |          `3`          |
|      hover       |                  是否开启鼠标悬停                  |                       boolean                        |        `false`        |
|    direction     |                    控制滚动方向                    |               up , down , left , right               |        `'up'`         |
|   singleHeight   |          单步运动停止的高度(每一项的高度)          |                        number                        |          `-`          |
|   singleWidth    |          单步运动停止的宽度(每一项的宽度)          |                        number                        |          `-`          |
|  singleWaitTime  |                  单步停止等待时间                  |                        number                        |       `1000ms`        |
|    isRemUnit     |                 是否开启 rem 单位                  |                       boolean                        |        `false`        |
|      delay       |                    动画延迟时间                    |                        number                        |         `0ms`         |
|       ease       |         动画方式(与 css 过度效果配置一致)          | string 或者{x1:number,x2:number,y1:number,y2:number} |       `ease-in`       |
|      count       |   动画循环次数，默认-1 表示一直动画 0 表示不循环   |                        number                        |         `-1`          |
|     copyNum      |   拷贝几份滚动列表(`children`) `必须大于等于 0 `   |                        number                        |          `1`          |
|      wheel       | 开启鼠标悬停时支持滚轮滚动`(hover 为 true 时生效)` |                       boolean                        |        `false`        |
| wrapperClassName |                   最外层盒子类名                   |                        string                        |          `-`          |
|  wrapperHeight   |                   最外层盒子高度                   |                        number                        | `children 列表的高度` |
|     children     |                      列表节点                      |                      ReactNode                       |           -           |

## LSeamlessScrollInstance

- onReset 重置滚动
- onStopMove 停止滚动
- onStartMove 开始滚动
