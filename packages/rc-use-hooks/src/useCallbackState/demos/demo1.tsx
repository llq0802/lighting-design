import { Button } from 'antd';
import { useCallbackState } from 'rc-use-hooks';
import type { FC } from 'react';

const Demo: FC = () => {
  const [count, setcount] = useCallbackState<number>(0);

  const onClick = () => {
    setcount(count + 1, (newCount) => {
      // 更新完成后执行一些回调操作
      console.log('newCount', newCount);
    });
  };

  return (
    <>
      <Button onClick={onClick}>点击</Button>
      <div>count: {count}</div>
    </>
  );
};

export default Demo;
