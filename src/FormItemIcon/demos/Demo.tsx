import { LForm, LFormItemIcon } from 'lighting-design';

const Demo = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      name="LFormItemIcon"
      form={form}
      submitter={{ buttonAlign: 'center' }}
    >
      <LFormItemIcon
        name="icon"
        label="图标"
        iconStyle={{ fontSize: 18, color: '#10101090' }}
      />
    </LForm>
  );
};
export default Demo;
