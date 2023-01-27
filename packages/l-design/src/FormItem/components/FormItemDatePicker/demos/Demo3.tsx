import { LForm, LFormItemDatePicker } from 'lighting-design';

const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      // labelCol={{ flex: '90px' }}
      labelWidth={110}
      submitter={{ buttonAlign: 110 }}
      name="LFormItemDatePicker"
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
      initialValues={{
        date1: '2023-01-05',
        date11: '2023-01-05 18:31:35',
        date2: '2023-4周',
        date3: '2023-02',
        date5: '2023-Q3',
        date6: '2020',
      }}
    >
      <LFormItemDatePicker disabled label="日期选择" name="date1" required picker="date" />
      <LFormItemDatePicker
        disabled
        label="日期时间选择"
        name="date11"
        required
        picker="date"
        showTime
      />
      <LFormItemDatePicker disabled label="周选择" name="date2" required picker="week" />
      <LFormItemDatePicker disabled label="月份选择" name="date3" required picker="month" />
      <LFormItemDatePicker disabled label="季度选择" name="date5" required picker="quarter" />
      <LFormItemDatePicker disabled label="年选择" name="date6" required picker="year" />
    </LForm>
  );
};
export default Demo3;
