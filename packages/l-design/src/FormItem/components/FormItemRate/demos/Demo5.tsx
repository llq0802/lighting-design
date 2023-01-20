import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { LForm, LFormItemRate } from 'lighting-design';

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const Demo5 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemRate
        name="rate1"
        label="评分"
        initialValue={3}
        rateProps={{
          character: ({ index }) => index + 1,
        }}
      />
      <LFormItemRate
        name="rate2"
        label="评分"
        initialValue={3}
        rateProps={{
          character: ({ index }) => customIcons[index + 1],
        }}
      />
    </LForm>
  );
};
export default Demo5;
