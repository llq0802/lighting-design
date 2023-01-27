import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemSegmented } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form} submitter={false}>
      <LFormItemSegmented
        label="选择"
        name="segmented"
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        initialValue={'List'}
        request={async () => {
          const result = await awaitTime([
            {
              label: 'List',
              value: 'List',
            },
            {
              label: 'Kanban',
              value: 'Kanban',
            },
            {
              label: 'item',
              value: 'item',
            },
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
