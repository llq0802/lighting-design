import { Button, Drawer, message, Space } from 'antd';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useState } from 'react';
import { sleep } from '../../test';

const Demo7 = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => setOpen1(true)}>
          打开抽屉1
        </Button>
        <Button type="primary" onClick={() => setOpen2(true)}>
          打开抽屉2
        </Button>
      </Space>

      {/* 方式一 */}
      <LStepsForm
        onFinish={async (valuse) => {
          await sleep();
          console.log('StepsForm-valuse', valuse);
          message.success('提交成功');
        }}
        stepsFormRender={(stepsDom, formDom, submitterDom) => {
          return (
            <Drawer
              width={600}
              title="抽屉中的步骤表单1"
              placement="right"
              onClose={() => setOpen1(false)}
              open={open1}
              footer={<div style={{ textAlign: 'center' }}>{submitterDom}</div>}
            >
              {stepsDom}
              {formDom}
            </Drawer>
          );
        }}
      >
        <LStepsForm.StepForm title="步骤1" name="dsafui">
          <LFormItemInput name={['step1', 'name1']} label="名字1" required tooltip="禁止空格" />
          <LFormItemInput name={['step1', 'name2']} label="名字2" required tooltip="禁止空格" />
        </LStepsForm.StepForm>
        <LStepsForm.StepForm title="步骤2" name="dslhjafui">
          <LFormItemInput
            name={['step2', 'phone']}
            label="手机号"
            required
            tooltip="禁止空格 只能输入数字"
            type="phone"
          />
        </LStepsForm.StepForm>
      </LStepsForm>
      {/* 方式二 */}
      <Drawer height={330} placement="bottom" title="抽屉中的步骤表单1" onClose={() => setOpen2(false)} open={open2}>
        <LStepsForm
          onFinish={async (valuse) => {
            await sleep();
            console.log('StepsForm-valuse', valuse);
            message.success('提交成功');
            setOpen2(false);
            return true;
          }}
        >
          <LStepsForm.StepForm title="步骤1" name="dslhjaf1423ui">
            <LFormItemInput name={['step1', 'name1']} label="名字1" required tooltip="禁止空格" />
            <LFormItemInput name={['step1', 'name2']} label="名字2" required tooltip="禁止空格" />
          </LStepsForm.StepForm>
          <LStepsForm.StepForm title="步骤2" name="dslaf423ui">
            <LFormItemInput
              name={['step2', 'phone']}
              label="手机号"
              required
              tooltip="禁止空格 只能输入数字"
              type="phone"
            />
          </LStepsForm.StepForm>
        </LStepsForm>
      </Drawer>
    </div>
  );
};

export default Demo7;
