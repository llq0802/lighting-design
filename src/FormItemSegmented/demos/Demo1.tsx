import { LForm, LFormItemSegmented } from 'lighting-design';
const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={(vals) => {
        console.log('==vals====>', vals);
      }}
    >
      <LFormItemSegmented
        label="属性1"
        name="segmented1"
        options={[
          { label: 'List', value: '1' },
          { label: 'Kanban', value: '2' },
          { label: 'Item', value: '3' },
        ]}
      />
      {/* <LFormItemSegmented
        label="属性2"
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
      /> */}

      {/* <LFormItemSegmented
        label="属性3"
        name="segmented3"
        block
        options={[
          { label: 'List', value: 'List' },
          { label: 'Kanban', value: 'Kanban' },
          { label: 'item', value: 'item' },
          { label: 'das', value: 'das' },
        ]}
      /> */}
    </LForm>
  );
};
export default Demo1;
