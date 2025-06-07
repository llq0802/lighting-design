import { useMount } from 'ahooks';
import { Form } from 'antd';
import { LForm } from 'lighting-design';
import React from 'react';
import LFormItemInput from '..';

type FieldType = {
  input?: string;
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  useMount(() => {
    form.setFieldsValue({
      username: '李岚清',
    });
  });
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
        console.log('====onFinish====', values);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 2000);
        });
      }}
    >
      <LFormItemInput required showCount name="input" maxLength={10} label="姓名" type="phone" />
    </LForm>
  );
};

export default App;
