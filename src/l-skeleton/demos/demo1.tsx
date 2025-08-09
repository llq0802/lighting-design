import { useMount } from 'ahooks';
import { Button, Divider } from 'antd';
import { LSkeleton } from 'lighting-design';
import { useState } from 'react';
const Demo1 = () => {
  const [loading, setLoading] = useState(true);
  const reload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useMount(() => {
    reload();
  });

  return (
    <div>
      <Button
        onClick={() => {
          reload();
        }}
      >
        刷新
      </Button>
      <Divider></Divider>
      <LSkeleton loading={loading}>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore nemo molestiae, iste, nisi vero quis
        </p>
      </LSkeleton>
    </div>
  );
};

export default Demo1;
