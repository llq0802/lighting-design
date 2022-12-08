import { Space } from 'antd';
import LTrigger from '..';
import ChildTable1 from './ChildTable1';

import ChildTable2 from './ChildTable2';

const Demo1 = () => {
  return (
    <div className="trigger-box">
      <Space>
        <span>单选</span>
        <LTrigger allowClear>
          <ChildTable1 />
        </LTrigger>
        <span>多选</span>
        <LTrigger allowClear placement="topLeft">
          <ChildTable2 />
        </LTrigger>
      </Space>
    </div>
  );
};
export default Demo1;
