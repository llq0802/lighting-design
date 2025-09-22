import { LTrigger } from 'lighting-design';
import MyLTagGroup from './components/my-ltag-group';

const options = [
  { value: '1', label: '香蕉' },
  { value: '2', label: '苹果' },
  { value: '3', label: '葡萄' },
];

const Demo6 = () => {
  return (
    <div>
      <h3>单选-LTagGroup</h3>
      <LTrigger mode="radio">
        <MyLTagGroup />
      </LTrigger>
      <h3>单选Tag-LTagGroup</h3>
      <LTrigger mode="radioTag">
        <MyLTagGroup />
      </LTrigger>
      <h3>多选-LTagGroup</h3>
      <LTrigger mode="checkbox" split=" , ">
        <MyLTagGroup />
      </LTrigger>
      <h3>多选Tag-LTagGroup</h3>
      <LTrigger mode="checkboxTag">
        <MyLTagGroup />
      </LTrigger>
    </div>
  );
};
export default Demo6;
