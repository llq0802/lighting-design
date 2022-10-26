/**
 * title: 并发请求 默认3个同时请求
 * desc: 响应到一个请求结果后会继续请求
 */

import { Button } from 'antd';
import { useConcurrentRequest } from 'rc-use-hooks';

const arrFns: any = [];

function mockRequest() {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve('成功');
    }, 1000);
  });
}

for (let i = 0; i < 7; i++) {
  arrFns.push(mockRequest);
}

export default () => {
  const { run, loading } = useConcurrentRequest(arrFns);

  return (
    <>
      <p>当前请求状态: {loading ? '请求中...' : '请求完成'}</p>
      <Button
        disabled={loading}
        onClick={async () => {
          const retArr = await run();
          console.log(' retArr', retArr);
        }}
      >
        Submit
      </Button>
    </>
  );
};
