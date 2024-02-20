import { HeartOutlined } from '@ant-design/icons';
import { LForm, LFormItemRate } from 'lighting-design';

const Demo4 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemRate
        label="评分"
        name="rate1"
        initialValue={3}
        rateProps={{
          character: '哈',
        }}
      />
      <LFormItemRate label="评分" name="rate2" initialValue={3} character={<HeartOutlined />} />
      <LFormItemRate label="评分" name="rate3" initialValue={3} character="B" />
    </LForm>
  );
};
export default Demo4;
