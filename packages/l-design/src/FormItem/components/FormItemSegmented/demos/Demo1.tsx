import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { LForm, LFormItemSegmented } from 'lighting-design';
const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemSegmented
        label="选择"
        required
        name="segmented"
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
        label="选择"
        required
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
        ]}
      />
    </LForm>
  );
};
export default Demo1;
