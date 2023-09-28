import { Button, message, Modal, Space } from 'antd';
import type { LStepsFormActionRef } from 'lighting-design';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useRef, useState } from 'react';
import { awaitTime } from '../../_test';

const Demo1 = () => {
  const actionRef1 = useRef<LStepsFormActionRef>();
  const actionRef2 = useRef<LStepsFormActionRef>();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => setOpen1(true)}>
          打开弹窗1
        </Button>
        <Button type="primary" onClick={() => setOpen2(true)}>
          打开弹窗2
        </Button>
      </Space>
      {/* 方式一 */}
      <LStepsForm
        actionRef={actionRef1}
        onFinish={async (valuse) => {
          await awaitTime();
          console.log('StepsForm-valuse', valuse);
          message.success('提交成功');
          return true;
        }}
        stepsFormRender={(stepsDom, formDom, submitterDom) => {
          return (
            <Modal
              title="弹窗中的步骤表单1"
              open={open1}
              footer={submitterDom}
              width={600}
              onCancel={() => {
                setOpen1(false);
                actionRef1.current?.reset();
              }}
            >
              {stepsDom}
              {formDom}
            </Modal>
          );
        }}
      >
        <LStepsForm.StepForm title="步骤1" name="eqwsd">
          <LFormItemInput
            name={['step1', 'name1']}
            label="名字1"
            required
            tooltip="禁止空格"
          />
          <LFormItemInput
            name={['step1', 'name2']}
            label="名字2"
            required
            tooltip="禁止空格"
          />
        </LStepsForm.StepForm>
        <LStepsForm.StepForm title="步骤2" name="fgvfd1">
          <LFormItemInput
            name={['step2', 'phone']}
            label="手机号"
            required
            tooltip="禁止空格 只能输入数字"
            type="phone"
          />
        </LStepsForm.StepForm>
      </LStepsForm>
      {/* 方式二*/}
      <Modal
        footer={false} // 隐藏Modal的底部配置底部配置
        title="弹窗中的步骤表单2"
        open={open2}
        width={600}
        onCancel={() => {
          setOpen2(false);
          actionRef2.current?.reset();
        }}
      >
        <LStepsForm
          submitter={{ buttonAlign: 'right' }}
          actionRef={actionRef2}
          onFinish={async (valuse) => {
            console.log('StepsForm-valuse', valuse);
            return true;
          }}
        >
          <LStepsForm.StepForm title="步骤1" name="dsadas">
            <LFormItemInput
              name={['step1', 'name1']}
              label="名字1"
              required
              tooltip="禁止空格"
            />
            <LFormItemInput
              name={['step1', 'name2']}
              label="名字2"
              required
              tooltip="禁止空格"
            />
          </LStepsForm.StepForm>
          <LStepsForm.StepForm title="步骤2" name="fsawdf">
            <LFormItemInput
              name={['step2', 'phone']}
              label="手机号"
              required
              tooltip="禁止空格 只能输入数字"
              type="phone"
            />
          </LStepsForm.StepForm>
        </LStepsForm>
      </Modal>
    </div>
  );
};

export default Demo1;
