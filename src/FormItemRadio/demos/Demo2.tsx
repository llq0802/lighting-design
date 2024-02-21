import type { LFormItemActionRef } from 'lighting-design';
import { LForm, LFormItemRadio } from 'lighting-design';
import { useRef } from 'react';
import { awaitTime } from '../../_test';

const Demo2 = () => {
  const [form] = LForm.useForm();
  const actionRef = useRef<LFormItemActionRef>();
  return (
    <LForm form={form}>
      <LFormItemRadio
        label="单选1"
        name="LFormItemRadio1"
        required
        actionRef={actionRef}
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
