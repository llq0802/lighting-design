import { LForm, LFormItemSwitch } from 'lighting-design';
import React from 'react';

type FieldType = {
  input?: string;
  input1?: number;
  input2?: number;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      labelWidth={150}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemSwitch name="input" label="基础" />
      <LFormItemSwitch name="input1" label="unCheckedValue" checkedValue={1} unCheckedValue={0} />
      <LFormItemSwitch name="input2" label="unCheckedBg" unCheckedBg="red" checkedBg="yellow" />
    </LForm>
  );
};

export default App;
