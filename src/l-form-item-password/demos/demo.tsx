import { LForm, LFormItemPassword } from 'lighting-design';
import React from 'react';

type FieldType = {
  password?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      submitter={{
        isEnterSubmit: true,
        position: 'center',
        onReset(event) {
          console.log('onReset');
        },
        onSubmit: (vals) => {
          console.log('onSubmit', vals);
        },
      }}
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
      <LFormItemPassword strictValidator name="password" label="密码" />
    </LForm>
  );
};

export default App;
