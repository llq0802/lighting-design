import { LForm, LFormItemInput } from 'lighting-design';
import StepsForm from '../components/StepsForm';

const Demo2 = () => {
  return (
    <StepsForm>
      <LForm name="step1" title="步骤1">
        <LFormItemInput
          name="name"
          label="名字"
          required
          tooltip="禁止空格"
          disabledWhiteSpace
          alignItems="end"
          contentAfter={<div>后面</div>}
        />
      </LForm>
      <LForm name="step2" title="步骤2">
        <LFormItemInput
          name="phone"
          label="手机号"
          required
          tooltip="禁止空格 只能输入数字"
          type="phone"
          disabledWhiteSpace
          contentAfter={<div>后面</div>}
        />
      </LForm>
    </StepsForm>
  );
};

export default Demo2;
