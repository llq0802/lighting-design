import { message } from 'antd';
import type { LStepsFormActionRef } from 'lighting-design';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useRef, useState } from 'react';
import { awaitTime } from '../../_test';

const Demo2 = () => {
  const actionRef = useRef<LStepsFormActionRef>();
  const [stepCurrent, setStepCurrent] = useState(0);

  return (
    <div>
      <LStepsForm
        formProps={{ labelWidth: 90 }}
        submitter={{ buttonAlign: 'right' }}
        actionRef={actionRef}
        current={stepCurrent}
        onCurrentChange={(num) => {
          console.log('num', num);
          setStepCurrent(num);
        }}
        onFinish={async (valuse) => {
          console.log('StepsForm-valuse', valuse);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
      >
        <LStepsForm.StepForm
          name="StepsForm1"
          title="步骤1"
          onFinish={async (values) => {
            await awaitTime('', 200);
            console.log('步骤1', values);
          }}
        >
          <LFormItemInput
            name="name1"
            label="名字1"
            required
            tooltip="禁止空格"
          />
          <LFormItemInput
            name="name2"
            label="名字2"
            required
            tooltip="禁止空格"
          />
        </LStepsForm.StepForm>
        <LStepsForm.StepForm name="StepsForm2" title="步骤2">
          <LFormItemInput
            name="phone1"
            label="手机号"
            type="phone"
            required
            tooltip="禁止空格 只能输入数字"
          />
        </LStepsForm.StepForm>
      </LStepsForm>
    </div>
  );
};

export default Demo2;
