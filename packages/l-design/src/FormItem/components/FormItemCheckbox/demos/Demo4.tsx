import { LForm, LFormItemCheckbox } from 'lighting-design';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemCheckbox
        label="选择"
        name="checkbox"
        request={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
                { label: '上班', value: '1' },
                { label: '睡觉', value: '2' },
                { label: '打豆豆', value: '3' },
              ]);
            }, 3000);
          });
        }}
        required
        initialValue={['3']}
      />
    </LForm>
  );
};
export default Index;
