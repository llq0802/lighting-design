import { LForm, LFormItemCheckbox } from 'lighting-design';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemCheckbox
        name="select"
        required
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
        initialValue={['1', '2']}
      />
    </LForm>
  );
};
export default Index;
