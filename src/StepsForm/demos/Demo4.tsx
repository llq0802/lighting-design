import { message } from 'antd';
import type { LStepsFormActionRef } from 'lighting-design';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useEffect, useRef } from 'react';
import { awaitTime } from '../../_test';

const formValue = {
  name1: '李青',
  name2: '蛮王',
  phone1: '123456789',
  phone2: '987654321',
};

const Demo4 = () => {
  const actionRef = useRef<LStepsFormActionRef>();

  useEffect(() => {
    actionRef.current.formInstanceList.forEach((item, index) => {
      item.setFieldsValue(formValue);
    });
  }, []);

  return (
    <div>
      <LStepsForm
        actionRef={actionRef}
        onFinish={async (valuse) => {
          console.log('StepsForm-valuse', valuse);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
        formProps={{ labelWidth: 90 }}
        submitter={{ buttonAlign: 90 }}
      >
        <LStepsForm.StepForm
          title="步骤1"
          onFinish={async (values) => {
            await awaitTime();
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
        <LStepsForm.StepForm
          title="步骤2"
          onFinish={async (values) => {
            console.log('步骤2', values);
          }}
        >
          <LFormItemInput
            name="phone1"
            label="手机号1"
            required
            tooltip="禁止空格 只能输入数字"
            type="phone"
          />
          <LFormItemInput
            name="phone2"
            label="手机号2"
            required
            tooltip="禁止空格 只能输入数字"
            type="phone2"
          />
        </LStepsForm.StepForm>
      </LStepsForm>
    </div>
  );
};

export default Demo4;
