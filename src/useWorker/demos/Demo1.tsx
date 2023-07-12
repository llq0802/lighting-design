import { Button, message } from 'antd';
import { useWorker } from 'lighting-design';
import { useState } from 'react';

const numbers = [...Array(5000000)].map((e) => ~~(Math.random() * 1000000));

const sortNumbers = (nums) => {
  // 无法访问 DOM 节点 可以进行网络请求,耗时操作
  return nums.sort();
};

export default function Demo1() {
  const [loading, setLoading] = useState(false);
  const [sortWorker, { status: sortWorkerStatus, kill: killWorker }] =
    useWorker(sortNumbers);

  const runSort = async () => {
    setLoading(true);
    const result = await sortWorker(numbers); // 耗时操作不会阻塞 UI
    // const result = sortNumbers(numbers);   // 耗时操作会阻塞 UI
    // console.log('document ', document.body); //这儿可以访问DOM
    setLoading(false);
    message.success('耗时计算完成');
  };

  return (
    <div>
      <Button loading={loading} type="primary" onClick={runSort}>
        执行耗时操作
      </Button>
    </div>
  );
}
