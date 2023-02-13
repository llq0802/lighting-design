import { LTrigger } from 'lighting-design';
import ChildTable1 from './ChildTable1';
import ChildTable2 from './ChildTable2';

const Demo1 = () => {
  return (
    <>
      <h3>单选</h3>
      <LTrigger allowClear>
        <ChildTable1 />
      </LTrigger>
      <br />
      <br />
      <br />
      <h3>多选</h3>
      <LTrigger allowClear placement="topLeft">
        <ChildTable2 />
      </LTrigger>
    </>
  );
};
export default Demo1;
