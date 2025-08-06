import { LFormItemInput, LStepsForm } from 'lighting-design';

const App: React.FC = () => {
  return (
    <LStepsForm
      submitter={{
        submitStepNum: 1,
      }}
      isMergeValues
      onFinish={async (values) => {
        console.log('onFinish', values);
        // return true;
      }}
      items={[
        {
          title: '步骤1',
          formName: 's1',
          formItems: [
            <LFormItemInput name="input1" label="输入框1" />,
            <LFormItemInput name="input2" required label="输入框2" />,
            <LFormItemInput name="input3" required label="输入框3" />,
          ],
        },
        {
          title: '步骤2',
          formName: 's2',
          formItems: [<LFormItemInput name="input11" required label="输入框11" />],
        },
        {
          title: '步骤3',
          formName: 's3',
          formItems: [<LFormItemInput name="input111" required label="输入框111" />],
        },
      ]}
    />
  );
};
export default App;
