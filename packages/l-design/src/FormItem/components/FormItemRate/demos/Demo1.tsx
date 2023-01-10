import { Form } from 'antd';
import { LForm, LFormItemRate } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <LForm
      name="LFormItemSelect"
      form={form}
      onValuesChange={(e) => {
        console.log(e);
      }}
    >
      <LFormItemRate
        label="评分"
        name="rate1"
        initialValue={3.5}
        rateProps={{
          allowHalf: true,
        }}
        required
      />
      <LFormItemRate
        label="评分"
        name="rate2"
        rateProps={{
          allowHalf: true,
        }}
        required
      />
    </LForm>
  );
};
export default Demo1;
