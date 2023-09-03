---
title: useLazyLoadImage
toc: content
---

# useLazyLoadImage

:::warning{title=警告}
将在下个版本移除该 `HOOK` 请使用 [rc-use-hooks](https://llq0802.github.io/rc-use-hook) 完全兼容原 `HOOK` 并新增许多实用 `HOOK`
:::

使用`IntersectionObserver`实现的懒加载图像，在组件卸载或者图像已经加载后不再监听

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx" ></code>

### antd.Image

<code src="./demos/Demo2.tsx" ></code>

### 自定义视口

<code src="./demos/Demo3.tsx" ></code>

## API

IntersectionObserver API: [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)

> - 如果配置了`target` 则必须配置 `dependencies`
>
> - `imageAttribute` 必须以`data-`开头的字符串并且只能是小写字母
>
> - `img` 的 `src` 属性推荐设置为默认占位的图片地址

```ts
import { useLazyLoadImage } from 'lighting-design';
useLazyLoadImage();
// or
useLazyLoadImage({
  // ...配置项
});
```

### Params

|   参数   |  说明  |           类型           |
| :------: | :----: | :----------------------: |
| paramObj | 配置项 | `useLazyLoadImageParams` |

### useLazyLoadImageParams

```ts
export type useLazyLoadImageParams = {
  /** 在哪个节点下查询 querySelectorAll */
  target?: HTMLDivElement | Document; //  默认为 document
  /** querySelectorAll抓取在 `target` 所有可延迟加载的图像的自定义属性 */
  imageAttribute?: `data-${string}`; // 默认为 data-img-src
  /** IntersectionObserver 的配置项*/
  options?: IntersectionObserverInit; // 默认为 { rootMargin: '200px 0px' , threshold: 0.01, };
  /** 依赖项 如果配置会重新执行监听 */
  dependencies?: any[]; // 默认为 []
};
```
