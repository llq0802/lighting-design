import { LFormItemInput, LStepsForm } from 'lighting-design';

const App: React.FC = () => {
  return (
    <LStepsForm
      // destroyOnHidden
      items={[
        {
          formName: 'a1',
          formItems: [<LFormItemInput key="1" name="input1" required label="输入框1" />],
          onFinish() {},
        },
        {
          formName: 'a2',
          formItems: [<LFormItemInput key="1" name="input2" required label="输入框2" />],
        },
        {
          formName: 'a3',
          formItems: [<LFormItemInput key="1" name="input3" required label="输入框3" />],
        },
      ]}
    />
  );
};
export default App;
