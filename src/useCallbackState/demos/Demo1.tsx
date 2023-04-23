import { Button, message } from 'antd';
import { useCallbackState } from 'lighting-design';
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
    <div>
      <p>当前count: {count}</p>
      <Button onClick={onClick} type="primary">
        点击增加count后做操作
      </Button>
    </div>
  );
};

export default Demo;
