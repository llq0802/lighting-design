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
      initialValues={{
        time2: '09:46',
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
        disabledHourBefore={2}
        disabledHourAfter={2}
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
        format="HH:mm"
        rangePicker
      />
      <LFormItemTimePicker
        label="时间选择3"
        name="time4"
        required
        rangePicker
      />
      <LFormItemTimePicker
        label="时间选择4"
        name="time5"
        rangePicker
        disabledHourBefore={2}
        disabledHourAfter={2}
      />
    </LForm>
  );
};
export default Demo1;
