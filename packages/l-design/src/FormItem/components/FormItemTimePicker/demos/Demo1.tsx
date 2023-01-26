import { LForm, LFormItemTimePicker } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      name="LFormItemTimePicker"
      form={form}
      labelCol={{ flex: '90px' }}
      submitter={{
        buttonAlign: 'center',
      }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemTimePicker
        label="时间选择1"
        name="time1"
        required
        contentAfter={<div>后面</div>}
        contentInline
      />
      <LFormItemTimePicker
        label="时间选择2"
        name="time2"
        format="HH:mm"
        required
        contentAfter={<div>后面</div>}
      />
      <LFormItemTimePicker label="时间选择3" name="time2" format="HH:mm" required disabled />
      <LFormItemTimePicker label="时间选择3" name="time3" required rangePicker />
      <LFormItemTimePicker label="时间选择4" name="time4" required rangePicker />
    </LForm>
  );
};
export default Demo1;
