import { Button, Modal } from 'antd';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useEffect, useRef, useState } from 'react';

const Demo2 = () => {
  const actionRef = useRef();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // console.log('actionRef', actionRef.current);
  }, []);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开弹窗
      </Button>

      <LStepsForm
        actionRef={actionRef}
        onFinish={async (valuse) => {
          console.log('StepsForm-valuse', valuse);
        }}
        stepsFormRender={(stepsDom, formDom, submitterDom) => {
          return (
            <Modal
              title="分步表单"
              open={open}
              footer={submitterDom}
              width={600}
              onCancel={() => setOpen(false)}
            >
              {stepsDom}
              {formDom}
            </Modal>
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
      {/* 
      <Modal title="分步表单" open={open} width={600} onCancel={() => setOpen(false)}>
        <LStepsForm
          actionRef={actionRef}
          submitter={false}
          onFinish={async (valuse) => {
            console.log('StepsForm-valuse', valuse);
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
      </Modal> */}
    </>
  );
};

export default Demo2;
