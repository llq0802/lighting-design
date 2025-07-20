import Mock from 'better-mock';
import { LForm, LFormItemMentions } from 'lighting-design';
import React from 'react';
const opts1 = Mock.mock({ 'list|5': [{ label: '@cname', value: '@cname' }] }).list;
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
      <LFormItemMentions required label="标签1" name="mentions-1" options={opts1} />
    </LForm>
  );
};

export default App;
