import { LTrigger } from 'lighting-design';
import MyTable from './MyTable';

const Demo4 = () => {
  return (
    <div>
      <h4>与 LTable 使用</h4>
      <LTrigger allowClear mode="tag">
        <MyTable />
      </LTrigger>
    </div>
  );
};
export default Demo4;
