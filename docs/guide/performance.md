---
title: React 应用开发指南
order: 6
---

# React 应用开发常见性能优化手段

## 前言

- 不要过早去关注性能优化，否则会陷入地域 !!!
- 性能优化应该遵循的基本法则：将变的部分和不变的部分分离。

  - `state`
  - `props`
  - `context`

- function 组件函数本身是中间转换的必须是纯函数。
- 所有组件内部状态的转换都应该归于纯函数中，不要把 `useEffect` 当成 `watch` 来用
- 尽可能在 `事件` 中执行 `setState，以确保可预测的` `state` 变化，例如：
  - `onClick` 等事件
  - `Promise`
  - `setTimeout`
  - `setInterval`
- 依赖项为空数组的 `useEffect` 中，可以放心调用 `setState。`
- 不要同时使用一堆` 依赖项` 和 多个 `useEffect` !!!

- `props` 和 `context` 都是基于 `state` 演变过来的。父组件的 `state` 传给子组件，就成为了子组件的 `props；` 父组件的 `state` 传到了 `context` 里，就成为一个子孙组件的 `context` 了。

### 怎么快速判断组件发生重绘

```ts
import React from 'react';

const Logger = (props) => {
  console.log(`${props.label} rendered`);
  return <h3>{Date.now()}</h3>;
};

export default () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <button onClick={increment}>The count is {count}</button>
      <Logger label="counter" />
    </div>
  );
};
```

### 1. state 尽可能地下放到子组件 (状态往下移)

```ts
import React from 'react';

const Logger = (props) => {
  console.log(`${props.label} rendered`);
  return <div>{Date.now()}</div>;
};

export default () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <button onClick={increment}>The count is {count}</button>
      <Logger label="counter" />
    </div>
  );
};
```

上面是一个很简单也是很常见的项目中的写法，但是当我们点击按钮的时候，你会发现 Logger 也发生了重绘，但是当我们查看 Logger 的 props 时，我们很容易发现 Logger 的属性并没有发生变化。

**我们将上面的用例做一点修改，将 count 相关的变化，移动到一个平行的组件中**

```ts
import React from 'react';

const Logger = (props) => {
  console.log(`${props.label} rendered`);
  return <div>{Date.now()}</div>;
};

const Count = (props) => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>The count is {count}</button>;
};

export default () => {
  return (
    <div>
      <Count />
      <Logger label="counter" />
    </div>
  );
};
```

### 2. 组件作为父组件的属性 (内容往上提)

还是上面的用例，我们将 Logger 作为 Count 的属性，传递到 Count 中，最终渲染的页面还是一样的，但是点击按钮同样不会导致 Logger 重绘。（注意时间戳没有变化）

```ts
import React from 'react';

const Logger = (props) => {
  console.log(`${props.label} rendered`);
  return <div>{Math.random()}</div>;
};

const Count = (props) => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <button onClick={increment}>The count is {count}</button>
      {props.logger}
    </div>
  );
};

export default () => <Count logger={<Logger label="counter" />} />;
```

### 3. Context 性能优化

跨层级传递数据，通常会使用 React Context 作为媒介，hooks 提出之后，使用 context 前所未有的方便，但同样地，context payload 变更会触发所有用到了这个 Context 的组件重新渲染，即使这个组件用到的那部分数据没有发生变化。

我们还是看一个最简单的 react Context 的用法，甚至是 react 官网的用例。

```ts
import React, { createContext, StrictMode, useContext } from 'react';

const MyContext = createContext<any>(null);

const Logger = (props) => {
  return <div>{Math.random()}</div>;
};

const Count = (props) => {
  const { count, setCount } = useContext(MyContext);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <button onClick={increment}>The count is {count}</button>
    </div>
  );
};

const Body = (props) => (
  <div>
    <div>Counter</div>
    <Count />
    <Count />
    <div>Logger</div>
    <Logger />
  </div>
);

export default () => {
  const [count, setCount] = React.useState(0);
  return (
    <StrictMode>
      <MyContext.Provider value={{ count, setCount }}>
        <Body />
      </MyContext.Provider>
    </StrictMode>
  );
};
```

当我们点击按钮时，会导致 count 变化，因此所有关联了 count 的组件都会发生重绘，这是正确的行为，但是如果你留心观察的话，你就会发现，当 count 变化的时候，Logger 也发生了重绘。

可是我们的 Logger 并没有关联 Context，它发生重绘，就是个 bug 了。而且非常影响整个页面的性能。因为一般我们的 MyContext.Provider 会在很顶层的位置使用它，甚至大部分情况，我们会在整个组件的最顶层用到它，这意味着每次属性变化，将会导致所有的组件发生重绘。

**其实要解决这个问题，我们只需要简单的将 Provider 封装成一个简单的组件，**

```ts
const Provider = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <MyContext.Provider value={{ count, setCount }}>
      {props.children}
    </MyContext.Provider>
  );
};
```

最终代码如下：

```ts
import React, { createContext, StrictMode, useContext } from 'react';

const MyContext = createContext<any>(null);

const Logger = (props) => {
  return <div>{Math.random()}</div>;
};

const Count = (props) => {
  const { count, setCount } = useContext(MyContext);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <button onClick={increment}>The count is {count}</button>
    </div>
  );
};

const Body = (props) => (
  <div>
    <div>Counter</div>
    <Count />
    <Count />
    <div>Logger</div>
    <Logger />
  </div>
);

const Provider = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <MyContext.Provider value={{ count, setCount }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default () => {
  return (
    <StrictMode>
      <Provider>
        <Body />
      </Provider>
    </StrictMode>
  );
};
```

