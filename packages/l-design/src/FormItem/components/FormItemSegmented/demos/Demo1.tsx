import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { LForm, LFormItemSegmented } from 'lighting-design';
const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form} submitter={false}>
      <LFormItemSegmented
        name="segmented1"
        options={[
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
        ]}
      />
      <LFormItemSegmented
        name="segmented2"
        options={[
          {
            label: 'List',
            value: 'List',
            icon: <BarsOutlined />,
          },
          {
            label: 'Kanban',
            value: 'Kanban',
            icon: <AppstoreOutlined />,
          },
        ]}
      />

      <LFormItemSegmented
        name="segmented3"
        options={[
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
            disabled: true,
          },
        ]}
      />
    </LForm>
  );
};
export default Demo1;
