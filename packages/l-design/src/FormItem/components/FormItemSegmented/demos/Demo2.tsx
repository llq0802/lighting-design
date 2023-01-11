import { LForm, LFormItemSegmented } from 'lighting-design';
const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form} submitter={false}>
      <LFormItemSegmented
        contentInline
        label="选择"
        name="segmented"
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
