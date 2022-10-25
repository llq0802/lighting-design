import { Button, message } from 'antd';
import { useCallbackState } from 'rc-use-hooks';
import type { FC } from 'react';

const Demo: FC = () => {
  const [count, setcount] = useCallbackState<number>(0);

  const onClick = () => {
    setcount(count + 1, (newCount) => {
      // 更新完成后执行一些回调操作
      console.log('newCount', newCount);
      message.info(`获取到最新count值是:${newCount}`);
    });
  };

  return (
    <>
      <div>当前count: {count}</div>
      <Button onClick={onClick}>点击增加count后做操作</Button>
    </>
  );
};

export default Demo;
