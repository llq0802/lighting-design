import { Button, message, Modal } from 'antd';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useRef, useState } from 'react';
import { awaitTime } from '../../../../_utils';

const Demo2 = () => {
  const actionRef = useRef();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen1(true)}>
        不合并每个表单的值并且LStepsForm.StepForm 没有设置 name 属性,以每个 LStepsForm.StepForm
        的索引作为键
      </Button>
      <br />
      <br />
      <br />
      <Button type="primary" onClick={() => setOpen2(true)}>
        不合并每个表单的值并且LStepsForm.StepForm 设置 name 属性,以每个 LStepsForm.StepForm
        的name作为键
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
        <LStepsForm.StepForm name="step1" title="步骤1">
          <LFormItemInput name="name1" label="名字1" required tooltip="禁止空格" />
          <LFormItemInput name="name2" label="名字2" required tooltip="禁止空格" />
        </LStepsForm.StepForm>
        <LStepsForm.StepForm name="step2" title="步骤2">
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
        <LStepsForm.StepForm title="步骤1">
          <LFormItemInput name="name1" label="名字1" required tooltip="禁止空格" />
          <LFormItemInput name="name2" label="名字2" required tooltip="禁止空格" />
        </LStepsForm.StepForm>
        <LStepsForm.StepForm title="步骤2">
          <LFormItemInput
            name="phone"
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

export default Demo2;
