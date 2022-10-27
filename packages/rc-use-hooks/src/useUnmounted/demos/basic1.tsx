/**
 * title: 基础用法
 * desc: 在组件卸载时，执行方法。
 */

import { Button, message } from 'antd';
import { useUnmounted } from 'rc-use-hooks';
import { useState } from 'react';

const MyComponent = () => {
  useUnmounted(() => {
    message.info('MyComponent组件卸载');
  });

  return <div>我是MyComponent组件</div>;
};

function Demo() {
  const [state, toggle] = useState(true);

  return (
    <>
      <Button onClick={() => toggle((s) => !s)}>{state ? 'unmount' : 'mount'}</Button>
      {state && <MyComponent />}
    </>
  );
}

export default Demo;
