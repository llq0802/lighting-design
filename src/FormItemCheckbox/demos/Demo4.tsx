import { LoadingOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';
import type { LFormItemActionRef } from 'lighting-design';
import { LForm, LFormItemCheckbox } from 'lighting-design';
import { useRef } from 'react';
import { awaitTime } from '../../_test';

const Demo4 = () => {
  const [form] = LForm.useForm();
  const actionRef = useRef<LFormItemActionRef>();

  useMount(() => {
    console.log('actionRef.current', actionRef.current);
  });

  return (
    <LForm
      initialValues={{ checkbox1: '1', checkbox2: '1' }}
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{ buttonAlign: 80 }}
    >
      <LFormItemCheckbox
        required
        label="多选1"
        name="checkbox1"
        request={async () => {
          const result = await awaitTime([
            { label: '上班', value: '1' },
            { label: '睡觉', value: '2' },
            { label: '打豆豆', value: '3', disabled: true },
          ]);
          if (result.success) {
            return result.data;
          }
        }}
      />
      <LFormItemCheckbox
        required
        label="多选2"
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        name="checkbox2"
        request={async () => {
          const result = await awaitTime([
            { label: '上班', value: '1' },
            { label: '睡觉', value: '2' },
            { label: '打豆豆', value: '3' },
          ]);
          if (result.success) {
            return result.data;
          }
        }}
      />
    </LForm>
  );
};
export default Demo4;
