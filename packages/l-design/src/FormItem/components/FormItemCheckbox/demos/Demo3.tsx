import { LForm, LFormItemCheckbox } from 'lighting-design';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemCheckbox
        label="多选"
        name="select"
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2', disabled: true },
          { label: '打豆豆', value: '3' },
        ]}
      />
    </LForm>
  );
};
export default Index;
