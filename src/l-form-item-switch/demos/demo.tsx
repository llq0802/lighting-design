import { LForm, LFormItemSwitch } from 'lighting-design';
import React from 'react';

type FieldType = {
  input?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 2000);
        });
      }}
    >
      <LFormItemSwitch name="input" label="选择" />
    </LForm>
  );
};

export default App;
