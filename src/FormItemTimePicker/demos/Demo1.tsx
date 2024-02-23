import { LForm, LFormItemTimePicker } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();
  return (
    <LForm
      form={form}
      labelCol={{ flex: '90px' }}
      submitter={{ buttonAlign: 'center' }}
      initialValues={{
        time2: '09:46',
      }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemTimePicker
        placeholder="请选择时间1"
        label="时间选择1"
        name="time1"
        required
        contentAfter={<div>后面</div>}
        contentInline
        timePickerProps={{
          onChange(va) {
            console.log('va', va);
          },
        }}
      />
      <LFormItemTimePicker
        label="时间选择2"
        name="time2"
        format="HH:mm"
        required
        contentAfter={<div>后面</div>}
      />
      <LFormItemTimePicker
        label="时间选择3"
        name="time3"
        format="h:mm a"
        timePickerProps={{ use12Hours: true }}
      />
      <LFormItemTimePicker
        label="时间选择3"
        name="time4"
        required
        rangePicker
        placeholder={['开始时间1', '开始时间2']}
      />
      <LFormItemTimePicker label="时间选择4" name="time5" rangePicker />
      <LFormItemTimePicker label="时间选择5" name="time5" rangePicker />
    </LForm>
  );
};
export default Demo1;
