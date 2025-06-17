import { LForm, LFormItemRadio } from 'lighting-design';
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
      <LFormItemRadio
        required
        name="time1"
        label="基础单选"
        options={[
          { id: 'open', name: 'open' },
          { id: 'closed', name: 'closed' },
          { id: 'processing', name: 'processing' },
        ]}
        fieldNames={{ label: 'name', value: 'id' }}
      />
    </LForm>
  );
};

export default App;
