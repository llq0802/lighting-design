---
title: useShow
order: 3
group:
  path: /other
nav:
  order: 3
  path: /hooks
---

# useShow

父组件通过 ref 唤起子组件 _(包括兄弟组件)_、用于业务功能代码分离、避免过多状态和业务代码集中在一个文件上。

基于 `useImperativeHandle`、可以相互传参。各组件拥有独立的状态、`状态更新也不会造成其他组件重复执行`。

## 代码演示

### 基础用法

<code src="./demos/demo1.tsx"  />

## API

### 父组件调用

```ts
const funRef = useRef<OnShowInstance>(null);
funRef.current?.onShow(data); // 触发子组件方法onShow
funRef.current?.onHide(); // 触发子组件方法onHide
funRef.current?.getChildData(); // 获取子组件数据

<ChildModel funcRef={funRef} />;
```

### 子组件调用

```ts
/**
 *  parentData 父组件传给子组件的参数
 *  setParentData 子组件执行方法，往内部ref存放数据、父组件使用getChildData函数获取子组件数据
 **/
const { parentData, setParentData } = useShow(funRef, {
  onShow: (parentData: Record<string, any>) => void, // 父组件执行onShow的时候触发
  onHide: (parentData: Record<string, any>) => void, // 父组件执行onShow的时候触发
  onFormart: (parentData:Record<string,any>) => any, // 格式化父组件调用onShow传入的参数
});
```

### Params

|  参数   |         说明         |           类型           |
| :-----: | :------------------: | :----------------------: |
| funRef  | 从父组件传过来的 ref |    `UseShowInstance`     |
| options |       配置参数       | ` UseShowOptions<T=any>` |

### Result

| 参数                      | 说明                                             | 类型            |
| ------------------------- | ------------------------------------------------ | --------------- |
| `{parentData,parentData}` | 父组件调用 onShow 传入的数据与穿给组件数据的方法 | `UseShowResult` |

```ts
type UseShowInstance<T = any> = {
  onShow: (record: T) => void;
  onHide: (data?: any) => void;
  getChildData: () => any;
};

type UseShowInstanceRef<T = any> = RefObject<UseShowInstance<T>>;

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
