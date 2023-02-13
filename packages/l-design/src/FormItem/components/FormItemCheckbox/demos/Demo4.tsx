import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemCheckbox } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{
        buttonAlign: 80,
      }}
      initialValues={['3']}
    >
      <LFormItemCheckbox
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
export default Index;
