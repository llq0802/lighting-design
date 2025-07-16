import { LForm, LFormItemNumber } from 'lighting-design';
import React from 'react';

type FieldType = {
  number1?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
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
      <LFormItemNumber name="number1" label="金额" />
      <LFormItemNumber name="number2" label="小数点" precision={2} />
      <LFormItemNumber name="number3" label="min,max" min={0} max={100} />
      <LFormItemNumber name="number4" label="suffix" suffix="￥" />
      <LFormItemNumber name="number4" label="addonAfter" addonAfter="$" />
    </LForm>
  );
};

export default App;
