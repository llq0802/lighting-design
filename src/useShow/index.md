---
title: useShow
toc: content
---

# useShow

:::warning{title=警告}
将在下个版本移除该 `HOOK` 请使用 [rc-use-hooks](https://llq0802.github.io/rc-use-hook) 完全兼容原 `HOOK` 并新增许多实用 `HOOK`
:::

父组件通过 ref 唤起子组件 、用于业务功能代码分离、避免过多状态和业务代码集中在一个文件上。

基于 `useImperativeHandle`、可以相互传参。各组件拥有独立的状态、状态更新也不会造成其他组件重复执行。

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx" ></code>

## API

> 兄弟组件传值、监听推荐使用 `Event`，不要把 `useEffect` 当做 `wacth` 来用，尽量把变化写在事件中！

### 父组件调用

```ts
const funRef = useRef<OnShowInstance>();
funRef.current?.onShow(data); // 触发子组件方法onShow
funRef.current?.onHide(data); // 触发子组件方法onHide
funRef.current?.getChildData(); // 获取子组件数据

<ChildModel funcRef={funRef} />;
```

### 子组件调用

```ts
// <ChildModel funcRef={funRef} />;
/**
 *  parentData 父组件调用onShow传给子组件的参数
 *  setParentData 子组件执行方法，往内部ref存放数据、父组件使用getChildData函数获取子组件数据
 **/
const { parentData, setParentData } = useShow(funRef, {
  onShow: (data: Record<string, any>) => void, // 父组件执行onShow的时候触发
  onHide: (data: Record<string, any>) => void, // 父组件执行onHide的时候触发
  onFormart: (data:Record<string,any>) => any, // 格式化父组件调用onShow传入的参数parentData
});
```

### Params

|  参数   |         说明         |           类型           |
| :-----: | :------------------: | :----------------------: |
| funRef  | 从父组件传过来的 ref |    `UseShowInstance`     |
| options |       配置参数       | ` UseShowOptions<T=any>` |

### Result

| 参数                             | 说明                                             | 类型            |
| -------------------------------- | ------------------------------------------------ | --------------- |
| `{ parentData , setParentData }` | 父组件调用 onShow 传入的数据传给父组件数据的方法 | `UseShowResult` |

### 导出类型

```ts
type UseShowInstance<T = any> = {
  onShow: (data: any) => void;
  onHide: (data: any) => void;
  getChildData: () => any;
};

type UseShowInstanceRef = React.MutableRefObject<UseShowInstance | undefined>;

type UseShowOptions<T> = {
  /** show触发事件 */
  onShow: (data: T) => void;
  /** 格式化data */
  onFormart?: (data: T) => T;
  /** hide触发事件 */
  onHide?: (data?: any) => void;
};

type UseShowResult = {
  parentData: Record<string, any>;
  setParentData: <T = any>(data: T) => void;
};
```
