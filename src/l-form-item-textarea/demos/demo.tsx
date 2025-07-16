import { LForm, LFormItemTextarea } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';

type FieldType = {
  input?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      submitter={{
        isEnterSubmit: true,
        position: 'center',
        onReset(event) {
          console.log('onReset');
        },
        onSubmit: (vals) => {
          console.log('onSubmit', vals);
        },
      }}
      labelWidth={100}
      form={form}
      onFinish={async (values) => {
        console.log('===onFinish===', values);
        await sleep();
      }}
    >
      <LFormItemTextarea name="input1" label="备注" />
      <LFormItemTextarea
        name="input2"
        label="备注"
        autoSize={{
          minRows: 4,
          maxRows: 6,
        }}
      />
    </LForm>
  );
};

export default App;
