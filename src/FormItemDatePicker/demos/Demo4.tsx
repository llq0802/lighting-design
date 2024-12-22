import { LForm, LFormItemDatePicker } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      // labelCol={{ flex: '90px' }}
      labelWidth={110}
      submitter={{ buttonAlign: 110 }}
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemDatePicker
        label="日期选择"
        name="date1"
        required
        dateValueType="number"
      />
      <LFormItemDatePicker
        label="日期时间选择"
        name="date11"
        dateValueType="number"
        required
        showTime
      />
    </LForm>
  );
};
export default Demo1;
