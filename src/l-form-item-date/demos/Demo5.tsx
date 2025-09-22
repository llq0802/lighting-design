import { LForm, LFormItemDate } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemDate label="禁用今天和今天之前" name="date1" required disabledDateBefore={0} />
      <LFormItemDate label="禁用今天和今天之后" name="date2" required disabledDateAfter={0} />
      <LFormItemDate label="禁用今天之前(不包括今天)" name="date3" required showTime disabledDateBefore={1} />
      <LFormItemDate label="禁用今天之后(不包括今天)" name="date4" required showTime disabledDateAfter={1} />
      <LFormItemDate label="只能选择前7天之后" name="date5" required disabledDateBefore={7} />
      <LFormItemDate label="只能选择前后7天" name="date6" required disabledDateBefore={7} disabledDateAfter={7} />
    </LForm>
  );
};
export default Demo1;
