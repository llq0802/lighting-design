import { LFormItemInput } from 'lighting-design';
import StepForm from '../components/StepForm';
import StepsForm from '../components/StepsForm';

const Demo2 = () => {
  return (
    <StepsForm
      onFinish={(valuse) => {
        console.log('valuse', valuse);
      }}
    >
      <StepForm name="step1" title="步骤1">
        <LFormItemInput
          name="name"
          label="名字"
          required
          tooltip="禁止空格"
          disabledWhiteSpace
          alignItems="end"
        />
      </StepForm>
      <StepForm name="step2" title="步骤2">
        <LFormItemInput
          name="phone"
          label="手机号"
          required
          tooltip="禁止空格 只能输入数字"
          type="phone"
          disabledWhiteSpace
        />
      </StepForm>
    </StepsForm>
  );
};

export default Demo2;
