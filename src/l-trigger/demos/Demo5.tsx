import { LTrigger } from 'lighting-design';
import MyLCardGroup from './components/my-lcard-group';

const Demo5 = () => {
  return (
    <div>
      <h3>单选-LCardGroup</h3>
      <LTrigger mode="radio" defaultValue={{ value: '1', label: '支付宝' }}>
        <MyLCardGroup />
      </LTrigger>
      <h3>单选Tag-LCardGroup</h3>
      <LTrigger mode="radioTag">
        <MyLCardGroup />
      </LTrigger>
      <h3>多选-LCardGroup</h3>
      <LTrigger mode="checkbox">
        <MyLCardGroup />
      </LTrigger>
      <h3>多选Tag-LCardGroup</h3>
      <LTrigger mode="checkboxTag">
        <MyLCardGroup />
      </LTrigger>
    </div>
  );
};
export default Demo5;
