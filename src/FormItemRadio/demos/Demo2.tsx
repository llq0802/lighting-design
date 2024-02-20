import { LForm, LFormItemRadio } from 'lighting-design';
import { awaitTime } from '../../_test';

const Demo2 = () => {
  const [form] = LForm.useForm();
  return (
    <LForm form={form}>
      <LFormItemRadio
        label="单选1"
        name="LFormItemRadio1"
        required
        request={async () => {
          const result = await awaitTime([
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
          ]);
          if (result.success) {
            return result.data;
          }
        }}
        requestOptions={{
          cacheKey: 'LFormItemSelect-Demo2-1',
        }}
      />
      <LFormItemRadio
        label="单选2"
        name="LFormItemRadio2"
        all
        required
        request={async () => {
          const result = await awaitTime(
            [
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'Resolving', value: 'processing' },
            ],
            3000,
          );
          if (result.success) return result.data;
        }}
      />
    </LForm>
  );
};
export default Demo2;
