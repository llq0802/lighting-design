import { LoadingOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';
import type { LFormItemActionRef } from 'lighting-design';
import { LForm, LFormItemSelect } from 'lighting-design';
import { useRef } from 'react';
import { awaitTime } from '../../_test';

const Demo2 = () => {
  const [form] = LForm.useForm();
  const actionRef = useRef<LFormItemActionRef>();

  useMount(() => {
    console.log('actionRef.current', actionRef.current);
  });

  return (
    <LForm
      name="LFormItemSelect2"
      form={form}
      labelWidth={80}
      submitter={{
        buttonAlign: 80,
      }}
    >
      <LFormItemSelect
        actionRef={actionRef}
        label="select1"
        name="select1"
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
      />
      <LFormItemSelect
        label="select2"
        name="select2"
        required
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        request={async () => {
          const result = await awaitTime(
            [
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'Resolving', value: 'processing' },
            ],
            3000,
          );
          if (result.success) {
            return result.data;
          }
        }}
        all
      />
    </LForm>
  );
};
export default Demo2;
