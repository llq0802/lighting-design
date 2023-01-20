import { LForm, LFormItemRate } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onValuesChange={(e) => {
        console.log(e);
      }}
    >
      <LFormItemRate label="评分" name="rate1" initialValue={3} required />
      <LFormItemRate
        label="半心"
        name="rate2"
        rateProps={{
          allowHalf: true,
          count: 7,
        }}
        required
      />
    </LForm>
  );
};
export default Demo1;
