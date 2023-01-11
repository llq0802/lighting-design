import { Form } from 'antd';
import { LForm, LFormItemRate } from 'lighting-design';
import { HeartOutlined } from '@ant-design/icons'

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <LForm name="LFormItemSelect" form={form} submitter={false}>
      <LFormItemRate
        name="rate1"
        initialValue={3}
        required
        rateProps={{
          character: '哈',
        }}
      />
      <LFormItemRate
        name="rate2"
        initialValue={3}
        required
        rateProps={{
          character: <HeartOutlined />,
        }}
      />
      <LFormItemRate
        name="rate3"
        initialValue={3}
        required
        rateProps={{
          character: 'B',
        }}
      />
    </LForm>
  );
};
export default Demo1;
