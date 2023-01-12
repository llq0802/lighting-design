import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemSegmented } from 'lighting-design';

const Demo1 = () => {
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
        request={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
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
            }, 3000);
          });
        }}
      />
    </LForm>
  );
};
export default Demo1;
