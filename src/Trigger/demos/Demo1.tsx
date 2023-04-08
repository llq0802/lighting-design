import { LTrigger } from 'lighting-design';
import React from 'react';
import ChildTable1 from './ChildTable1';
import ChildTable2 from './ChildTable2';

const Demo1 = () => {
  return (
    <div>
      <h3>表格单选</h3>
      <LTrigger allowClear>
        <ChildTable1 />
      </LTrigger>
      <br />
      <br />
      <br />
      <h3>表格多选</h3>
      <LTrigger allowClear placement="topLeft">
        <ChildTable2 />
      </LTrigger>
    </div>
  );
};
export default Demo1;
