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
        required
        placeholder="请选择日期1"
        name="date1"
        showTime
        label="日期1"
        disabledDateBefore={0}
        rangePicker
      />
    </LForm>
  );
};

export default App;
