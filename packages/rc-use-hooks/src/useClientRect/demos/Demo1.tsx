/**
 * title: 基础用法
 * desc: 获取 h1 元素大小及其相对于视口的位置。
 */

import { useClientRect } from 'rc-use-hooks';

function Demo() {
  const [rect, ref] = useClientRect();
  return (
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null && (
        <>
          <span>rect: </span>
          <pre>{JSON.stringify(rect, null, 4)}</pre>
        </>
      )}
    </>
  );
}

export default Demo;
