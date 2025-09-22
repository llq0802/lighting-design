import { Button, Divider, Flex, message, Result, Space } from 'antd';
import { LForm, LFormItemInput, LStepsForm, type LStepsFormActionRef } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import { useRef } from 'react';

const App: React.FC = () => {
  const [form] = LForm.useForm();
  const actionRef = useRef<LStepsFormActionRef>();

  return (
    <Flex vertical gap={20}>
      <LStepsForm
        actionRef={actionRef}
        form={form}
        submitter={{
          submitStepNum: 2,
        }}
        onFinish={async (values) => {
          console.log('onFinish', values);
          await sleep();
          actionRef.current?.toLast();
        }}
        items={[
          {
            title: '步骤1',
            formName: 's1',
            formItems: [<LFormItemInput name="input1" label="输入框1" />],
          },
          {
            title: '步骤2',
            formName: 's2',
            formItems: [<LFormItemInput name="input11" label="输入框11" />],
          },
          {
            title: '步骤3',
            formName: 's3',
            formItems: [<LFormItemInput name="input111" label="输入框111" />],
          },
          {
            title: '结果页',
            formName: 's4',
            formItems: [
              <Result
                status="success"
                title="创建成功"
                subTitle={
                  <Space size={30}>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.</div>
                  </Space>
                }
                extra={[
                  <Button type="primary" key="back" onClick={() => message.info('点击返回页面')}>
                    返回页面
                  </Button>,
                  <Button key="reset" onClick={() => actionRef.current?.reset()}>
                    再次创建
                  </Button>,
                ]}
              />,
            ],
          },
        ]}
      />
      <Divider>分割线</Divider>
    </Flex>
  );
};
export default App;
