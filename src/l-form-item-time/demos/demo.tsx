import { LForm, LFormItemTime } from 'lighting-design';
import React from 'react';

type FieldType = {
  time1?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemTime name="time1" label="时间1" disabledHourBefore={1} rangePicker required />
    </LForm>
  );
};

export default App;
