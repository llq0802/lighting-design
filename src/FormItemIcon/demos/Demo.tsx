import { LForm, LFormItemIcon } from 'lighting-design';

const Demo = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={{ buttonAlign: 'center' }}>
      <LFormItemIcon
        name="icon1"
        label="图标"
        activeIconStyle={{ fontSize: 18, color: '#1677ff' }}
      />
    </LForm>
  );
};
export default Demo;
