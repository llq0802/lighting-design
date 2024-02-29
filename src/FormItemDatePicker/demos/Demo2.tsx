import { LForm, LFormItemDatePicker } from 'lighting-design';

const Demo2 = () => {
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
        rangePicker
        label="日期选择"
        name="date1"
        picker="date"
        disabledDateBefore={7}
        disabledDateAfter={7}
        placeholder={['请选择日期1', '请选择日期2']}
        dateValueType="number"
      />
      <LFormItemDatePicker rangePicker label="日期时间选择" name="date11" picker="date" showTime />
      <LFormItemDatePicker rangePicker label="周选择" name="date2" picker="week" />
      <LFormItemDatePicker rangePicker label="月份选择" name="date3" picker="month" />
      <LFormItemDatePicker rangePicker label="季度选择" name="date5" picker="quarter" />
      <LFormItemDatePicker rangePicker label="年选择" name="date6" picker="year" />
    </LForm>
  );
};
export default Demo2;
