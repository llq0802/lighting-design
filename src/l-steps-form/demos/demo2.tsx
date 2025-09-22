import { Button, Divider, Flex } from 'antd';
import {
  LForm,
  LFormItemColor,
  LFormItemInput,
  LFormItemSwitch,
  LStepsForm,
  type LStepsFormActionRef,
} from 'lighting-design';
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
        onFinish={async (values) => {
          console.log('onFinish', values);
          await sleep();
          actionRef.current?.toLast();
        }}
        items={[
          {
            title: '步骤1',
            formName: 's1',
            formItems: [
              <LFormItemInput name="input1" label="输入框1" />,
              {
                name: ['input22', 'switch1'],
                content: (
                  <Flex gap={16}>
                    <LFormItemInput name={['s1', 'input22']} required label="输入框11" />
                    <LFormItemSwitch name={['s1', 'switch1']} label="开关1" />
                  </Flex>
                ),
              },
              {
                name: ['color1'],
                content: (
                  <Flex gap={16}>
                    <LFormItemColor name={['s1', 'color1']} label="颜色" />
                    <Button>按钮</Button>
                  </Flex>
                ),
              },
            ],
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
        ]}
      />
      <Divider>分割线</Divider>
      <LStepsForm
        actionRef={actionRef}
        onFinish={async (values) => {
          console.log('onFinish', values);
          await sleep();
          actionRef.current?.toLast();
        }}
        items={[
          {
            title: '步骤1',
            formName: 's1',
            formItems: [
              <LFormItemInput name="input1" label="输入框1" />,
              {
                name: ['input22', 'switch1'],
                content: (
                  <Flex gap={16}>
                    <LFormItemInput name={['s1', 'input22']} required label="输入框11" />
                    <LFormItemSwitch name={['s1', 'switch1']} label="开关1" />
                  </Flex>
                ),
              },
              {
                name: ['color1'],
                content: (
                  <Flex gap={16}>
                    <LFormItemColor name={['s1', 'color1']} label="颜色" />
                    <Button>按钮</Button>
                  </Flex>
                ),
              },
            ],
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
        ]}
        stepsProps={{
          direction: 'vertical',
        }}
        contentStyle={{
          flex: 1,
        }}
        renderChildren={(doms, props) => {
          return (
            <Flex
              gap={32}
              style={{
                minHeight: 300,
              }}
            >
              <Flex>{doms.stepsDom}</Flex>
              <Flex vertical gap={20} flex={1}>
                {doms.contentDom}
                {doms.submitterDom}
              </Flex>
            </Flex>
          );
        }}
      />
    </Flex>
  );
};
export default App;
