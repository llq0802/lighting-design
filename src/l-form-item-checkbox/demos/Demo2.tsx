import Mock from 'better-mock';
import { LForm, LFormItemCheckbox } from 'lighting-design';
const opts = Mock.mock({ 'list|6': [{ label: '@city', value: '@id' }] }).list;

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
        label="选择1"
        name="select"
        beforeAll={{
          label: '全选',
          onChange(e) {
            console.log(e);
          },
        }}
        checkboxProps={{
          onChange(checkedValue) {
            console.log(checkedValue);
          },
        }}
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
      />
      <LFormItemCheckbox label="选择2" name="select2" beforeAll options={opts} />
    </LForm>
  );
};
export default Demo2;
