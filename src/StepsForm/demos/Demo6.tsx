import { Button, message, Modal } from 'antd';
import type { LStepsFormActionRef } from 'lighting-design';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useRef, useState } from 'react';
import { awaitTime } from '../../_test';

const Demo2 = () => {
  const actionRef = useRef<LStepsFormActionRef>();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setOpen1(true)}>
        不合并每个表单的值并且LStepsForm.StepForm 没有设置 name 属性,以每个
        LStepsForm.StepForm 的索引作为键
      </Button>
      <br />
      <br />
      <br />
      <Button type="primary" onClick={() => setOpen2(true)}>
        不合并每个表单的值并且LStepsForm.StepForm 设置 name 属性,以每个
        LStepsForm.StepForm 的name作为键
      </Button>

      <LStepsForm
        isMergeValues={false}
        actionRef={actionRef}
        onFinish={async (valuse) => {
          await awaitTime();
          console.log('StepsForm-valuse', valuse);
          message.success('提交成功');
        }}
        stepsFormRender={(stepsDom, formDom, submitterDom) => {
          return (
            <Modal
              title="弹窗中的步骤表单"
              open={open1}
              footer={submitterDom}
              width={600}
              onCancel={() => setOpen1(false)}
            >
              {stepsDom}
              {formDom}
            </Modal>
          );
        }}
      >
        <LStepsForm.StepForm name="step1-1" title="步骤1">
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
        <LStepsForm.StepForm name="step2-24" title="步骤2">
          <LFormItemInput
            name="phone"
            label="手机号"
            required
            tooltip="禁止空格 只能输入数字"
            type="phone"
          />
        </LStepsForm.StepForm>
      </LStepsForm>
      <LStepsForm
        isMergeValues={false}
        actionRef={actionRef}
        onFinish={async (valuse) => {
          await awaitTime();
          console.log('StepsForm-valuse', valuse);
          message.success('提交成功');
        }}
        stepsFormRender={(stepsDom, formDom, submitterDom) => {
          return (
            <Modal
              title="弹窗中的步骤表单"
              open={open2}
              footer={submitterDom}
              width={600}
              onCancel={() => setOpen2(false)}
            >
              {stepsDom}
              {formDom}
            </Modal>
          );
        }}
      >
        <LStepsForm.StepForm title="步骤1" name="fsd">
          <LFormItemInput
            name="name11"
            label="名字1"
            required
            tooltip="禁止空格"
          />
          <LFormItemInput
            name="name21"
            label="名字2"
            required
            tooltip="禁止空格"
          />
        </LStepsForm.StepForm>
        <LStepsForm.StepForm title="步骤2" name="123jhg123">
          <LFormItemInput
            name="phone4"
            label="手机号"
            required
            tooltip="禁止空格 只能输入数字"
            type="phone"
          />
        </LStepsForm.StepForm>
      </LStepsForm>
    </div>
  );
};

export default Demo2;
