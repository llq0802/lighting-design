/**
 * title: 防止重复提交
 * desc: 在请求完成之前，重复点击请求都会被忽略。
 */

import { Button, message } from 'antd';
import { useLockAsyncFn } from 'rc-use-hooks';
import { useState } from 'react';

function mockRequest() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default () => {
  const [count, setCount] = useState(0);
  const submit = useLockAsyncFn(async (params) => {
    message.info(`开始请求${params}`);
    await mockRequest();
    setCount((val) => val + 1);
    message.success('请求成功');
  });

  return (
    <>
      <p>请求次数: {count}</p>
      <Button onClick={() => submit('99')}>Submit</Button>
    </>
  );
};
