import dayjs from 'dayjs';
import { LForm, LFormItemDate } from 'lighting-design';
import React from 'react';

type FieldType = {
  date?: string;
  date1?: string;
  datetimestamp?: string;
  datevariant?: string;
  datedisabled?: string;
  dateformat?: string;
  date2?: string;
  date3?: string;
  date4?: string;
  date5?: string;
  date6?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      labelWidth={'10rem'}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemDate name="date1" label="默认日期" />
      <LFormItemDate name="date" label="minDate,maxDate" minDate={dayjs()} maxDate={dayjs().add(7, 'day')} />
      <LFormItemDate name="datetimestamp" label="timestamp" dateValueType="timestamp" />
      <LFormItemDate name="datevariant" label="variant" variant="filled" />
      <LFormItemDate name="datedisabled" label="disabled" disabled />
      <LFormItemDate name="date2" label="year" picker="year" />
      <LFormItemDate name="date3" label="month" picker="month" />
      <LFormItemDate name="date4" label="quarter" picker="quarter" />
      <LFormItemDate name="date5" label="week" picker="week" />
      <LFormItemDate name="date6" label="showTime" picker="date" showTime placeholder="请选择日期时间" />
      <LFormItemDate
        name="dateformat"
        label="format"
        picker="date"
        format="YYYY/MM/DD HH:mm:ss"
        showTime
        placeholder="请选择日期时间"
      />
    </LForm>
  );
};

export default App;
