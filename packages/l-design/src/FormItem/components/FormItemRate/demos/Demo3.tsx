import { Form } from 'antd';
import { LForm, LFormItemRate } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Demo3 = () => {
  const [form] = Form.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemRate
        name="rate1"
        label="评分"
        request={async () => {
          const result = await awaitTime(3);
          if (result.success) {
            return result.data;
          }
        }}
        rateProps={{
          allowHalf: true,
          disabled: true,
        }}
      />
    </LForm>
  );
};
export default Demo3;
