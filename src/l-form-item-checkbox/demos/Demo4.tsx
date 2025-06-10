import { LoadingOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';
import Mock from 'better-mock';
import type { LFormItemActionRef } from 'lighting-design';
import { LForm, LFormItemCheckbox } from 'lighting-design';
import { useRef } from 'react';
import { sleep } from '../../test';
const opts = Mock.mock({ 'list|6': [{ label: '@city', value: '@id' }] }).list;

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
          await sleep();
          return opts;
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
          await sleep(2000);
          return [
            { label: '上班', value: '1' },
            { label: '睡觉', value: '2' },
            { label: '打豆豆', value: '3' },
          ];
        }}
      />
    </LForm>
  );
};
export default Demo4;
