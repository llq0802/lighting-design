import { LForm, LFormItemCheckbox } from 'lighting-design';
import React from 'react';

type FieldType = {
  checkbox1?: string;
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
      <LFormItemCheckbox
        label="基础复选"
        name="checkbox1"
        required
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
