import { LForm, LFormItemCheckbox } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemCheckbox
        label="复选"
        required
        name="checkbox1"
        options={[
          { label: '上班', value: 0 },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
      />
      <LFormItemCheckbox
        label="自定义字段名"
        required
        name="checkbox2"
        options={[
          { name: '上班', id: '1' },
          { name: '睡觉', id: '2' },
          { name: '打豆豆', id: '3' },
        ]}
        fieldNames={{ label: 'name', value: 'id' }}
      />
    </LForm>
  );
};
export default Demo1;
