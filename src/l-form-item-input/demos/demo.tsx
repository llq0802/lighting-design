import { LForm, LFormItemInput } from 'lighting-design';
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
      onFinish={(values) => {
        console.log('===onFinish===', values);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 2000);
        });
      }}
    >
      <LFormItemInput
        showCount
        name="input"
        maxLength={10}
        label="姓名"
        rules={[
          {
            required: true,
            min: 2,
            max: 10,
            message: '格式错误',
          },
        ]}
        inputProps={{
          allowClear: true,
        }}
      />
    </LForm>
  );
};

export default App;
