import { LForm, LFormItemColor } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();
  return (
    <LForm
      form={form}
      onFinish={(values) => {
        console.log('==values====>', values);
      }}
    >
      <LFormItemColor label="颜色选择1" name="color1" required showText />
      <LFormItemColor label="颜色选择2" name="color2" required />
      <LFormItemColor label="颜色选择3" name="color3" required initialValue="#996060" />
      <LFormItemColor disabled label="禁用选择" name="color4" />
    </LForm>
  );
};
export default Demo1;
