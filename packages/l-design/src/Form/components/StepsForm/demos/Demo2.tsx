import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useEffect, useRef } from 'react';

const Demo2 = () => {
  const actionRef = useRef();

  useEffect(() => {
    // console.log('actionRef', actionRef.current);
  }, []);

  return (
    <LStepsForm
      actionRef={actionRef}
      onFinish={async (valuse) => {
        console.log('StepsForm-valuse', valuse);
      }}
      submitter={{
        buttonAlign: 'center',
      }}
    >
      <LStepsForm.StepForm title="步骤1">
        <LFormItemInput name={['step1', 'name1']} label="名字1" required tooltip="禁止空格" />
        <LFormItemInput name={['step1', 'name2']} label="名字2" required tooltip="禁止空格" />
      </LStepsForm.StepForm>
      <LStepsForm.StepForm title="步骤2">
        <LFormItemInput
          name={['step2', 'phone']}
          label="手机号"
          required
          tooltip="禁止空格 只能输入数字"
          type="phone"
        />
      </LStepsForm.StepForm>
    </LStepsForm>
  );
};

export default Demo2;
