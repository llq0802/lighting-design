import { LForm, LFormItemSwitch } from 'lighting-design';
import React from 'react';

type FieldType = {
  input?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      initialValues={
        {
          // input: '2',
        }
      }
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemSwitch name="input" label="选择" checkedValue="2" unCheckedValue="1" />
    </LForm>
  );
};

export default App;
