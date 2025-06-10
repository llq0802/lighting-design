import type { LFormItemActionRef } from 'lighting-design';
import { LForm, LFormItemRadio } from 'lighting-design';
import { useRef } from 'react';
import { sleep } from '../../test';

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
          await sleep();
          return [
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
          ];
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
          await sleep();
          return [
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
          ];
        }}
      />
    </LForm>
  );
};
export default Demo2;
