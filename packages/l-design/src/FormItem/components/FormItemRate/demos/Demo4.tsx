import { HeartOutlined } from '@ant-design/icons';
import { LForm, LFormItemRate } from 'lighting-design';

const Demo4 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemRate
        name="rate1"
        initialValue={3}
        rateProps={{
          character: '哈',
        }}
      />
      <LFormItemRate
        name="rate2"
        initialValue={3}
        rateProps={{
          character: <HeartOutlined />,
        }}
      />
      <LFormItemRate
        name="rate3"
        initialValue={3}
        rateProps={{
          character: 'B',
        }}
      />
    </LForm>
  );
};
export default Demo4;
