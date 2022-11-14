import { useState } from 'react';
import Trigger from '..';

import ChildTable from './ChildTable';

const Demo1 = () => {
  const [opts, setOpts] = useState();

  return (
    <div className="trigger-box">
      <Trigger allowClear>
        <ChildTable />
      </Trigger>
    </div>
  );
};
export default Demo1;
