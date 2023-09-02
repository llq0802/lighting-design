import { LTrigger } from 'lighting-design';
import ChildTable1 from './ChildTable1';
import ChildTable2 from './ChildTable2';
import ChildTable5 from './ChildTable5';

const Demo1 = () => {
  return (
    <div>
      <h4>表格单选</h4>
      <LTrigger>
        <ChildTable1 />
      </LTrigger>
      <br />
      <h4>表格多选1</h4>
      <LTrigger width="50%">
        <ChildTable2 />
      </LTrigger>
      <h4>表格多选2</h4>
      <LTrigger width="50%" overlayArrow>
        <ChildTable5 />
      </LTrigger>
    </div>
  );
};
export default Demo1;
