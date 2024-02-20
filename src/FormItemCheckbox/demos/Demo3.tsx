import { LForm, LFormItemCheckbox } from 'lighting-design';

const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemCheckbox
        required
        label="多选"
        name="select"
        disabled
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
      />
      <LFormItemCheckbox
        required
        label="多选"
        name="select2"
        options={[
          { label: '上班', value: '1', disabled: true },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
      />
    </LForm>
  );
};
export default Demo3;
