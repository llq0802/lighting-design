import { Divider, Flex } from 'antd';
import { LFormItemInput, LStepsForm } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import { useState } from 'react';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  return (
    <Flex vertical gap={20}>
      <LStepsForm
        onFinish={async (values) => {
          console.log('onFinish', values);
          await sleep();
        }}
        items={[
          {
            title: '步骤1',
            formName: 's1',
            formItems: [
              <LFormItemInput name="input1" label="输入框1" />,
              <LFormItemInput name="input2" required label="输入框2" />,
            ],
          },
          {
            title: '步骤2',
            formName: 's2',
            formItems: [
              <LFormItemInput name="input11" required label="输入框11" />,
              <LFormItemInput name="input22" required label="输入框22" />,
            ],
          },
          {
            title: '步骤3',
            formName: 's3',
            formItems: [
              <LFormItemInput name="input111" required label="输入框111" />,
              <LFormItemInput name="input222" required label="输入框222" />,
            ],
          },
        ]}
      />
      <Divider>分割线</Divider>
      <LStepsForm
        current={current}
        onCurrentChange={setCurrent}
        onFinish={async (values) => {
          console.log('onFinish', values);
          await sleep();
        }}
        items={[
          {
            title: '步骤1',
            formName: 's1',
            formItems: [
              <LFormItemInput name="input1" label="输入框1" />,
              <LFormItemInput name="input2" required label="输入框2" />,
            ],
          },
          {
            title: '步骤2',
            formName: 's2',
            formItems: [
              <LFormItemInput name="input11" required label="输入框11" />,
              <LFormItemInput name="input22" required label="输入框22" />,
            ],
          },
          {
            title: '步骤3',
            formName: 's3',
            formItems: [
              <LFormItemInput name="input111" required label="输入框111" />,
              <LFormItemInput name="input222" required label="输入框222" />,
            ],
          },
        ]}
      />
      <Divider>分割线</Divider>
      <LStepsForm
        isMergeValues
        destroyOnHidden
        submitter={{ position: 'flex-end' }}
        onFinish={async (values) => {
          console.log('onFinish', values);
          await sleep();
          return true;
        }}
        items={[
          {
            title: '步骤1',
            formName: 's1',
            formItems: [
              <LFormItemInput name="input1" label="输入框1" />,
              <LFormItemInput name="input2" required label="输入框2" />,
            ],
          },
          {
            title: '步骤2',
            formName: 's2',
            formItems: [
              <LFormItemInput name="input11" required label="输入框11" />,
              <LFormItemInput name="input22" required label="输入框22" />,
            ],
            onFinish: async (values) => {
              console.log('步骤2-onFinish', values);
              await sleep();
            },
          },
          {
            title: '步骤3',
            formName: 's3',
            formItems: [
              <LFormItemInput name="input111" required label="输入框111" />,
              <LFormItemInput name="input222" required label="输入框222" />,
            ],
          },
        ]}
      />
    </Flex>
  );
};
export default App;
