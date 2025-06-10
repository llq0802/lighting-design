import { message } from 'antd';
import type { LStepsFormActionRef } from 'lighting-design';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useRef } from 'react';
import { sleep } from '../../test';

const Demo2 = () => {
  const actionRef = useRef<LStepsFormActionRef>();

  return (
    <div>
      <LStepsForm
        destroyStepForm
        actionRef={actionRef}
        onFinish={async (valuse) => {
          console.log('StepsForm-valuse', valuse);
          await sleep();
          message.success('提交成功');
          return true;
        }}
        formProps={{ labelWidth: 90 }}
        submitter={{ buttonAlign: 'center' }}
      >
        <LStepsForm.StepForm
          name="StepsFo5rm11287921"
          title="步骤1"
          onFinish={async (values) => {
            await sleep();
            console.log('步骤1', values);
          }}
        >
          <LFormItemInput name="name1" label="名字1" required tooltip="禁止空格" />
          <LFormItemInput name="name2" label="名字2" required tooltip="禁止空格" />
        </LStepsForm.StepForm>
        <LStepsForm.StepForm
          name="Steps4Form227222"
          title="步骤2"
          // 在最后一步的表单项中一般不建议配置
          // onFinish={async (values) => {
          //   console.log('步骤2', values);
          // }}
        >
          <LFormItemInput name="phone1" label="手机号" required tooltip="禁止空格 只能输入数字" type="phone" />
        </LStepsForm.StepForm>
      </LStepsForm>
    </div>
  );
};

export default Demo2;
