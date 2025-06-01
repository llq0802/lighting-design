import { LForm, LFormItemDatePicker, LFormItemInput } from 'lighting-design';

const Demo5 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LForm
        labelWidth="10rem"
        submitter={{ buttonAlign: '10rem' }}
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        transformValues={(values) => {
          const { dates, ...resetValues } = values;
          const newValues = {
            ...resetValues,
            startDate: dates[0],
            endDate: dates[1],
          };
          return newValues;
        }}
      >
        <LFormItemInput name="name" required label="姓名" />
        <LFormItemDatePicker label="日期选择" name="dates" required rangePicker />
      </LForm>
    </>
  );
};

export default Demo5;
