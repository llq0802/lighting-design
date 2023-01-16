import { Button, message, Result, Space } from 'antd';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useRef } from 'react';
import { awaitTime } from '../../../../_utils';

const Demo = () => {
  const actionRef = useRef(null);

  return (
    <LStepsForm
      submitStepNum={2}
      onFinish={async (values) => {
        await awaitTime('', 1000);
        console.log('onFinish-values', values);
        // 因为第二步已经提交，这里手动触发下一步
        actionRef.current!.next();
      }}
      actionRef={actionRef}
    >
      <LStepsForm.StepForm
        title="步骤1"
        onFinish={async (values) => {
          await awaitTime('', 100);
          console.log('步骤1', values);
        }}
      >
        <LFormItemInput label="名字1" name="name1" required />
        <LFormItemInput label="名字2" name="name2" required />
      </LStepsForm.StepForm>

      <LStepsForm.StepForm
        title="步骤2"
        onFinish={async (values) => {
          console.log('步骤2', values);
        }}
        submitter={{
          showNext: false,
          forceShowSubmit: true,
        }}
      >
        <LFormItemInput label="手机1" name="phone1" required />
        <LFormItemInput label="手机2" name="phone2" required />
      </LStepsForm.StepForm>

      <LStepsForm.StepForm title="结果页" submitter={false}>
        <Result
          status="success"
          title="创建成功"
          subTitle={
            <>
              <Space size={30}>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.</div>
              </Space>
            </>
          }
          extra={[
            <Button type="primary" key="back" onClick={() => message.info('点击返回')}>
              返回
            </Button>,
            <Button key="reset" onClick={() => actionRef.current.reset()}>
              再次创建
            </Button>,
          ]}
        />
      </LStepsForm.StepForm>
    </LStepsForm>
  );
};

export default Demo;
