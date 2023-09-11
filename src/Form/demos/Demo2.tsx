import { LForm, LFormItemDatePicker, LFormItemInput } from 'lighting-design';

const Demo5 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LForm
        labelWidth={90}
        submitter={{ buttonAlign: 90 }}
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        transformValues={(values) => {
          const { dates, ...resetValues } = values;
          const newValues = {
            ...resetValues,
            startDate: values.dates[0],
            endDate: values.dates[1],
          };
          return newValues;
        }}
      >
        <LFormItemInput name="name2" required label="姓名" />
        <LFormItemDatePicker
          label="日期选择"
          name="date2"
          required
          rangePicker
        />
      </LForm>
    </>
  );
};

export default Demo5;
