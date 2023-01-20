import { LForm, LFormItemRate } from 'lighting-design';

const Demo2 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemRate
        disabled
        name="rate1"
        initialValue={3.5}
        rateProps={{
          allowHalf: true,
        }}
      />
    </LForm>
  );
};
export default Demo2;
