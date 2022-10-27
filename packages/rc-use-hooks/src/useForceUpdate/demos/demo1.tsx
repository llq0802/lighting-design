import { Button } from 'antd';
import { useForceUpdate } from 'rc-use-hooks';

const Demo = () => {
  const forceUpdate = useForceUpdate();

  return (
    <>
      <p style={{ color: 'gray' }}>时间戳（监测是否触发更新渲染）：{Date.now()}</p>
      <Button onClick={forceUpdate}>强制更新</Button>
    </>
  );
};

export default Demo;
