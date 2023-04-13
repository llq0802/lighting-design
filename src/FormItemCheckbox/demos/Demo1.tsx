import { LForm, LFormItemCheckbox } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemCheckbox" form={form}>
      <LFormItemCheckbox
        required
        name="select"
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
        // initialValue={['1', '2']}
      />
    </LForm>
  );
};
export default Demo1;
