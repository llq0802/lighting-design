import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemCheckbox } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemCheckbox
        label="选择"
        name="checkbox1"
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
        required
        initialValue={['3']}
      />
      <LFormItemCheckbox
        label="选择"
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
        options={[{ label: '上班', value: '1' }]}
        required
      />
    </LForm>
  );
};
export default Index;
