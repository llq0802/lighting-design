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

父组件通过 ref 唤起子组件、用于业务功能代码分离、避免过多状态和业务代码集中在一个文件上。

基于 useImperativeHandle、可以相互传参。各组件拥有独立的状态、`状态更新也不会造成其他组件重复执行`。

## 代码演示

### 基础用法

<code src="./demos/demo1.tsx"  />

## API

```typescript
//父组件
const funRef = useRef<OnShowInstance>(null);
funRef.current?.onShow({name:'李岚清',age:'25})
<ChildModel funcRef={funRef} />;

//子组件

const { parentData, setParentData } = useShow(funcRef, {
  onShow: (data: Record<string, any>) => {
    console.log('父组件调用了onShow并传参数 ', data); // {name:'李岚清',age:'25}
  },
});
```

### 父组件调用

```ts
funRef.current?.onShow(data); // 触发子组件方法onShow
funRef.current?.onHide(); // 触发子组件方法onHide
funRef.current?.getChildData(); // 获取子组件数据
```

### 子组件调用

```ts
/**
 *  record 父组件传给子组件的参数
 *  onCallback 子组件执行方法，往ref存放数据、父组件使用getData获取数据
 **/
const { parentData, setParentData } = useShow(funRef, {
  onShow: () => void, // 父组件执行onShow的时候触发
  onHide: () => void, // 父组件执行onShow的时候触发
  onFormart: (data:Record<string,any>) => any, // 格式化父组件调用onShow传入的参数
});
```

### Params

| 参数  | 说明       | 类型 | 默认值 |
| ----- | ---------- | ---- | ------ |
| state | state 的值 | -    | -      |

### Result

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| setState | 第一个参数传入新的 state,第二个参数为回调函数接受最新传入的 state | (newState: SetStateAction<T>, cb: (newState: T) => void) => void; | - |

### OnShowInstance
