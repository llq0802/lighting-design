import { LForm, LFormItemRate } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemRate label="评分" name="rate1" />
      <LFormItemRate
        label="半心"
        name="rate2"
        rateProps={{
          allowHalf: true,
        }}
      />
    </LForm>
  );
};
export default Demo1;
