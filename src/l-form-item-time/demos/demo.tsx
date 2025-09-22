import { LForm, LFormItemTime } from 'lighting-design';
import React from 'react';

type FieldType = {
  time1?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemTime name="time" label="时间1" disabledHourBefore={1} rangePicker required />
      <LFormItemTime label="禁用包括当前小时以前小时" name="time0" disabledHourBefore={0} />
      <LFormItemTime label="禁用当前小时的前2小时以前" name="time1" disabledHourBefore={2} />
      <LFormItemTime label="禁用当前小时的后2小时以后" name="time2" disabledHourAfter={2} />
      <LFormItemTime
        label="只能选择13-23小时"
        name="time3"
        timePickerProps={{
          disabledTime: () => ({
            disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          }),
        }}
      />

      <LFormItemTime
        label="只能选择当前时间的前后7小时"
        name="time4"
        rangePicker
        disabledHourBefore={7}
        disabledHourAfter={7}
      />
    </LForm>
  );
};

export default App;
