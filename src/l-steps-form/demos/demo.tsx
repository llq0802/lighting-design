import { LFormItemInput } from 'lighting-design';
import LStepsForm from '../index copy';

const App: React.FC = () => {
  return (
    <LStepsForm
      // destroyOnHidden
      items={[
        {
          formName: 'a1',
          formItems: [
            <LFormItemInput name="input1" label="输入框1" />,
            <LFormItemInput name="input11" required label="输入框11" />,
          ],
        },
        {
          formName: 'a2',
          formItems: [<LFormItemInput name="input2" required label="输入框2" />],
        },
        {
          formName: 'a3',
          formItems: [<LFormItemInput name="input3" required label="输入框3" />],
        },
      ]}
    />
  );
};
export default App;
