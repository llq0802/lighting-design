import { useCallbackState } from 'rc-use-hooks';
import type { FC } from 'react';

const Demo1: FC = () => {
  const [count, setcount] = useCallbackState<number>(0);

  const onClick = () => {
    setcount(count + 1, (newCount) => {
      // 更新完成后执行一些回调操作
      console.log('newCount', newCount);
    });
  };

  return <div onClick={onClick}>count: {count}</div>;
};

export default Demo1;
