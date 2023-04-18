import { LForm, LFormItemRate } from 'lighting-design';
import { awaitTime } from '../../_test';

const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemRate
        name="rate1"
        label="评分"
        request={async () => {
          const result = await awaitTime(8);
          if (result.success) {
            return result.data;
          }
        }}
      />
    </LForm>
  );
};
export default Demo3;
