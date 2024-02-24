import Mock from 'better-mock';
import { LForm, LFormItemCheckbox } from 'lighting-design';
const opts = Mock.mock({ 'list|6': [{ label: '@city', value: '@id' }] }).list;

const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemCheckbox required label="多选" name="select" disabled options={opts} />
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
