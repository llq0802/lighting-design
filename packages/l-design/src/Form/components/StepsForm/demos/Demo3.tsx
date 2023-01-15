import { Button, message, Result, Space } from 'antd';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { useRef } from 'react';
import { awaitTime } from '../../../../_utils';

const Demo = () => {
  const actionRef = useRef(null);

  return (
    <LStepsForm
      onFinish={async (values) => {
        await awaitTime('', 100);
        console.log(values);
        message.success('提交成功');

        // 因为第二步已经提交，这里手动触发下一步
        // actionRef.current!.next();
      }}
      actionRef={actionRef}
    >
      <LStepsForm.StepForm
        title="步骤1"
        onFinish={async (values) => {
          await awaitTime('', 100);
          console.log(values);
        }}
      >
        <LFormItemInput label="名字1" name="name1" required />
        <LFormItemInput label="名字2" name="name2" required />
      </LStepsForm.StepForm>

      <LStepsForm.StepForm
        title="步骤2"
        onFinish={async (values) => {
          await awaitTime('', 1000);
          console.log(values);
        }}
        submitter={{
          showNext: false,
          forceShowSubmit: true,
          render: (dom, props) => {
            console.log('dom-props ', dom, props);
            return (
              <Space>
                {dom[0]}
                <Button
                  type="primary"
                  {...props.submitButtonProps}
                  onClick={() => {
                    // actionRef.current.next(true);
                    actionRef.current.submit(false);

                    console.log(' allFormValues', actionRef.current.allFormValues);
                  }}
                >
                  提交
                </Button>
              </Space>
            );
          },
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
