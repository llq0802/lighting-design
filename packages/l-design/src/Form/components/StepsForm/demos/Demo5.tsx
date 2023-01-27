import { Button, message, Modal } from 'antd';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useEffect, useRef, useState } from 'react';
import { awaitTime } from '../../../../_utils';

const formValue = {
  fstep1: {
    name1: '李青',
    name2: '蛮王',
  },
  fstep2: {
    phone1: '123456789',
    phone2: '987654321',
  },
};

const Demo2 = () => {
  const actionRef = useRef();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      // console.log('actionRef', actionRef.current);
      actionRef.current.formInstanceList.forEach((item, index) => {
        item.setFieldsValue(formValue);
      });
    }
  }, [open]);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开弹窗
      </Button>

      <LStepsForm
        // isMergeValues={false}
        actionRef={actionRef}
        onFinish={async (valuse) => {
          await awaitTime();
          console.log('StepsForm-valuse', valuse);
          message.success('提交成功');
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
        <LStepsForm.StepForm title="步骤1" name="step1">
          <LFormItemInput name={['fstep1', 'name1']} label="名字1" required tooltip="禁止空格" />
          <LFormItemInput name={['fstep1', 'name2']} label="名字2" required tooltip="禁止空格" />
        </LStepsForm.StepForm>
        <LStepsForm.StepForm title="步骤2" name="step2">
          <LFormItemInput
            name={['fstep2', 'phone1']}
            label="手机号1"
            required
            tooltip="禁止空格 只能输入数字"
            type="phone"
          />
          <LFormItemInput
            name={['fstep2', 'phone2']}
            label="手机号2"
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
