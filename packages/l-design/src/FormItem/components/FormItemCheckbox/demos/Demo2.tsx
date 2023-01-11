import { LForm, LFormItemCheckbox } from 'lighting-design';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemCheckbox
        label="选择"
        name="select"
        beforeAll={{
          label: '全选',
          value: 'all',
          onChange(e) {
            console.log(e);
          },
        }}
        required
        initialValue={['3']}
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
    </LForm>
  );
};
export default Index;
