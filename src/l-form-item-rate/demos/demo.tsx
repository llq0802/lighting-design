import { HeartOutlined } from '@ant-design/icons';
import { LForm, LFormItemRate } from 'lighting-design';

const Demo = () => {
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
      <LFormItemRate
        label="评分"
        disabled
        name="rate3"
        initialValue={3.5}
        rateProps={{
          allowHalf: true,
        }}
      />
      <LFormItemRate label="评分" name="rate4" initialValue={3} character={<HeartOutlined />} />
    </LForm>
  );
};
export default Demo;
