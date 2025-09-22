import Mock from 'better-mock';
import { LForm, LFormItemMentions } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';
const opts1 = Mock.mock({ 'list|20': [{ label: '@cname', value: '@cname' }] }).list;

type FieldType = {
  mentions1?: string;
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
      <LFormItemMentions required label="标签1" name="mentions1" options={opts1} />
      <LFormItemMentions
        label="request"
        name="mentions2"
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|6': [{ label: '@cname', value: '@cname' }] }).list;
        }}
      />
    </LForm>
  );
};

export default App;
