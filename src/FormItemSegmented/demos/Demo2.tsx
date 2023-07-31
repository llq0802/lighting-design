import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemSegmented } from 'lighting-design';
import { awaitTime } from '../../_test';

const Demo2 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form} submitter={false}>
      <LFormItemSegmented
        label="选择"
        name="segmented3"
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        request={async () => {
          const result = await awaitTime([
            {
              label: 'List',
              value: 'list',
            },
            {
              label: 'Kanban',
              value: 'kanban',
            },
            {
              label: 'Item',
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
export default Demo2;