面我们可以看到，当我们关联了 Context 的时候，它的值变化导致的组件绘制，这种行为我们认为是正确的，但是其实组件重绘应该只发生在我们关心的数据变化，比如 Context 的 value 为 "{label,count}"。Count 关联 count 数据，Logger 关联 label 数据时，当 count 变化的时候，Logger 也不应该发生重绘制。

**要达到这个效果我们可以用 [use-context-selector](https://github.com/dai-shi/use-context-selector) 或 [React Tracked](https://react-tracked.js.org/) 代替 React.createContext**

### 4. 使用 useMemo 来缓存计算耗时的结果

如果在一个组件里面会调用一个计算特别耗时的函数，那么我们应该使用 useMemo 来缓存计算结果，以避免重复计算。

```ts
// 避免这样做
function Component(props) {
  const calcResult = heavyCalculation(props.item);

  return <AnotherComponent value={calcResult} />;
}

// 只有 `props.item` 改变时someProp的值才会被重新计算
function Component(props) {
  const calcResult = useMemo(() => heavyCalculation(props.item), [props.item]);

  return <AnotherComponent value={calcResult} />;
}
```

**也可使用 [ahooks/useCreation](https://ahooks.js.org/zh-CN/hooks/use-creation)，因为 useMemo 不能保证被 memo 的值一定不会被重计算，而 useCreation 可以保证这一点**

### 5. 避免使用内联对象和内联函数

使用内联对象时，react 会在每次渲染时重新创建对此对象的引用，这会导致接收此对象的组件将其视为不同的对象。因此，该组件对于 prop 的浅层比较始终返回 false，导致组件一直重新渲染。

```ts
function Component(props) {
  return <AnotherComponent style={{ margin: 0 }} {...props} />;
}
```

- 如果这个对象跟 props 无关，那么我们可以把它抽取出作为一个变量定义在组件外部；
- 如果这个对象跟 props 有关，那么我们可以用 useMemo 帮我们缓存这个对象，以避免重复创建。

```ts
// 跟props无关
const style = { margin: 0 };
function Component(props) {
  return <AnotherComponent style={style} {...props} />;
}

// 跟props有关
function Component(props) {
  const style = useMemo(() => ({ margin: props.margin }), [props.margin]);

  return <AnotherComponent style={style} {...props} />;
}
```

内联函数也是一样，组件每次渲染时都会创建一个新的引用。这时我们可以用 useCallback 进行包裹，以避免重复创建。

```ts
// bad
function Component(props) {
  return (
    <AnotherComponent
      {...props}
      onPress={() => {
        // do something...
      }}
    />
  );
}

// good
function Component(props) {
  const handlePress = useCallback(() => {
    // do something...
  }, []);

  return <AnotherComponent {...props} onPress={handlePress} />;
}
```

**推荐使用 [ahooks/useMemoizedFn](https://ahooks.js.org/zh-CN/hooks/use-memoized-fn)，它会自动帮你缓存函数的返回值，并且可以接受一个参数，用于指定缓存的依赖**

### 6. 延迟加载不是立即需要的组件

常见做法：

- 使用 React.lazy，在组件加载时才加载组件；

  ```ts
  const Component = React.lazy(() => import('./Component'));
  ```

  **推荐使用[react-loadable](https://github.com/jamiebuilds/react-loadable)**

- 基于路由进行代码分割
- 组件按需加载， 配合插件 `babel-plugin-import` 使用
- 尽量使用 ES 模块的公共库

### 7. 正确认识 props

我们知道，父组件传值给子组件有两种方式，第一种是通过 props，第二种是通过 context。

但是，即便一个子组件不接收任何 props，这并不意味着它的 props 不存在，相反，props 一直存在，这种情况下它是一个{}。

React 中是默认使用 `Object.is` (浅比价) 判断 props 是否相等的，所以即便是{}也不会被认为是相等的。这就导致 react 的性能优化没有被命中，从而子组件还是发生了重新渲染。

```ts
import React, { useState, useContext } from 'react';

const numCtx = React.createContext < number > 0;
const updateNumCtx = React.createContext<React.Dispatch<number>>(() => {});

function Button() {
  const updateNum = useContext(updateNumCtx); // updateNum是一个dispatch，它是不变的。
  console.log('btn render');
  return <button onClick={() => updateNum(Math.random())}>产生随机数</button>;
}

function Show() {
  const num = useContext(numCtx); // 用到了context里面的num，所以num改变时会触发重新渲染。
  return <p>num is: {num}</p>;
}

const Middle = () => {
  return (
    <>
      <Button />
      <Show />
    </>
  );
};

export default function App() {
  const [num, updateNum] = useState(0);

  return (
    <numCtx.Provider value={num}>
      <updateNumCtx.Provider value={updateNum}>
        <Middle />
      </updateNumCtx.Provider>
    </numCtx.Provider>
  );
}
```

如上代码所示，虽然 Middle 不接收任何 props，但是实际上 props 是{}, react 在用全等比较的时候，{}和{}不会认为是相等的，所以 APP 组件发生重新渲染的时候，Middle 组件也会跟着重新渲染，从而使它的 Button 子组件也跟着重新渲染。

我们可以使用`memo`或者`useMemo`来解决 Middle 组件的重新渲染问题。

```ts
// 使用memo
const Middle = React.memo(() => {
  return (
    <>
      <Button />
      <Show />
    </>
  );
});

// 使用useMemo
const Middle = () => {
  return useMemo(
    () => (
      <>
        <Button />
        <Show />
      </>
    ),
    [],
  );
};
```

> 如果 props 属性数量巨大，比较前后 props 的变化可能会比直接渲染更加耗时， memo useMemo useCallback 可能会更慢。
