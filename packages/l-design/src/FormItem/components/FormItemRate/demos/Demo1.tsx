import { Form } from 'antd';
import { LForm, LFormItemRate } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <LForm
      form={form}
      submitter={false}
      onValuesChange={(e) => {
        console.log(e);
      }}
    >
      <LFormItemRate label="评分" name="rate1" initialValue={3} required />
      <LFormItemRate
        label="半心"
        name="rate2"
        initialValue={3.5}
        rateProps={{
          allowHalf: true,
        }}
        required
      />
    </LForm>
  );
};
export default Demo1;
