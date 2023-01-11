import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { LForm, LFormItemRate } from 'lighting-design';

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemRate
        name="rate1"
        initialValue={3}
        rateProps={{
          character: ({ index }) => index + 1,
        }}
      />
      <LFormItemRate
        name="rate2"
        initialValue={3}
        rateProps={{
          character: ({ index }) => customIcons[index + 1],
        }}
      />
    </LForm>
  );
};
export default Demo1;
