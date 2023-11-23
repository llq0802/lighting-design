import { useMount } from 'ahooks';
import { useRef } from 'react';

const list = [1, 2, 3];

const Demo = () => {
  const ref = useRef([]);

  useMount(() => {
    if (ref.current) {
      console.log('ref.current', ref.current);
    }
  });
  return (
    <div>
      {list.map((item) => (
        <div
          key={item}
          ref={(r) => {
            ref.current.push(r);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Demo;
