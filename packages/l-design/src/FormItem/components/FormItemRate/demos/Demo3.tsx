import { Form } from 'antd';
import { LForm, LFormItemRate } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemRate
        name="rate1"
        request={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(3);
            }, 3000);
          });
        }}
        rateProps={{
          allowHalf: true,
        }}
      />
    </LForm>
  );
};
export default Demo1;
