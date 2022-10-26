/**
 * title: 基础用法
 * desc: 组件卸载后不再更新 `state`
 */
import { Button } from 'antd';
import { useIsMounted } from 'rc-use-hooks';
import * as React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const mountedRef = useIsMounted();

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (mountedRef.current) {
        setCount((n) => n + 1);
        return;
      }
      return () => {
        clearInterval(timer);
      };
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>计数：{count}</div>;
};

function Demo() {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <Button onClick={() => setVisible((x) => !x)}>点击切换显示/隐藏</Button>
      {visible && <Counter />}
    </>
  );
}

export default Demo;
