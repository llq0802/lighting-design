import { Button, Drawer, message } from 'antd';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useState } from 'react';
import { awaitTime } from '../../../../_utils';

const Demo7 = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        打开抽屉
      </Button>

      <LStepsForm
        onFinish={async (valuse) => {
          await awaitTime();
          console.log('StepsForm-valuse', valuse);
          message.success('提交成功');
        }}
        stepsFormRender={(stepsDom, formDom, submitterDom) => {
          return (
            <Drawer
              width={600}
              title="抽屉中的步骤表单"
              placement="right"
              onClose={onClose}
              open={open}
              footer={<div style={{ textAlign: 'center' }}>{submitterDom}</div>}
            >
              {stepsDom}
              {formDom}
            </Drawer>
          );
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
    </>
  );
};

export default Demo7;
