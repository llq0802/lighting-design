import { Button } from 'antd';
import { useSafeState } from 'rc-use-hooks';
import { useEffect, useState } from 'react';

const Child = () => {
  const [value, setValue] = useSafeState<string>();

  useEffect(() => {
    setTimeout(() => {
      setValue('data loaded from server');
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const text = value || '组件Loading 5s...';

  return <div>{text}</div>;
};

export default () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && <Child />}
      <Button onClick={() => setVisible(false)}>Unmount</Button>
      <Button onClick={() => setVisible(true)}>mount</Button>
    </div>
  );
};
