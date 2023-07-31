import {
  customDisabledHours,
  LForm,
  LFormItemTimePicker,
} from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();
  return (
    <LForm
      form={form}
      labelWidth={200}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemTimePicker
        label="禁用包括当前小时以前小时"
        name="time0"
        disabledHourBefore={0}
      />
      <LFormItemTimePicker
        label="禁用当前小时的前2小时以前"
        name="time1"
        disabledHourBefore={2}
      />
      <LFormItemTimePicker
        label="禁用当前小时的后2小时以后"
        name="time2"
        disabledHourAfter={2}
      />

      <LFormItemTimePicker
        label="只能选择13-23小时"
        name="time3"
        timePickerProps={{
          disabledTime: () => ({
            disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          }),
        }}
      />

      <LFormItemTimePicker
        label="自定义当前小时的禁用"
        name="time6"
        timePickerProps={{
          disabledTime: () => {
            return {
              disabledHours: () => customDisabledHours(12, 0),
            };
          },
        }}
      />

      <LFormItemTimePicker
        label="只能选择当前时间的前后7小时"
        name="time4"
        rangePicker
        disabledHourBefore={7}
        disabledHourAfter={7}
      />
    </LForm>
  );
};
export default Demo1;
