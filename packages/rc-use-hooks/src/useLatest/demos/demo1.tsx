import { Button, Space } from 'antd';
import { useLatest } from 'rc-use-hooks';
import * as React from 'react';

function Demo() {
  const [count, setCount] = React.useState(0);
  const latestCount = useLatest(count);
  const timer = React.useRef<any>(null);

  const handleAlertClick = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      alert(`最新的 count 值为：${latestCount.current}`);
    }, 3000);
  };

  return (
    <div>
      <p>点击 {latestCount.current} 次</p>
      <Space>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          点我
        </Button>
        <Button onClick={handleAlertClick}>点击3秒后弹窗显示点击次数</Button>
      </Space>
    </div>
  );
}

export default Demo;
