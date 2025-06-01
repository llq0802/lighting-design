import Mock from 'better-mock';
import { LForm, LFormItemCheckbox } from 'lighting-design';

const opts = Mock.mock({ 'list|8': [{ label: '@city', value: '@id' }] }).list;
const opts1 = Mock.mock({ 'list|8': [{ name: '@cname', id: '@id' }] }).list;
const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemCheckbox label="复选" required name="checkbox1" options={opts} />
      <LFormItemCheckbox
        label="自定义字段名"
        required
        name="checkbox2"
        options={opts1}
        fieldNames={{ label: 'name', value: 'id' }}
      />
    </LForm>
  );
};
export default Demo1;
