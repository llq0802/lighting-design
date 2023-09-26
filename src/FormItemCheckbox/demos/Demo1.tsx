import { LForm, LFormItemCheckbox } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemCheckbox
        label="复选"
        required
        name="select"
        options={[
          { label: '上班', value: 0 },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
        // initialValue={['1', '2']}
      />
    </LForm>
  );
};
export default Demo1;
