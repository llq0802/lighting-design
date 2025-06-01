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
      <LFormItemRate label="评分" name="rate1" required />
      <LFormItemRate label="半心" name="rate2" required count={7} allowHalf />
    </LForm>
  );
};
export default Demo1;
