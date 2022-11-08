import { NumberCount } from 'lighting-design';
import { FC, useEffect, useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Demo: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      // setCount(1234);
    }, 1000);
  }, []);

  return <NumberCount style={center} value={0} count={count} />;
};

export default Demo;
