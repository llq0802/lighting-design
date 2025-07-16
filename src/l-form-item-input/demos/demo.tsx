import { LForm, LFormItemInput } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';

type FieldType = {
  input?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  const customValidator = async (value) => {
    if (!value || !/^\d+$/.test(value)) {
      return Promise.reject('请输入数字!');
    }
  };

  return (
    <LForm<FieldType>
      submitter={{ position: 'center' }}
      form={form}
      labelWidth={100}
      onFinish={async (values) => {
        console.log('===onFinish===', values);
        await sleep();
      }}
    >
      <LFormItemInput required name="input" label="姓名" maxLength={10} />
      <LFormItemInput min={2} max={8} name="input2" label="min,max" tooltip="tooltip" />
      <LFormItemInput label="自定义检验" name="code" customValidator={customValidator} />
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
        name="input3"
        label="inputProps"
        inputProps={{
          allowClear: true,
        }}
      />
    </LForm>
  );
};

export default App;
