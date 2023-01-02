import { Form } from 'antd';
import { LForm, LFormItemColor } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemColor colorType="chrome" label="颜色选择1" name="color1" required />
      <LFormItemColor colorType="sketch" label="颜色选择2" name="color2" required />
      <LFormItemColor disabled colorType="chrome" label="禁用选择" name="color3" required />
      <LFormItemColor colorType="photoshop" label="选择" name="color4" required />
    </LForm>
  );
};
export default Demo1;
