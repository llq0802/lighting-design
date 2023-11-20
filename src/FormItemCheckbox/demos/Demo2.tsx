import { LForm, LFormItemCheckbox } from 'lighting-design';

const Demo2 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemCheckbox
        initialValue={['1', '2', '3']}
        required
        label="选择1"
        name="select"
        beforeAll={{
          label: '全部',
          onChange(e) {
            console.log(e);
          },
        }}
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
        checkboxProps={{
          onChange(checkedValue) {
            console.log(checkedValue);
          },
        }}
      />
      <LFormItemCheckbox
        label="选择2"
        name="select2"
        beforeAll
        required
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
      />
    </LForm>
  );
};
export default Demo2;
