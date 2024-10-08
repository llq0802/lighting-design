import { useMount } from 'ahooks';
import { Button, Divider } from 'antd';
import { LSkeleton } from 'lighting-design';
import { useState } from 'react';
const Demo1 = () => {
  const [loading, setLoading] = useState(true);
  const reset = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };
  useMount(() => {
    reset();
  });
  return (
    <div>
      <Button
        onClick={() => {
          reset();
        }}
      >
        刷新
      </Button>
      <Divider></Divider>
      <LSkeleton loading={loading} itemHeight={30} gap={16} topSkeleton>
        <h3>这是标题</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore nemo molestiae, iste, nisi vero quis
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore nemo molestiae, iste, nisi vero quis
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore nemo molestiae, iste, nisi vero quis
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore nemo molestiae, iste, nisi vero quis
        </p>
      </LSkeleton>
    </div>
  );
};

export default Demo1;
