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
      initialValues={{
        // date3: '2023-32周',
        date4: '2023-05',
        date5: '2023-Q1',
      }}
    >
      <LFormItemDatePicker
        placeholder="请选择日期1"
        label="日期选择"
        name="date1"
        picker="date"
      />
      <LFormItemDatePicker
        placeholder={'日期选择9'}
        label="日期时间选择"
        name="date2"
        picker="date"
        showTime
        dateValueType="number"
      />
      <LFormItemDatePicker label="周选择" name="date3" picker="week" />
      <LFormItemDatePicker label="月份选择" name="date4" picker="month" />
      <LFormItemDatePicker label="季度选择" name="date5" picker="quarter" />
      <LFormItemDatePicker label="年选择" name="date6" picker="year" />
    </LForm>
  );
};
export default Demo1;
