import { LTrigger } from 'lighting-design';
import MyTable1 from './components/MyTable1';

const Demo4 = () => {
  return (
    <div>
      <h4> LTable 单选</h4>
      <LTrigger mode="radio">
        <MyTable1 />
      </LTrigger>
      <h4> LTable 单选Tag</h4>
      <LTrigger mode="radioTag" placement="right">
        <MyTable1 />
      </LTrigger>
      <h4> LTable 多选</h4>
      <LTrigger mode="checkbox" width="50%" placement="right">
        <MyTable1 />
      </LTrigger>
      <h4> LTable 多选Tag</h4>
      <LTrigger mode="checkboxTag" width="50%">
        <MyTable1 />
      </LTrigger>
    </div>
  );
};
export default Demo4;
