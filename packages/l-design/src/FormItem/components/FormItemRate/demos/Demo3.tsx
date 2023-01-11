import { Form } from 'antd';
import { LForm, LFormItemRate } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <LForm name="LFormItemSelect" form={form} submitter={false}>
      <LFormItemRate
        name="rate1"
        initialValue={3.5}
        rateProps={{
          disabled: true,
          allowHalf: true,
        }}
        required
      />
    </LForm>
  );
};
export default Demo1;
