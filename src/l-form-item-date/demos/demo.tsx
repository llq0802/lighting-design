import { LForm, LFormItemDate } from 'lighting-design';
import React from 'react';

type FieldType = {
  date1?: string;
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
      <LFormItemDate
        name="date1"
        label="日期1"
        picker="week"
        // format="YYYY-w周"
      />
    </LForm>
  );
};

export default App;
