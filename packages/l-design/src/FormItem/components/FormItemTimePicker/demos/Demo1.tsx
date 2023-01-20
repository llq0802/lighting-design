import { LForm, LFormItemTimePicker } from 'lighting-design';
import moment from 'moment';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemTimePicker" form={form}>
      <LFormItemTimePicker
        label="时间选择"
        name="date1"
        format="HH:mm"
        required
        initialValue={'15:08'}
        contentAfter={<div>后面</div>}
        contentInline
      />
      <LFormItemTimePicker
        label="时间选择2"
        name="date2"
        format="HH:mm:ss"
        initialValue={[moment('15:08:23', 'HH:mm:ss'), moment('15:08:23', 'HH:mm:ss')]}
        required
        rangePicker
      />
      <LFormItemTimePicker
        label="时间选择3"
        name="date3"
        format="HH:mm:ss"
        initialValue={['15:08:23', '15:08:23', 'HH:mm:ss']}
        required
        rangePicker
      />
    </LForm>
  );
};
export default Demo1;
