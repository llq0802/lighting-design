import { Form } from 'antd';
import { LForm, LFormItemDatePicker } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemDatePicker label="日期选择1" name="date0" required showTime />
      <LFormItemDatePicker label="日期选择2" name="date1" required disabledDateAfter={1} />
      <LFormItemDatePicker label="日期选择2" name="date12" required disabledDateAfter={0} />
      <LFormItemDatePicker
        label="月份选择"
        name="date3"
        required
        disabledDateBefore={1}
        picker="month"
        rangePicker
      />
      <LFormItemDatePicker
        label="季度选择"
        name="date2"
        required
        disabledDateAfter={1}
        picker="quarter"
        placeholder="季度选择"
      />
      <LFormItemDatePicker
        rangePicker
        label="季度选择"
        name="date22"
        required
        disabledDateAfter={1}
        picker="quarter"
        placeholder={['开始季度', '结束季度']}
      />
    </LForm>
  );
};
export default Demo1;
