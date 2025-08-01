import { LForm, LFormItemDate } from 'lighting-design';

const Demo2 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      labelWidth={'200px'}
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemDate
        rangePicker
        label="日期选择"
        name="date1"
        picker="date"
        placeholder={['请选择日期1', '请选择日期2']}
      />
      <LFormItemDate rangePicker label="日期时间选择" name="date11" picker="date" showTime />
      <LFormItemDate rangePicker label="周选择" name="date2" picker="week" />
      <LFormItemDate rangePicker label="月份选择" name="date3" picker="month" />
      <LFormItemDate rangePicker label="季度选择" name="date5" picker="quarter" />
      <LFormItemDate rangePicker label="年选择" name="date6" picker="year" />
    </LForm>
  );
};
export default Demo2;
