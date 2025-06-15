import { LForm, LFormItemSelect } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React, { useEffect } from 'react';

type FieldType = {
  time1?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  const [options, setOptions] = React.useState<any>([]);

  useEffect(() => {
    setTimeout(() => {
      setOptions([
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ]);
    }, 3000);
  }, []);

  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemSelect
        name="time1"
        label="下拉框"
        // options={options}
        request={async () => {
          await sleep(3000);
          return [
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
          ];
        }}
      />
    </LForm>
  );
};

export default App;
