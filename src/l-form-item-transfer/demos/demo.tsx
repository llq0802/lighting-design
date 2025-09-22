import Mock from 'better-mock';
import { LForm, LFormItemTransfer } from 'lighting-design';
import React from 'react';

const transferMockData: any[] = Mock.mock({ 'list|25': [{ value: '@id', label: '@city' }] }).list;

type FieldType = {
  time1?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemTransfer disabled={false} name="LFormItemTransfer1" label="基础" options={transferMockData} />
      <LFormItemTransfer name="LFormItemTransfer2" label="block" options={transferMockData} block={false} />
      <LFormItemTransfer name="LFormItemTransfer3" label="listHeight" options={transferMockData} listHeight={300} />
      <LFormItemTransfer name="LFormItemTransfer4" label="pagination" options={transferMockData} pagination />
      <LFormItemTransfer name="LFormItemTransfer6" label="showSearch" showSearch options={transferMockData} />
      <LFormItemTransfer
        name="LFormItemTransfer5"
        label="fieldNames"
        options={Mock.mock({ 'list|25': [{ key: '@id', title: '@city' }] }).list}
        fieldNames={{
          label: 'title',
          value: 'key',
        }}
      />
    </LForm>
  );
};

export default App;
