import { LFormItemInput, LStepsForm } from 'lighting-design';

const App: React.FC = () => {
  return (
    <LStepsForm
      // destroyOnHidden
      items={[
        {
          formName: 's1',
          formItems: [
            <LFormItemInput name="input1" label="输入框1" />,
            <LFormItemInput name="input11" required label="输入框11" />,
          ],
        },
        {
          formName: 's2',
          formItems: [<LFormItemInput name="input2" required label="输入框2" />],
        },
        {
          formName: 's3',
          formItems: [<LFormItemInput name="input3" required label="输入框3" />],
        },
      ]}
    />
  );
};
export default App;
