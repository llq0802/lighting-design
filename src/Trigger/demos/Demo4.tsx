import { LTrigger } from 'lighting-design';
import MyTable1 from './MyTable1';
import MyTable2 from './MyTable2';

const Demo4 = () => {
  return (
    <>
      <div>
        <h4> LTable 多选</h4>
        <LTrigger mode="tag">
          <MyTable2 />
        </LTrigger>
      </div>
      <div>
        <h4> LTable 单选</h4>
        <LTrigger mode="tag">
          <MyTable1 />
        </LTrigger>
      </div>
    </>
  );
};
export default Demo4;
