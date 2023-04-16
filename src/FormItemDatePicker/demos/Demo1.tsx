import { LForm, LFormItemDatePicker } from 'lighting-design';

const Demo1 = () => {
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
        date1: '2023-04-16',
      }}
    >
      <LFormItemDatePicker
        label="日期选择"
        name="date1"
        picker="date"
        disabledDateBefore={2}
      />
      <LFormItemDatePicker
        placeholder={'日期选择9'}
        label="日期时间选择"
        name="date2"
        picker="date"
        showTime
      />
      <LFormItemDatePicker label="年选择" name="date6" picker="year" required />

      <LFormItemDatePicker label="月份选择" name="date4" picker="month" />

      {/* <LFormItemDatePicker
        label="季度选择"
        name="date5"
        required
        picker="quarter"
      />
      <LFormItemDatePicker label="周选择" name="date3" required picker="week" /> */}
    </LForm>
  );
};
export default Demo1;
