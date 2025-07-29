import { LForm, LFormItemInput } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';

type FieldType = {
  input?: string;
  input1?: string;
  input2?: string;
  input3?: string;
  input4?: string;
  phone?: string;
  email?: string;
  idCard?: string;
  bankCard?: string;
  url?: string;
  input999?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  return (
    <LForm<FieldType>
      submitter={{ position: 'center' }}
      form={form}
      labelWidth={110}
      onFinish={async (values) => {
        console.log('===onFinish===', values);
        await sleep();
      }}
    >
      <LFormItemInput required name="input" label="姓名" maxLength={10} prefix="prefix" suffix="suffix" />
      <LFormItemInput min={2} max={8} name="input1" label="min,max" tooltip="tooltip" />
      <LFormItemInput min={2} name="input2" label="min" />
      <LFormItemInput max={8} name="input3" label="max" />
      <LFormItemInput
        label="自定义检验"
        name="input4"
        customValidator={async (value: any) => {
          if (!value || !/^\d+$/.test(value)) {
            return Promise.reject('请输入数字!');
          }
        }}
      />
      <LFormItemInput name="chinese" label="中文汉字" type="chinese" messageVariables={{ label: '请输入中文!' }} />
      <LFormItemInput
        name="phone"
        label="手机号"
        type="phone"
        messageVariables={{ label: '请输入正确的手机号格式!' }}
      />
      <LFormItemInput
        name="email"
        type="email"
        label="邮箱"
        required
        messageVariables={{ label: '请输入正确的邮箱格式!' }}
      />
      <LFormItemInput
        name="idCard"
        type="idCard"
        label="身份证"
        required
        messageVariables={{ label: '请输入正确的身份证格式!' }}
      />
      <LFormItemInput
        name="bankCard"
        label="银行卡"
        required
        type="bankCard"
        messageVariables={{ label: '请输入正确的银行卡格式!' }}
      />
      <LFormItemInput
        name="url"
        label="URL网址"
        required
        type="url"
        messageVariables={{ label: '请输入正确的网址格式!' }}
      />
      <LFormItemInput
        name="input999"
        label="inputProps"
        inputProps={{
          allowClear: true,
        }}
      />
    </LForm>
  );
};

export default App;
