import { LTrigger } from 'lighting-design';
import MyTable1 from './components/my-table1';

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
      <LTrigger
        mode="checkboxTag"
        width="50%"
        // 最多显示多少个 tag，响应式模式会对性能产生损耗
        // maxTagCount="responsive"
      >
        <MyTable1 />
      </LTrigger>
    </div>
  );
};
export default Demo4;
