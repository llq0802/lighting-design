import Mock from 'better-mock';
import { LForm, LFormItemTransfer } from 'lighting-design';
import { sleep } from 'lighting-design/test';
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
      <LFormItemTransfer
        name="LFormItemTransfer"
        label="LFormItemTransfer"
        // options={transferMockData}
        request={async (p) => {
          console.log('===p==>', p);
          await sleep();
          return {
            list: transferMockData,
            total: transferMockData.length,
          };
        }}
      />
    </LForm>
  );
};

export default App;
