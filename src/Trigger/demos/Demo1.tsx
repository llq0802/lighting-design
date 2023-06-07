import { LTrigger } from 'lighting-design';
import ChildTable1 from './ChildTable1';
import ChildTable2 from './ChildTable2';

const Demo1 = () => {
  return (
    <div>
      <h4>表格单选</h4>
      <LTrigger allowClear>
        <ChildTable1 />
      </LTrigger>
      <br />
      <br />
      <br />
      <h4>表格多选</h4>
      <LTrigger placement="topLeft">
        <ChildTable2 />
      </LTrigger>
    </div>
  );
};
export default Demo1;
