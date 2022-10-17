import { useLatest } from 'rc-use-hooks';
import { useState } from 'react';

const demo1 = () => {
  const [value, setValue] = useState(0);
  const latestValue = useLatest(value);

  return <div>latestValue:{latestValue}</div>;
};

export default demo1;
